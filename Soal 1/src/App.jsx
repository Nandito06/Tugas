import{Link, Route, Routes} from 'react-router-dom'
import './App.css';

//import halaman
import Home from './PAGE/home';
import Profile from './PAGE/profile';
import Gallery from './PAGE/Gallery';
import MusicFavorite from './PAGE/musicFavorite';
import FilmFavorite from './PAGE/FilmFavorite';



function App() {
  return (
   <>
  
   <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/profile">Profile</Link></li>
    <li><Link to="/galeri">Galeri</Link></li>
    <li><Link to="/music-favorite">Music Fav</Link></li>
    <li><Link to="/film-fav">Film fav</Link></li>
   </ul>

   <Routes>
    <Route path='/'  element={<Home/>} />   
    <Route path='/profile' element={<Profile/>} />
    <Route path='/galeri' element={<Gallery/>} />
    <Route path='/music-favorite' element={<MusicFavorite/>} />
    <Route path='/film-fav' element={<FilmFavorite/>} />
   </Routes>
   </>
  );
}

export default App;
