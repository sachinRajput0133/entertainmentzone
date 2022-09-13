import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../SingleContent/SingleContent'
import './Trending.css'

const Trending = () => {

  const [content,setContent]=useState([])
const fetchTrending= async()=>{

   const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=3f13dd1f8bc0f8f341563df508dd2d43`)
   console.log(data.results)
   setContent(data.results)
}


useEffect(()=>{
 fetchTrending()
},[])











  return (
    <div>
      <span className="pageTitle"> Trending</span>
      <div className="trending">
           {
            content && content.map((c)=>{
            return  (
   <SingleContent key={c.id} poster={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${c.poster_path}`} id={c.id} title={c.title  ||c.name} date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average} />
                )
            })
           }
      </div>
    </div>
  )
}

export default Trending
