import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <div id={styles.footer}>
            <p id={styles.footertext}>OSITA EZEIGBO</p>
            <p id={styles.footertitle}>Web Developer / Front-End Developer</p>
            <hr id={styles.footerhr}/>
            <p id={styles.footeremail}><a href="mailto:osiclin@yahoo.com"><u>osiclin@yahoo.com</u></a></p>
            <ul id={styles.iconwrapper}>
                
                <li><i class="fab fa-github-square"></i></li>
                <li><i class="fab fa-twitter-square"></i></li>
                <li><i class="fab fa-facebook-square"></i></li>
                <li><i class="fab fa-instagram-square"></i></li>
                <li><i class="fas fa-phone-square"></i></li>
                
            </ul>
        </div>
    )
}