import React from 'react';
import { useParams } from 'react-router-dom';



function Artis() {
    let daftarArtis=[
        {name:'Marsel pesulap Merah',id:1,detail:'pesulap pembela kebenaran'},
        {name:'sule',id:2, detail:'pelawak terkaya di indo'},
        {name:'WANTIKNOO',id:3 ,detail:'Pengusaha Besi Terkenal'},
        {name:'regi Miawaug',id:4,detail:'youtuber ter-Toxic'},
        {name:'Kimi Hime',id:5, detail:'susu nya gedeee'},
        {name:'Windah Basudara',id:6, detail:'Youtuber Tersopan'},
        {name:'TEDDY',id:7,detail:'pengusaha bengkel Terkenal'},
        {name:'Rimuru',id:8 ,detail:'Orang terkuat'},
        {name:'Jordy',id:9, detail:'aktor dengan stamina terbanyak'},
        {name:'Ayah ku',id:10 ,detail:'gak ada lawan'},
        {name:'Reka',id:11, detail:'artis komplek'},
        {name:'Zaki',id:12, detail:'artis di kalangan progmamer'},
        {name:'Mia khalijfat',id:13, detail:'artis yang sudah pensi di eranya'},
        {name:'Michle Jackson',id:14,detail:'penari terkenal'},
        {name:'lil Nas',id:15,detail:'penyanyi yang sangat mencintai perempuan'},
    
    
    ]
   let Detail = useParams();
    return (
        <div>
            
            <h2>Detail Artis</h2>
            <p>{daftarArtis.filter((item)=>item.id===Number(Detail.id))[0].detail}</p>
                
            
        </div>
    );
}

export default Artis;