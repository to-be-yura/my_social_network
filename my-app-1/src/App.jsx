import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import {Routes, Route} from 'react-router-dom'
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/' element={<Profile/>}/>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Dialogs' element={<Dialogs/>}/>
                    <Route path='/News' element={<News/>}/>
                    <Route path='/Music' element={<Music/>}/>
                    <Route path='/Settings' element={<Settings/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
