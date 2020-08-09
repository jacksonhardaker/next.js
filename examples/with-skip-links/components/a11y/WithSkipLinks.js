import { useReducer, useContext, createContext } from 'react'

const SkipLinksDispatchContext = createContext()
const SkipLinksStateContext = createContext()

const sortLinks = (links) =>
  links.sort((a, b) =>
    a.position < b.position ? -1 : a.position > b.position ? 1 : 0
  )

function reducer(state, { type, payload }) {
  switch (type) {
    case 'REGISTER':
      const exists = state.find(
        (skipPoint) => skipPoint.targetId === payload.targetId
      )
      return exists
        ? sortLinks(
            state.map((skipPoint) =>
              skipPoint.targetId === payload.targetId
                ? Object.assign(skipPoint, payload)
                : skipPoint
            )
          )
        : sortLinks([
            ...state,
            {
              ...payload, // Order by position in the document
            },
          ])
    case 'CLEAR':
      return []
    default:
      throw new Error(`Unknown action: ${type}`)
  }
}

export function WithSkipLinks({ children, defaultSkipLinks }) {
  const [state, dispatch] = useReducer(reducer, defaultSkipLinks || [])

  return (
    <SkipLinksStateContext.Provider value={state}>
      <SkipLinksDispatchContext.Provider value={dispatch}>
        {children}
      </SkipLinksDispatchContext.Provider>
    </SkipLinksStateContext.Provider>
  )
}

export function useSkipLinkActions() {
  const dispatch = useContext(SkipLinksDispatchContext)

  const register = (skipPoint) => {
    return (ref) => {
      if (ref) {
        // Assign ID once ref becomes available
        dispatch({
          type: 'REGISTER',
          payload: {
            ...skipPoint,
            position: ref.getBoundingClientRect().top,
          },
        })
        ref.id = skipPoint.targetId
      }
    }
  }

  const clear = () => {
    dispatch({ type: 'CLEAR' })
  }

  return { register, clear }
}

export const useSkipLinksContent = () => useContext(SkipLinksStateContext)
