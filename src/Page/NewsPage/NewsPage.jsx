import { useState } from "react"
import styles from './NewsPage.module.scss'
import { NavLink } from 'react-router-dom'
import {Photo} from "../../../file.js"



export default function Newspage() {
    return(

    <>
        <section className={styles.TitleText}>
             <div className={styles.OneDiv}>
                <div className={styles.TextDiv}>
                <p>Today's Headlines: Stay<br/>informed<span>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</span></p>
                </div>
            </div>
        </section>

        <section className={styles.GlobalClimate}>
            


        </section>


    </>

    )
}