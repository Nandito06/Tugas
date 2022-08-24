import{Link, Route, Routes} from 'react-router-dom'
import './App.css';
//halaman import favorite
import FilmFavorite from './favorite/film';
import Food from './favorite/food';
import MusicFavorite from './favorite/music';

//halaman
import Gallery from './galeri/Galeri';
import Home from './home/Home';

//user
import User from './user/User';
import Setting from './user/setting/Setting';
import Profile from './user/profile/Profile';
import Favorite from './favorite/Favorite';

function App() {
  return (
    <>
  <ul className='user'>
     
  <li><Link to="/">Home</Link></li>
  <li><Link to="/user">User</Link></li>
  <li><Link to="/favorite">FavoriteKu</Link></li>
 <li> <Link to="/galeri">Galeri</Link></li>
</ul>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/user/" element={<User/>}/>
    <Route path="/user/profile" element={<Profile/>}/>
    <Route path="/galeri" element={<Gallery/>} />
    <Route path="/user/setting" element={<Setting/>}/>
    <Route path="/favorite/" element={<Favorite/>} />
    <Route path="/favorite/film" element={<FilmFavorite/>} />
    <Route path="/favorite/music/" element={<MusicFavorite/>} />
    <Route path="/favorite/Food" element={<Food/>} />
  </Routes>







   </>
  );
}

export default App;
