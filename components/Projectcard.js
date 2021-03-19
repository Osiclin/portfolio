import styles from '../styles/Projectcard.module.css'

export default function Projectcard(props) {
    return( 
        <a href={props.href}>
            <div className={styles.projectcard}>
                <h3 className={styles.title}>{props.title}</h3>
                <p className={styles.para}>{props.details}</p>
            </div>
        </a>
    )
}