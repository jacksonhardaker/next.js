import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useSkipLinkActions } from '../components/a11y/WithSkipLinks'

export default function SSR() {
  const { register } = useSkipLinkActions()

  return (
    <div className={styles.container}>
      <Head>
        <title>SSR Skip Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SSR Skip Links</h1>

        <h2
          id="images-heading"
          ref={register({
            label: 'Navigate to Images',
            targetId: 'images-heading',
          })}
        >
          Images
        </h2>
        <div className={styles.grid}>
          <a
            href="https://picsum.photos/300/200?random=1"
            className={styles.card}
          >
            <img src="https://picsum.photos/300/200?random=1" alt="" />
          </a>

          <a
            href="https://picsum.photos/300/200?random=2"
            className={styles.card}
          >
            <img src="https://picsum.photos/300/200?random=2" alt="" />
          </a>

          <a
            href="https://picsum.photos/300/200?random=3"
            className={styles.card}
          >
            <img src="https://picsum.photos/300/200?random=3" alt="" />
          </a>

          <a
            href="https://picsum.photos/300/200?random=4"
            className={styles.card}
          >
            <img src="https://picsum.photos/300/200?random=4" alt="" />
          </a>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      defaultSkipLinks: [
        { label: 'Navigate to Images', targetId: 'images-heading' },
      ],
    },
  }
}
