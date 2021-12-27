import styles from '../styles/Projectcard.module.css'
import Image from 'next/image'

export default function Projectcard(props) {
    return( 
        <div className={styles.projectcard}>
            <div className={styles.imgwrapper}>
                <a href={props.href}>
                    <Image src={props.src} objectFit='fill' className={styles.cardimg} width={540} height={360} preload="true" alt="project" />
                </a>
            </div>
            <div className={styles.projectdetails}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.para}>{props.details}</p>
            </div>
        </div>
    )
}