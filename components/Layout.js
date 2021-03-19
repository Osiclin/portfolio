import Head from "next/head"
import Footer from "./Footer";


export default function Layout({ children }) {
    return(
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            { children }

            <Footer />
        </div>
    )
}