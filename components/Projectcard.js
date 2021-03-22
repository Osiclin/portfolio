import styles from '../styles/Projectcard.module.css'
import Image from 'next/image'

export default function Projectcard(props) {
    return( 
        <a href={props.href}>
            <div className={styles.projectcard}>
                <div>
                <Image src={props.src} className={styles.cardimg} width={400} height={300} />
                </div>

                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.para}>{props.details}</p>
                <input className={styles.button} type="button" value="Visit" />
            </div>
        </a>
    )
}