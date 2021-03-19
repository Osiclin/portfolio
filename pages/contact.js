import Head from 'next/head'
import Form from '../components/Form'
import PageTitle from '../components/PageTitle'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Hamburger from '../components/Hamburger'
import styling from '../styles/Home.module.css'
import styles from '../styles/Contactdetails.module.css'

export default function Contact() {
    return(
        <div className={styling.container}>
            <Head>
                <title>Osita Ezeigbo | Contact</title>
            </Head>

           <main>
           <Logo />
            <Menu />
            <Hamburger />
               <div>
                   <PageTitle title="contact" subtitle="get in touch with me."/>
               </div>
               <div id={styles.contactdetails}>
                    <Form />
               </div>
           </main>
        </div>
    )
}