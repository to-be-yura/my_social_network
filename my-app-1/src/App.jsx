import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Messenger from "./components/Messenger/Messenger";
import {Routes, Route} from 'react-router-dom'
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <div className="app-background">
            <Header/>
            <div className='app-wrapper'>
                <Navbar/>
                <div className="content">
                    <Routes>
                        <Route path='/' element={<Profile/>}/>
                        <Route path='/Profile' element={<Profile/>}/>
                        <Route path='/Messenger' element={<Messenger/>}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default App;
