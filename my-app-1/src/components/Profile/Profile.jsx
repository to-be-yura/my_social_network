import AvaDescription from "./AvaDescription/AvaDescription";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";


const Profile = () => {
	return (
		<div className={s.Profile}>
			<AvaDescription/>
			<MyPosts/>
		</div>
	);
}

export default Profile;