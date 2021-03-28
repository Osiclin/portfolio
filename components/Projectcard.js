import styles from '../styles/Projectcard.module.css'
import Image from 'next/image'


export default function Projectcard(props) {

    return( 
        <div>
            <div className={styles.projectcard}>
                <div className={styles.imgwrapper}>
                    <a href={props.href}>
                        <Image src={props.src} className={styles.cardimg} width={props.width} height={300} preload="true" alt="project" />
                    </a>
                </div>
                <div className={styles.projectdetails}>
                    <h3 className={styles.title}>{props.title}</h3>
                    <p className={styles.para}>{props.details}</p>
                </div>
            </div>
        </div>
    )
}