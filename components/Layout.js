import Head from "next/head"
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import Nav from "./Nav";


export default function Layout({ children }) {
    return(
        <div id={styles.layout}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Nav />
            
            { children }

            <Footer />
        </div>
    )
}