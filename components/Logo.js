import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Logo() {
    return(
        <div id={styles.logo}>
            <Link href="/">
                <a><p id={styles.logotext}>osita.</p></a>
            </Link>
        </div>
    )
}