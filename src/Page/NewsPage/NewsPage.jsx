import { useState } from "react"
import styles from './NewsPage.module.scss'
import { NavLink } from 'react-router-dom'
import {Photo} from "../../../file.js"



export default function Newspage() {
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
                        <p className={styles.GlobalTopWhite}>Global Climate Summit Addresses Urgent Climate Action</p>
                        <p className={styles.GlobalTopGray}>World leaders gathered at the Global Climate Summit to 
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


    </>
    )
}