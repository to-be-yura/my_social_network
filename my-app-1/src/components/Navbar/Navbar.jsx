import s from './Navbar.module.css'

const Navbar = () => {
	return (
		<div className={s.Navbar}>
			<nav>
				<div className={s.link+" Title"}>
					<a href='/Profile'>Profile</a>
				</div>
				<div className={s.link+' Title'}>
					<a href='/Dialogs'>Dialogs</a>
				</div>
				<div className={s.link+' Title'}>
					<a href='/News'>News</a>
				</div>
				<div className={s.link+' Title'}>
					<a href='/Music'>Music</a>
				</div>
				<div className={s.link+' '+s.link_end+' Title'}>
					<a href='/Setting'>Setting</a>
				</div>
			</nav>
			<div className={s.img}></div>
		</div>
	);
}

export default Navbar;