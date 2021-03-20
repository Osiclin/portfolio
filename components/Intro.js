import styles from '../styles/Intro.module.css'


export default function Intro() {
    return(
        <div id={styles.introcontainer}>
            <div id={styles.innerwrapper}>
                <p id={styles.intropara}>~ Hello there!</p>
                <h2 id={styles.h2text}>I am OSITA EZEIGBO.<br /> I am a WEB DEVELOPER.</h2>
            </div>
            <video id={styles.vid} autoPlay muted>
                <source src="/videos/bgvid.mp4" type="video/mp4" />
            </video>
        </div>
    )
}