import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import Projectcard from '../components/Projectcard'
import styles from '../styles/Home.module.css'
import styling from '../styles/Projects.module.css'

export default function Projects() {
    return(
        <div className={styles.container}>
            <Head>
                <title>Osita Ezeigbo | My Portfolio</title>
            </Head>

            <main>
            
                <div>
                    <div>
                        <PageTitle title="projects" subtitle="explore my project catalogue."/>
                    </div>
                    <div id={styling.projectcontainer}>
                        <Projectcard src='/images/vd.jpg' width="450px" title="- vasiti" details="This is a landing page i made with Next JS & React JS." href="https://vasiti-six.vercel.app" />
                        <Projectcard src='/images/md.jpg' width="450px" title="- myTodo" details="A Todo List App. Helps you keep track of events." href="https://mytodoapp-osiclin.vercel.app/" />
                        <Projectcard src='/images/mad.jpg' width="450px" title="- markup" details="MarkUp is a free figma design i stumbled upon on the internet, loved it & decided to develope it." href="https://osiclin.github.io/markup" />
                        <Projectcard src='/images/od.jpg' width="450px" title="- oneburner" details="This is a design i stumbled upon on the internet. I redesigned it, developed it, & made it look better ." href="https://osiclin.github.io/oneburner" />

                        <Projectcard src='/images/ud.jpg' width="450px" title="- unscramble words" details="In this word game questions are asked at random and players are given a clue to help answer each question." href="https://osiclin.github.io/unscramblewords" />
                        <Projectcard src='/images/epm.jpg' width="160px" title="- elpadrino" details="(Mobile Version Only). El Padrino is a mexican food store Web App designed and developed by me." href="https://osiclin.github.io/elpadrino" />
                        {/* <Projectcard src='/images/.jpg' title="- lyrics" details="(Still in development). Search lyrics of your favourite song & sing along." href="https://osiclin.github.io/lyrics" /> */}
                    </div>
                    
                </div>
            </main>
        </div>
    )
}