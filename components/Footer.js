import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <div id={styles.footer}>
            {/* <p id={styles.footertext}><b>OSITA EZEIGBO</b></p>
            <p id={styles.footertitle}>Frontend Developer</p>
            <hr id={styles.footerhr}/> */}
            <p id={styles.footeremail}><a href="mailto:osiclin@yahoo.com"><u>osiclin@yahoo.com</u></a></p>
            <ul id={styles.iconwrapper}>
                
                <li><a href="https://github.com/osiclin" target="_blank"><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/github-square.svg" /></a></li>
                <li><a href="https://linkedin.com/in/osita-ezeigbo-295aaab6" target="_blank"><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/linkedin-square.svg" /></a></li>
                <li><a href="https://twitter.com/melengeh" target="_blank"><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/twitter-square.svg" /></a></li>
                <li><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/facebook-square.svg" /></li>
                <li><a href="tel:+2348033779715"><img className={styles.icons} src="https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/3cfbcdaff9818c3e2c07d755d556fe1f34d7cf0d/black/svg/phone-square.svg" /></a></li>
                
            </ul>
        </div>
    )
}