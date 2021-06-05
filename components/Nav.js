import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import $ from 'jquery'

export default function Nav() {
    const [hamburger, setHamburger] = useState('close')

    let menu = useRef(null);

    const openMenu = () => {
        if (window.innerWidth <= 600) {
            $(menu).animate({left: '0px'});
            setHamburger('open')
        }
    }

    const closeMenu = () => {
        if (window.innerWidth <= 600) {
            $(menu).animate({left: '-600px'});
            setHamburger('close')
        }
    }

    return(
        <>
            <div id={styles.logo} >
                <Link href="/">
                    <a><p id={styles.logotext}>osita.</p></a>
                </Link>
            </div>

            <ul id={styles.menu} ref={el => menu = el }>
                <li className={styles.menulist} id={styles.p} onClick={closeMenu}>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                </li>
                <li className={styles.menulist} id={styles.a} onClick={closeMenu}>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>

            <div>
               {hamburger == 'close' ? <p id={styles.ham} onClick={openMenu}>=</p> : <p id={styles.ham} onClick={closeMenu}>x</p>}
            </div>
        </>
    )
}