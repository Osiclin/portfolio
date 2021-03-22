import styles from '../styles/Projectcard.module.css'
import Image from 'next/image'

export default function Projectcard(props) {
    return( 
        <div>
            <div className={styles.projectcard}>
                <div className={styles.imgwrapper}>
                <Image src={props.src} className={styles.cardimg} width={props.width} height={300} preload="true" />
                </div>
                <div className={styles.projectdetails}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.para}>{props.details}</p>
                    <a href={props.href}><input className={styles.button} type="button" value="Visit" /></a>
                </div>
            </div>
        </div>
    )
}