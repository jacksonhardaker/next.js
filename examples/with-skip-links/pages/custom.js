import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSkipLinkActions } from '../components/a11y/WithSkipLinks'

export default function Custom() {
  const { register } = useSkipLinkActions()

  return (
    <div className={styles.container}>
      <Head>
        <title>Page specific skip links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Page Specific Skip Links</h1>

        <div
          className={styles.grid}
          ref={register({
            label: 'Skip to Information Grid',
            targetId: 'info-grid-skip',
            position: 1,
          })}
        >
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            ref={register({
              label: 'Skip to Deploy Card',
              targetId: 'deploy-card-skip',
              position: 1,
            })}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
