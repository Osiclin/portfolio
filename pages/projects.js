import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import Projectcard from '../components/Projectcard'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Hamburger from '../components/Hamburger'
import styles from '../styles/Home.module.css'
import styling from '../styles/Projects.module.css'

export default function Projects() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Osita Ezeigbo | My Portfolio</title>
            </Head>

            <main>
            <Logo />
            <Menu />
            <Hamburger />
                <div>
                    <div>
                        <PageTitle title="projects" subtitle="explore my project catalogue."/>
                    </div>
                    <div id={styling.projectcontainer}>
                        <Projectcard title="- vasiti" details="This is a landing page i made with Next JS & React JS." href="https://vasiti-six.vercel.app" />
                        <Projectcard title="- unscramble words" details="In this word game questions are asked at random and players are given a clue to help answer each question." href="https://osiclin.github.io/unscramblewords" />
                        <Projectcard title="- markup" details="MarkUp is a free figma design i stumbled upon on the internet, loved it & decided to develope it." href="https://osiclin.github.io/markup" />
                        <Projectcard title="- oneburner" details="This is a design i stumbled upon on the internet. I redesigned it, developed it, & made it look better ." href="https://osiclin.github.io/oneburner" />
                        <Projectcard title="- myTodo" details="A Todo List App. Helps you keep track of events. (still in development)" href="https://mytodoapp-osiclin.vercel.app/" />
                        <Projectcard title="- lyrics" details="Search lyrics of your favourite song & sing along. (still in development)" href="https://osiclin.github.io/lyrics" />
                    </div>
                    
                </div>
            </main>
        </div>
    )
}