import type { Metadata } from 'next'
import * as styles from '@/app/page.styles'
import Task1 from '@/app/task-1'

export const metadata: Metadata = {
  title: 'ts-next-storybook-template',
  description: 'ts-next-storybook-template',
}

export default function Home() {
  return (
    <main className={styles.root}>
      <main className={styles.main}>
        <h1 className={styles.title}>ts-next-storybook-template</h1>
        <div className={styles.content}>
          <Task1 />
        </div>
      </main>
    </main>
  )
}
