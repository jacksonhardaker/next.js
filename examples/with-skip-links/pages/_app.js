import '../styles/globals.css'
import { WithSkipLinks } from '../components/a11y/WithSkipLinks'
import { Layout } from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WithSkipLinks>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WithSkipLinks>
    </>
  )
}

export default MyApp
