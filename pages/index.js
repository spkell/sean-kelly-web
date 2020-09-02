import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMdCenter}>
        <font size = "4">
          <i>Most obstacles exist only as a figment of your imagination</i>
        </font>
      </section>
      <section className={utilStyles.headingMdCenter}>
        <Link href="./resume">
          <a>Resume</a>
        </Link>
      </section>
      <section className={utilStyles.headingMdTight}>
        <p>Contact Me</p>
        <font size = "2">
          <p>Email: skelly240@gmail.com</p>
          <p>Bitcoin: bc1qfqvwly7ar883kp2m56gc78nf2prygngw900hjh</p>
        </font>
      </section>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Stream of Consciousness</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
