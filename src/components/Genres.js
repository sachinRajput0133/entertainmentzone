import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'




const Genres = ({genres,setSelectedGenres,setGenres,setpage,selectedGenres ,type}) => {

const handleAdd=(g)=>{
setSelectedGenres([...selectedGenres , g])
setGenres(genres.filter((gen)=>gen.id !== g.id  ))
setpage(1)
console.log(genres)
}
const handleRemove=(sg)=>{
 setGenres([...genres, sg]);
 setSelectedGenres(selectedGenres.filter((s)=>s.id !== sg.id))
}


    const fetchGenres=async ()=>{
        const{data }= await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=668395355cfd28aa28566f4ca964d861&language=en-US`)

        // console.log(data)
        setGenres(data.genres)
    }


    // console.log(genres)
useEffect(()=>{
 fetchGenres()

 return ()=>{
    setGenres([])
 }
// eslint-disable-next-line 
},[])

  return (  
    <div style={{padding:'2vw 0'}} >
      {
        selectedGenres &&    selectedGenres.map((sg)=>{
            return (<Chip  key={sg.id}  label={sg.name} style={{color:'white',margin:'.5vw'}}  size='small'  color='primary' onDelete={()=>handleRemove(sg)}  clickable  />)
        })
      }
      {
        genres &&    genres.map((g)=>{
            return (<Chip  key={g.id}  label={g.name} style={{color:'black',backgroundColor:'white',margin:'.5vw'}}  size='small'  onClick={()=>handleAdd(g)}  clickable />)
        })
      }
    </div>
  )
}

export default Genres
