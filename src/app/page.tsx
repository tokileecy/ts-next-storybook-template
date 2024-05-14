import Head from 'next/head'
import * as styles from './page.styles'
import Task1 from './task-1'

export default function Home() {
  return (
    <main className={styles.root}>
      <Head>
        <title>ts-next-storybook-template</title>
        <meta name="description" content="ts-next-storybook-template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ts-next-storybook-template</h1>
        <div className={styles.content}>
          <Task1 />
        </div>
      </main>
    </main>
  )
}
