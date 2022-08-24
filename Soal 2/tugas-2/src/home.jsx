import React from 'react';
import {Link} from 'react-router-dom';
function Home() {
    let daftarArtis=[
        {name:'Marsel pesulap Merah',id:1},
        {name:'sule',id:2},
        {name:'WANTIKNOO',id:3},
        {name:'regi Miawaug',id:4},
        {name:'Kimi Hime',id:5},
        {name:'Windah Basudara',id:6},
        {name:'TEDDY',id:7},
        {name:'Rimuru',id:8},
        {name:'Jordy',id:9},
        {name:'Ayah ku',id:10},
        {name:'Reka',id:11},
        {name:'Zaki',id:12},
        {name:'Nikita Mirzani',id:13},
        {name:'Michle Jackson',id:14},
        {name:'lil Nas',id:15},
    
    
    ]
    return (
        <div>
           <h1>Daftar artis</h1> 
           
   {
    daftarArtis.map((item)=>
    <div><Link to={"/daftarArtis/"+ item.id}>{item.name}</Link></div>)
   }
        </div>
    );
}

export default Home;