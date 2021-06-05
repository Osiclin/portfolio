import styles from '../styles/Intro.module.css'
import { useEffect, useRef } from 'react'
import $ from 'jquery'


export default function Intro() {
    let para = useRef(null)
    
    useEffect(() => {
        $(para).fadeIn(2000);
        para.style.display = "block";
    })

    return(
        <div id={styles.introcontainer}>
            <div id={styles.innerwrapper} ref={el => para = el}>
                <div>
                <p id={styles.intropara}>~ Hello there! &#128075;</p>
                <h2 id={styles.h2text}>I'm Osita Ezeigbo.<br/>Software Engineer</h2>
                <p className={styles.aboutdetails}>I am focused on the <span className={styles.aboutdetailsfocus}>frontend development</span>.
                I specialize in building websites and web applications.</p>
                </div>
            </div>
        </div>
    )
}