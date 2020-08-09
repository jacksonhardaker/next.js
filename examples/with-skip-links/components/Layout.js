import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSkipLinkActions } from './a11y/WithSkipLinks'
import { SkipLinks } from './a11y/SkipLinks'

import styles from './Layout.module.css'

const pages = [
  { href: '/', name: 'Home' },
  { href: '/custom', name: 'Page Specific Skip Links' },
  { href: '/ssr', name: 'Page with SSR Skip Links' },
]

export function Layout({ children }) {
  const { clear, register } = useSkipLinkActions()
  const router = useRouter()

  // Clear links between page navigation to allow for page specific skip links
  useEffect(() => {
    router.events.on('routeChangeStart', clear)
    return () => {
      router.events.off('routeChangeStart', clear)
    }
  }, [clear, router.events])

  return (
    <>
      <SkipLinks />
      <header className={styles.header}>
        <nav
          ref={register({ label: 'Skip to Navigation', targetId: 'main-nav' })}
        >
          <ul>
            {pages.map(({ href, name }) => (
              <li key={name}>
                <Link href={href}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div
        ref={register({
          label: 'Skip to Main Content',
          targetId: 'main-content',
        })}
      >
        {children}
      </div>
      <footer
        ref={register({ label: 'Skip to Footer', targetId: 'main-footer' })}
        className={styles.footer}
      >
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
