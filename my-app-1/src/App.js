import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
// import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Route path='/Profile' component={Profile}/>
					<Route path='/Dialogs' component={Dialogs}/>
					{/*<Profile/>*/}
				</div>
			</div>
		</BrowserRouter>

);
}

export default App;
