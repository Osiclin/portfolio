import Head from 'next/head'
import Form from '../components/Form'
import PageTitle from '../components/PageTitle'
import styling from '../styles/Home.module.css'
import styles from '../styles/Contactdetails.module.css'

export default function Contact() {
    return(
        <div className={styling.container}>
            <Head>
                <title>Osita Ezeigbo | Contact</title>
            </Head>

           <main>

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