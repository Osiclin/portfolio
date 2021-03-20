import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import $ from 'jquery'


export default function Nav() {
    const [hamburger, setHamburger] = useState('close')

    let menu = useRef(null);
    let logo = useRef(null);
    let ham = useRef(null);


    const openMenu = () => {
        if (window.innerWidth <= 600) {
            menu.style.display = 'block';
            ham.style.color = 'rgba(245, 245, 245, 0.541)';
            logo.style.color = 'rgba(245, 245, 245, 0.541)';
            setHamburger('open')
        }
    }

    const closeMenu = () => {
        if (window.innerWidth <= 600) {
            menu.style.display = 'none';
            ham.style.color = 'white';
            logo.style.color = 'white';
            setHamburger('close')
        }
    }
    
    
    useEffect(() => {
        logo.style.display = 'block';
    })

    return(
        <>
            <div id={styles.logo} ref={el => logo = el}>
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

            <div ref={el => ham = el}>
               {hamburger == 'close' ? <p id={styles.ham} onClick={openMenu}>=</p> : <p id={styles.ham} onClick={closeMenu}>=</p>}
            </div>
        </>
    )
}