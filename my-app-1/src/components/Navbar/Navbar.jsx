import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <nav>
                <div className="Title">
                    <NavLink to='/Profile' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
                </div>
                <div className="Title">
                    <NavLink to='/Dialogs' className={navData => navData.isActive ? s.active : s.item}>Dialogs</NavLink>
                </div>
                <div className="Title">
                    <NavLink to='/News' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
                </div>
                <div className="Title">
                    <NavLink to='/Music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                </div>
                <div className={s.Settings + ' Title'}>
                    <NavLink to='/Setting' className={navData => navData.isActive ? s.active : s.item}>Setting</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;