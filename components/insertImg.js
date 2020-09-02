import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Sean Kelly'
export const siteTitle = 'Sean Kelly'

export default function InsertImg() {
  return (
    <div className={styles.container}>
      {(
        <Link href="/">
          <a>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerImage} ${utilStyles.borderSquare}`}
              alt={name}
            />
          </a>
        </Link>
      )}
    </div>
  )
}