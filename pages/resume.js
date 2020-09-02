import Layout from '../components/layout'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/layout.module.css'
// import Link from 'next/link'

export default function Resume2020() {
  return (
    <Layout>
      <Head>
        <title>
          Resume
        </title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXlCenter}>Resume</h1>
        <header className={styles.header}>
          <>
            <img
              src="./images/resume.jpg"
              alt="Resume"
            />
          </>
        </header>
      </article>
    </Layout>
  )
}

// import React, { Component } from 'react';
// import { Document, Page } from "react-pdf";

// Resume2020();

// class MyApp extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1,
//   }
 
//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   }
 
//   render() {
//     const { pageNumber, numPages } = this.state;
 
//     return (
//       <div>
//         <Document
//           file="../../src/Resume.pdf"
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>Page {pageNumber} of {numPages}</p>
//       </div>
//     );
//   }
// }

// export default MyApp;