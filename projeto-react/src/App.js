import './App.css';
import MovieRow from './componentes/MovieRow';
import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import Trailer from './componentes/Trailer/Trailer';

export default() => {

const [movieList, setMovielist] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {

  let list = await Tmdb.getHomeList();
 setMovielist(list);

    }

loadAll();
  },[]);

return(
<div className="page">

<div className= "content-trailer">

<Trailer></Trailer>

</div>



<section className="lists">
{movieList.map((item,key)=> (

<MovieRow key={key} title={item.title} items={item.items}/>

))}

</section>

</div>
);
}



