import { useState } from "react"
import styles from './NewsPage.module.scss'
import { NavLink } from 'react-router-dom'
import {Photo} from "../../../file.js"



export default function Newspage() {
const [activeButton, setActiveButton] = useState(0); // Храним номер активной кнопки (1 или 2)

    return(
    <>
        <section className={styles.SectionBase}>
             <div className={styles.OneDiv}>
                <div className={styles.TextDiv}>
                <p>Today's Headlines: Stay<br/>informed<span>Explore the 
                    latest news from around the world. We bring you 
                    up-to-the-minute updates on the most significant
                    events, trends, and stories. Discover the world 
                    through our news coverage.</span></p>
                </div>
            </div>
        </section>
{/* // */}
        <section className={styles.SectionBase}>
            <div className={styles.DivCenter}>
                <img src={Photo.Ventilator} alt="" />
                <div className={styles.GlobalClimate}>

                    <div className={styles.GlobalTop}>
                        <p className={styles.GlobalTopWhite}>Global Climate Summit
                             Addresses Urgent Climate Action</p>
                        <p className={styles.GlobalTopGray}>World leaders gathered
                             at the Global Climate Summit to 
                            discuss urgent climate action, emissions reductions, 
                            and renewable energy targets.</p>
                    </div>

                    <div className={styles.GlobalMid}>
                        <div className={styles.GlobalMid_1}>
                            <p className={styles.GlobalMid_1W}>Category</p>
                            <p className={styles.GlobalMid_1G}>Environment</p>
                        </div>
                        <div className={styles.GlobalMid_2}>
                            <p className={styles.GlobalMid_1W}>Publication Date</p>
                            <p className={styles.GlobalMid_1G}>October 10, 2023</p>
                        </div>
                        <div className={styles.GlobalMid_3}>
                            <p className={styles.GlobalMid_1W}>Author</p>
                            <p className={styles.GlobalMid_1G}>Jane Smith</p>
                        </div>
                    </div>


                    <div className={styles.GlobalBot}>
                        <div className={styles.GlobalBotLeft}>
                            <img src={Photo.Like} alt="" />
                            <img src={Photo.Repost} alt="" />
                        </div>
                        <div className={styles.GlobalBotRight}></div>
                    </div>
                </div>
            </div>


        </section>
{/* // */}
        <section className={styles.SectionBase}>
            <div className={styles.DivCenter}>

                <div className={styles.Content_1}>
                    <img src={Photo.img1} alt="" />

                    <div className={styles.Content_Mid}>
                        <p className={styles.Content_MidW}>
                            A Decisive Victory
                             for Progressive Policies</p>
                        <p className={styles.Content_MidG}>Politics</p>
                    </div>

                    <div className={styles.SocialBot}>
                        <div className={styles.GlobalBotLeft}>
                            <img src={Photo.Like} alt="" />
                            <img src={Photo.Repost} alt="" />
                        </div>
                        <img src={Photo.BigReadMore} alt="" />
                    </div>
                </div>   

                <div className={styles.Content_2}>
                    <img src={Photo.img2} alt="" />
                    
                    <div className={styles.Content_Mid}>
                        <p className={styles.Content_MidW}>
                            Tech Giants Unveil Cutting-Edge AI Innovations</p>
                        <p className={styles.Content_MidG}>Technology</p>
                    </div>

                    <div className={styles.SocialBot}>
                        <div className={styles.GlobalBotLeft}>
                            <img src={Photo.Like} alt="" />
                            <img src={Photo.Repost} alt="" />
                        </div>
                        <img src={Photo.BigReadMore} alt="" />
                    </div>    
                </div>                

                <div className={styles.Content_3}>
                    <img src={Photo.img3} alt="" />
                    
                    <div className={styles.Content_Mid}>
                        <p className={styles.Content_MidW}>
                            COVID-19 Variants</p>
                        <p className={styles.Content_MidG}>Health</p>
                    </div>

                    <div className={styles.SocialBot}>
                        <div className={styles.GlobalBotLeft}>
                            <img src={Photo.Like} alt="" />
                            <img src={Photo.Repost} alt="" />
                        </div>
                        <img src={Photo.BigReadMore} alt="" />
                    </div>    
                </div>                
            </div>
        </section>




        <section className={styles.DiscoverTheWorld}>
            <div className={styles.DivCenter}>
                <div className={styles.DiscoverTheWorldLeft}>
                    <div className={styles.DivText}>
                        Welcome to Our News Hub</div>
                        <p className={styles.MainText}>Discover the 
                        World of Headlines</p>
                </div> 
                <div className={styles.DiscoverTheWorldRight}>
                    <img src={Photo.Button} alt="" />
                </div>
            </div>
        </section>

        <section className={styles.ButtonSelect}>
            <div className={styles.ButtonSelectCentr}>


{/* 1 */}
            <button 
            className={`${styles.button} ${activeButton === 1 ? styles.active : ''}`}
            onClick={() => setActiveButton(1)}>
            All
            </button>

{/* 2 */}
            <button 
            className={`${styles.button} ${activeButton === 2 ? styles.active : ''}`}
            onClick={() => setActiveButton(2)}>
            Technology
            </button>
            {/* 3 */}
            <button 
            className={`${styles.button} ${activeButton === 3 ? styles.active : ''}`}
            onClick={() => setActiveButton(3)}>
            Politics
            </button>
{/*  */}
{/* 4 */}
            <button 
            className={`${styles.button} ${activeButton === 4 ? styles.active : ''}`}
            onClick={() => setActiveButton(4)}>
            Health
            </button>
            {/* 5 */}
            <button 
            className={`${styles.button} ${activeButton === 5 ? styles.active : ''}`}
            onClick={() => setActiveButton(5)}>
            Environment
            </button>

{/* 6 */}
            <button 
            className={`${styles.button} ${activeButton === 6 ? styles.active : ''}`}
            onClick={() => setActiveButton(6)}>
            Sports
            </button>


            </div>
        </section>
    </>
    )
}