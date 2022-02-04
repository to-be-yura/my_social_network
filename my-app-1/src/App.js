import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/Profile" element={<Profile/>}/>
                    <Route path="/Dialogs" element={<Dialogs/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
