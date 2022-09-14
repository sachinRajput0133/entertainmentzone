import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CustomPagination from '../../Pagination/CustomPagination'
import SingleContent from '../../SingleContent/SingleContent'
import './Trending.css'


const Trending = () => {

const [content,setContent]=useState([])
const[page,setPage]=useState(1)
  

const fetchTrending= async()=>{

   const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=668395355cfd28aa28566f4ca964d861&page=${page}`)
   console.log(data.results)
   setContent(data.results)

}


useEffect(()=>{
 fetchTrending()
 // eslint-disable-next-line
},[page])


  return (
    <div className='trend'>
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
      <CustomPagination  setpage={setPage}/>
    </div>
  )
}

export default Trending
