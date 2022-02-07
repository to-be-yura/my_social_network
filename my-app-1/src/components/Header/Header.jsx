import s from './Header.module.css'

const Header = () => {
	return (
		<header className={s.header}>
			<img src='https://alphanerdsguild.com/wp-content/uploads/2018/01/twitch-color.png' />
			<div className={s.name1}>НЕ</div>
			<div className={s.name2}>twitch</div>
		</header>
	);
}

export default Header;