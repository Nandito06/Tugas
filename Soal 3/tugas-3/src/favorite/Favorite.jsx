import React from 'react';
import{Link, Route, Routes} from 'react-router-dom'
import FilmFavorite from './film';
import Food from './food';
import MusicFavorite from './music';

function FavoriteMe() {
    return (
        <div>
            <h2>apa yang aku sukai</h2>
            <Link to="/favorite/film">Favorite Film</Link>
            <br />
            <Link to="/favorite/music">Favorite music</Link>
            <br />
            <Link to="/favorite/food">Favorite food</Link>
            <Routes>
                <Route path="film" element={<FilmFavorite/>}/>
                <Route path="food" element={<Food/>}/>
                <Route path="music" element={<MusicFavorite/>} />
               
            </Routes>
        </div>
    );
}

export default FavoriteMe;