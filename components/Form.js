import styles from '../styles/Form.module.css'

export default function Form() {
    return(
        <form id={styles.form}>
            <div className={styles.inputnlabel}>
                <label className={styles.label} htmlFor="name">Name *</label>
                <input className={styles.input} type="text" name="firstname" required />
            </div>
            <div className={styles.inputnlabel}>
                <label className={styles.label} htmlFor="email">Email *</label>
                <input className={styles.input} type="email" name="email" required />
            </div>
            <div className={styles.inputnlabel}>
                <label className={styles.label} htmlFor="subject">Subject *</label>
                <input className={styles.input} type="text" name="subject" required />
            </div>
            <div className={styles.inputnlabel}>
                <label className={styles.label} htmlFor="message">Message *</label>
                <textarea className={styles.textarea} name="message" rows="10" required />
            </div>
            <div>
                <input className={styles.submit} type="submit" value="Submit"/>
            </div>
        </form>
    )
}