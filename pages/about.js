import Image from 'next/image'
import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Hamburger from '../components/Hamburger'
import styles from '../styles/Aboutdetails.module.css'
import styling from '../styles/Home.module.css'
import Aboutdetails from '../components/Aboutdetails'



export default function About() {
    return(
        <div className={styling.container}>
            <Head>
                <title>Osita Ezeigbo | About</title>
            </Head>

            <main>
                <Logo />
                <Menu />
                <Hamburger />
                <div>
                    <div>
                        <PageTitle title="about" subtitle="explore my project catalogue."/>
                    </div>
                    <Aboutdetails />
                </div>
            </main>
        </div>
    )
}