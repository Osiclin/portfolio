import Head from 'next/head'
import Intro from '../components/Intro'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Hamburger from '../components/Hamburger'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

export default function Home() {
  // const [dispaly, setDisplay] = useState(false)


  // useEffect(() => {
  //   console.log(document.getElementById('menu'))
  // })

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Logo />
        <Menu />
        <Hamburger />
        
        <Intro />
      </main>
      
    </div>
  )
}
