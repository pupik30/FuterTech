import { useState } from "react"
import styles from './NewsPage.module.scss'
import { NavLink } from 'react-router-dom'
import {Photo} from "../../../file.js"



export default function Newspage() {
const [activeButton, setActiveButton] = useState(0); // Храним номер активной кнопки (1 или 2)


    const[data,setData1] = useState([])
    const[data2,setData2] = useState(null)
    
    useEffect(() => {
        fetch("http://localhost:3000/api/main1")
        .then(res => res.json())
        .then(data1 => setData1(data1))
    },[])
    useEffect(() => {
        fetch("http://localhost:3000/api/main2")
        .then(res => res.json())
        .then(data2 => setData2(data2))
    },[])
return (
<>

{/* Секция титлового текста */}
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


<div className={classes.container}>
        {data2 && (
        <div key={data2.id} className={classes.TwoDiv}>
           <div className={classes.left}>
            <img src={data2.img} alt="" />
           </div>
           <div className={classes.right}>-
                <div className={classes.TwoText}>
                    <p>{data2.titlemain}</p>
                    <p>{data2.news}</p>
                </div>
                <div className={classes.MetaInfo}>
                    <p>Category <span>{data2.categoru}</span></p>
                    <p>Publication Date <span>{data2.publicationdata}</span></p>
                    <p>Author <br /><span>{data2.author}</span></p>
                </div>
                <div className={classes.To_Meta_Info}>
                    <div>
                        <p><img src={Photo.like} alt="" />{data2.like}K</p>
                        <p><img src={Photo.rep} alt="" />{data2.repost}</p>
                    </div>
                    <div>
                        <button>Read More</button>
                    </div>
                </div>
           </div>
        </div>
        )}
        <div className={classes.DivThree}>
        {data1.map(item =>(
            <div key={item.id}>
                <img src={item.img} alt="" />
                <p>{item.titlemain}</p>
                <p>{item.categoru}</p>
                 <div className={classes.To_Meta_Info_2}>
                <div>
                        <p><img src={Photo.like} alt="" />{item.like}K</p>
                        <p><img src={Photo.rep} alt="" />{item.repost}</p>
                </div>
                    <div className={classes.ReadMore}>
                       
                        <button>Read More<img src={Photo.arrow} alt="" /></button>
                    </div>
                </div>
            </div>
        ))}
    </div>
    </div>



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







{/* Секция Вэлком прост текст */}
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