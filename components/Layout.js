import Head from "next/head"
import Footer from "./Footer";
import styles from '../styles/Layout.module.css'
import Nav from "./Nav";

export default function Layout({ children }) {
    return(
        <div id={styles.layout}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Osita Ezeigbo Portfolio" />
                <meta name="keywords" content="Osita Ezeigbo, Software Engineer, Frontend Developer, Web Developer" />
                <meta name="author" content="Osita Ezeigbo" />
                <meta property="og:title" content="Osita Ezeigbo Portfolio" />
                <meta property="og:description" content="I’m a frontend developer based in Lagos, Nigeria." />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Osita Ezeigbo" />
                <link rel="manifest" href="/manifest.json" />
                <script src="https://kit.fontawesome.com/9baa8c6e06.js" crossorigin="anonymous"></script>
            </Head>
            <Nav />

                { children }
                
            <Footer />
        </div>
    )
}