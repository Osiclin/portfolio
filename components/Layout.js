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
                <script src="https://kit.fontawesome.com/9baa8c6e06.js" crossorigin="anonymous"></script>
            </Head>
            <Nav />
            
            { children }

            <Footer />
        </div>
    )
}