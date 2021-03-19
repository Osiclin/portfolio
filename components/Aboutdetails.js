import Image from 'next/image'
import styles from '../styles/Aboutdetails.module.css'

export default function Aboutdetails() {
    return(
        <div id={styles.aboutdetails}>
            <div>
                <p>
                    Hi, i'm Osita Ezeigbo, a Web Developer/FrontEnd Developer based in Lagos, Nigeria.
                    I am a tech enthusiast skilled with various technology tools. I love building Front-end websites 
                    and Progressive Web Apps. I am a fast learner and I get things done even if it means me
                    learning on the go. My ideal work is in problem-solving, implementing 
                    and improving systems by having tech tools and resources to work 
                    coherently.
                </p>
                
            </div>
            <div id={styles.skillsnimg}>
                
                <div>
                    <div>
                        <h2 id={styles.skills}>skills</h2>
                        <hr id={styles.skillshr}/>
                    </div>
                    <ul>
                        <li><p>- JavaScript</p></li>
                        <li><p>- ReactJS</p></li>
                        <li><p>- NextJS</p></li>
                        <li><p>- JQuery</p></li>
                        <li><p>- HTML5</p></li>
                        <li><p>- CSS3</p></li>
                        <li><p>- Bootstrap</p></li>
                    </ul>
                </div>
                <div id={styles.img}>
                    <Image src="/images/profile.png" width="450px" height="500px"/>
                </div>
                
            </div>
        </div>
    )
}