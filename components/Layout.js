import Head from "next/head"
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'


export default function Layout({ children }) {
    return(
        <div id={styles.layout}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            
            { children }

            <Footer />
        </div>
    )
}