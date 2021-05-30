import styles from '../styles/Intro.module.css'
import { useEffect, useRef } from 'react'
import $ from 'jquery'


export default function Intro() {
    let para = useRef(null)
    

    useEffect(() => {
        $(para).slideDown(2000);
        para.style.display = "flex";
        
    })


    return(
        <div id={styles.introcontainer}>
            <div id={styles.innerwrapper} ref={el => para = el}>
                <div>
                <p id={styles.intropara}>~ Hello there! &#128075;</p>
                <h2 id={styles.h2text}>I'm Osita Ezeigbo.</h2>
                <p className={styles.aboutdetails}>I am a <span className={styles.aboutdetailsfocus}>software engineer</span> with a focus on the <span className={styles.aboutdetailsfocus}>frontend development</span>.
                I specialize in building websites and web applications.</p>
                </div>
            </div>
            <video id={styles.vid} autoPlay muted>
                <source src="/videos/bgvid.mp4" type="video/mp4" />
            </video>
        </div>
    )
}