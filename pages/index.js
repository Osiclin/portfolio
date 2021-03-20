import Head from 'next/head'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <Intro />
      </main>
      
    </div>
  )
}
