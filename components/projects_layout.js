import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Sean Kelly'
export const siteTitle = 'Sean Kelly'

export default function Projects_Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Projects"
          content="Some things I've been working on"
        />
        <meta
          property="Preview image"
          content='../public/images/goal.jpg'
        />
        <title>Projects</title>
      </Head>
      <header>
        {home && (
            <div>
              <header>
                <img
                  src="/images/construction.png"
                  alt="Construction"
                />
              </header>
            </div>
          )}
      </header>
      <header className={styles.header}>
        <h2 className={utilStyles.headingMd}>
          <main>{children}</main>
        </h2>
        </header>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
    </div>
  )
}