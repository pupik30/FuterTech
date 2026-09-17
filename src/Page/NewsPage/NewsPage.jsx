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
        <div className={styles.VentilatorDiv}>
            <img src={Photo.Ventilator} alt="" />
        </div>
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
                <button className={styles.GlobalBotRight}>Read more</button>
            </div>
        </div>
    </div>


</section>
{/* // */}
<section className={styles.SectionBase}>
    <div className={styles.DivCenter}>
{/* 1 */}
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
                    <img src={Photo.Like} className={styles.GlobalBotLeftIMG_1}  />
                    <img src={Photo.Repost} className={styles.GlobalBotLeftIMG_2}  />
                </div>
                <div className={styles.GlobalBotRight}>

                    <img src={Photo.BigReadMore}  className={styles.BigReadMore} />
                </div>

            </div>
        </div>   
{/* 2 */}
        <div className={styles.Content_1}>
            <img src={Photo.img2} alt="" />

            <div className={styles.Content_Mid}>
                <p className={styles.Content_MidW}>
                    Tech Giants Unveil Cutting-Edge AI Innovations</p>
                <p className={styles.Content_MidG}>Technology</p>
            </div>

            <div className={styles.SocialBot}>
                <div className={styles.GlobalBotLeft}>
                    <img src={Photo.Like} className={styles.GlobalBotLeftIMG_1}  />
                    <img src={Photo.Repost} className={styles.GlobalBotLeftIMG_2}  />
                </div>
                <div className={styles.GlobalBotRight}>

                    <img src={Photo.BigReadMore}  className={styles.BigReadMore} />
                </div>

            </div>
        </div>             
{/* 3 */}
        <div className={styles.Content_1}>
            <img src={Photo.img3} alt="" />

            <div className={styles.Content_Mid}>
                <p className={styles.Content_MidW}>
                    COVID-19 Variants</p>
                <p className={styles.Content_MidG}>Health</p>
            </div>

            <div className={styles.SocialBot}>
                <div className={styles.GlobalBotLeft}>
                    <img src={Photo.Like} className={styles.GlobalBotLeftIMG_1}  />
                    <img src={Photo.Repost} className={styles.GlobalBotLeftIMG_2}  />
                </div>
                <div className={styles.GlobalBotRight}>

                    <img src={Photo.BigReadMore}  className={styles.BigReadMore} />
                </div>

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




<section className={styles.MediaFocused_1}>
    <div className={styles.MediaFocusedCentr}>
        <div className={styles.Accaunt}> 
            <img src={Photo.Suda} className={styles.Suda} />
            <div className={styles.AccauntInfo}>
                <p className={styles.AccauntText_1}>Sudakuv Vladimer</p>
                <p className={styles.AccauntText_2}>Star Lord</p>
            </div>
        </div>

        <div className={styles.blog}> 
            <p className={styles.blogTitle}>September 11, 2001</p>
            <div className={styles.mainText}>
                <p className={styles.mainTextW}>Tech Giants Announce New Product Line</p>
                <p className={styles.mainTextG}>Explore the latest innovations from tech
                     industry leaders, unveiling new products that promise to transform the digital landscape</p>
            </div>
            <div className={styles.SocialBtn}>
                <button className={styles.SocialBtnLike}></button>
            </div>
        </div>
    </div>
</section>





    </>
    )
}