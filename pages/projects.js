import Projects_Layout from '../components/projects_layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Projects() {
  return (
    <Projects_Layout home>
      <Head></Head>
      <article>
        <section>
          <h1 className={utilStyles.headingXlCenter}>Projects</h1>
        </section>
        <a href="https://www.deedradar.live" target="_blank">
            <span>Massachusetts Deed Radar</span>
        </a>
      </article>
    </Projects_Layout>
  )
}
