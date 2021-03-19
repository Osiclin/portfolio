import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Menu() {
    return(
        <ul id={styles.menu}>
            <li className={styles.menulist} id={styles.p}>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </li>
            <li className={styles.menulist} id={styles.a}>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
            <li className={styles.menulist} id={styles.c}>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    )
}