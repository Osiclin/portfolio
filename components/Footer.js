import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <div id={styles.footer}>
            <p id={styles.footertext}>OSITA EZEIGBO</p>
            <p id={styles.footertitle}>Web Developer / Front-End Developer</p>
            <hr id={styles.footerhr}/>
            <p id={styles.footeremail}><a href="mailto:osiclin@yahoo.com"><u>osiclin@yahoo.com</u></a></p>
            <ul id={styles.iconwrapper}>
                
                <li><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/github-square.svg" /></li>
                <li><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/linkedin-square.svg" /></li>
                <li><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/twitter-square.svg" /></li>
                <li><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/facebook-square.svg" /></li>
                <li><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/phone-square.svg" /></li>
                
            </ul>
        </div>
    )
}