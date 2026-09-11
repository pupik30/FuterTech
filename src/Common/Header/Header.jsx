import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import {Photo} from "../../../file.js"

export default function Header() {
    return(
<>
<header>
    <div className={styles.headerMusorLine}>
        <div className={styles.SubscribeLine}>
            <a>Subscribe to our Newsletter For New & latest Blogs and Resources</a>
            <img src={Photo.ArrowYTopR} alt="" />
        </div>
    </div>
    <div className={styles.headerBlockTop}>
        <div className={styles.headerJC}>
            <div className={styles.logoPhoto}>
                <img src={Photo.Logo} alt="" />
            </div>
            <nav className={styles.nav}>
                    <NavLink to={"MainPage"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>Home</NavLink>
                    <NavLink to={"NewsPage"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>News</NavLink>
                    <NavLink to={"/3"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Podcasts</NavLink>
                    <NavLink to={"/4"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>Resources</NavLink>

            </nav> 
            <button className={styles.ConectUs}>Contact Ass</button>
        </div>
    </div>
</header>
</>
)
}
