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
                    <h2 id={styles.h2text}>I am Osita Ezeigbo</h2>
                    <p className={styles.aboutdetails}>I am a SOFTWARE ENGINEER focused on FRONTEND DEVELOPMENT. <br/>I specialize in building websites, web applications and creating interactive experiences and functional interfaces using various web technologies.</p>
                </div>
            </div>
        </div>
    )
}