import styles from './Header.module.scss'
import { NavLink } from 'react-router-dom'
import {Photo} from "../../../file.js"

export default function Header() {
    return(
<>
<header>
    <div className={styles.headerBlockTop}>
        <div className={styles.headerJC}>
            <div className={styles.logoPhoto}>
                <img src={Photo.Logo} alt="" />
            </div>
            <nav className={styles.nav}>
                    <NavLink to={"MainPage"}  className={({ isActive }) => (isActive ? `${styles.active} ${styles.activee}` : "")}>1</NavLink>
                    <NavLink to={"/service"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>2</NavLink>
                    <NavLink to={"/service"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>3</NavLink>
                    <NavLink to={"/service"} className={({isActive}) => (isActive ? `${styles.active} ${styles.active}`: "")}>4</NavLink>
                <button className={styles.ConectUs}>Contact Ass</button>
            </nav> 
        </div>
    </div>
</header>
</>
)
}
