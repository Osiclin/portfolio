import Head from 'next/head'
import PageTitle from '../components/PageTitle'
import styling from '../styles/Home.module.css'
import Aboutdetails from '../components/Aboutdetails'



export default function About() {
    return(
        <div className={styling.container}>
            <Head>
                <title>Osita Ezeigbo | About</title>
            </Head>

            <main>
                <div>
                    <div>
                        <PageTitle title="about" subtitle="know more about me."/>
                    </div>
                    <Aboutdetails />
                </div>
            </main>
        </div>
    )
}