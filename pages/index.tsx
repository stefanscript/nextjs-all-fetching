import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nextjs all fetch methods</title>
        <meta name="description" content="nextjs all fetch methods" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          nextjs all fetch methods
        </h1>

        <p className={styles.description}>
          Exploring the multiple ways to fetch data in nextjs
        </p>

        <div className={styles.grid}>
          <a href="/csr" className={styles.card}>
            <h2>CSR &rarr;</h2>
            <p>Client Side Rendering using useEffect, swr</p>
          </a>

          <a href="/ssr" className={styles.card}>
            <h2>SSR &rarr;</h2>
            <p>Server Side Rendering</p>
          </a>

          <a
            href="/ssg"
            className={styles.card}
          >
            <h2>SSG &rarr;</h2>
            <p>Static Site Generation</p>
          </a>

          <a
            href="/isg"
            className={styles.card}
          >
            <h2>ISG &rarr;</h2>
            <p>
              Incremental Static Generation
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
