import Image from 'next/image'
import styles from '../styles/Aboutdetails.module.css'

export default function Aboutdetails() {
    return(
        <div id={styles.aboutdetails}>
            <div>
                <p id={styles.abouttext}>
                    Hi, i'm Osita Ezeigbo, a Web Developer/FrontEnd Developer based in Lagos, Nigeria.
                    I am a tech enthusiast skilled with various technology tools. I love building Front-end websites 
                    and Progressive Web Apps. I am a fast learner and I get things done even if it means me
                    learning on the go. My ideal work is in problem-solving, implementing 
                    and improving systems by having tech tools and resources to work 
                    coherently.
                </p>
                
            </div>
            <div id={styles.skillsnimg}>

                <div id={styles.img}>
                    <Image src="/images/profile.png" width="380px" height="430px" preload="true" alt="author picture" />
                </div>
                
                <div className={styles.skillswrapper}>
                    <div>
                        <div>
                            <h2 id={styles.skills}>skills</h2>
                            <hr id={styles.skillshr}/>
                        </div>
                        <ul id={styles.hobbylist}>
                            <div>
                                <li><p>..Javascript</p></li>
                                <li><p>..NextJs</p></li>
                                <li><p>..ReactJs</p></li>
                                <li><p>..HTML5</p></li>
                            </div>
                            <div>
                                
                                <li><p>..CSSS3</p></li>
                                <li><p>..API</p></li>
                                <li><p>..Bootstrap</p></li>
                                <li><p>..SASS</p></li>
                            </div>
                        </ul>
                    </div>
                    
                </div>
                {/* <div className={styles.skillswrapper}>
                    <div>
                        <div>
                            <h2 id={styles.skills}>hobby</h2>
                            <hr id={styles.skillshr}/>
                        </div>
                        <ul id={styles.hobbylist}>
                            <div>
                                <li><p>..programing</p></li>
                                <li><p>..coding</p></li>
                                <li><p>..football</p></li>
                            </div>
                            <div>
                                <li><p>..movies</p></li>
                                <li><p>..music</p></li>
                            </div>
                        </ul>
                    </div>
                </div>    */}
            </div>
        </div>
    )
}