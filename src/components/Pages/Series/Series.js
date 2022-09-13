import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import './Series.css'
import CustomPagination from '../../Pagination/CustomPagination'
import SingleContent from '../../SingleContent/SingleContent'
import Genres from '../../Genres'
import useGenres from '../../../Hooks/useGenres'

const Series = () => {

  const [content,setContent]=useState([])
  const[page,setPage]=useState(1)
  const [totalPages,setTotalPages]=useState()
    const [selectedGenres,setSelectedGenres]=useState([])
    const [genres,setGenres]=useState([])
  const genreForURL=useGenres(selectedGenres)
  const fetchMovies= async()=>{
    console.log(genreForURL)
     const {data} = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=668395355cfd28aa28566f4ca964d861&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreForURL}`)
     console.log(data.results)
     setContent(data.results)
      setTotalPages(data.total_pages)
  }
  
  
  useEffect(()=>{
   fetchMovies()
   
  },[page ,genreForURL])

  
  return (
    <div>
    <span className="pageTitle">TV Series</span>
    <Genres  type='tv' genres={genres}  selectedGenres={selectedGenres}  setGenres={setGenres} setSelectedGenres={setSelectedGenres}  setpage={setPage} />
    <div className="trending">
         {
          content && content.map((c)=>{
          return  (
             <SingleContent key={c.id} poster={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${c.poster_path}`} id={c.id} title={c.title  ||c.name} date={c.first_air_date || c.release_date} media_type='tv' vote_average={c.vote_average} />
              )
          })
         }
    </div>
    {
      totalPages>1 &&
    <CustomPagination  setpage={setPage}  totalPages={totalPages} />
    }
  </div>
  )
}

export default Series
