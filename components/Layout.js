import Head from "next/head"
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import Nav from "./Nav";


export default function Layout({ children }) {
    return(
        <div id={styles.layout}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Osita Ezeigbo is a frontend developer who builds websites and web applications" />
                <meta name="keywords" content="osita ezeigbo, frontend developer, web developer" />
                <meta name="author" content="osita ezeigbo" />
                <link rel="manifest" href="/manifest.json" />
                <script src="https://kit.fontawesome.com/9baa8c6e06.js" crossorigin="anonymous"></script>
            </Head>
            <Nav />
            
            { children }

            <Footer />
        </div>
    )
}