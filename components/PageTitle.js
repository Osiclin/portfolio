import styles from '../styles/PageTitle.module.css'

export default function PageTitle(props) {
    return(
        <div>
            <div className={styles.title}>
                <h3>{props.title}</h3>
                <hr/>
            </div>
            <div className={styles.subtitle}>
                <p className={styles.subtitletext}>{props.subtitle}</p>
            </div>
        </div>
    )
}