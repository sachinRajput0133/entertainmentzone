import { Button, Tab, Tabs, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SingleContent from '../../SingleContent/SingleContent';
import CustomPagination from '../../Pagination/CustomPagination';


const Search = () => {
  
const[type,setType]=useState(0)
const [page,setPage]=useState(1)
const [searchText,setSearchText]=useState('')
const [content,setContent]=useState([])
const [totalPages,setTotalPages]=useState()
// const darkTheme=createTheme({
//   palette:{
//     type:'dark',
//     primary:{
//       main:'#fff'
//     },
//   },
// });
const fetchSearch=async ()=>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=668395355cfd28aa28566f4ca964d861&language=en-US&query=${searchText}&page=${page}&include_adult=false`
     )  
     

     
      setContent(data.results)
      setTotalPages(data.total_pages)
}
console.log(content)

useEffect(()=>{
  window.scroll(0,0);
     fetchSearch()
   // eslint-disable-next-line  
},[type,page])
  return (
    <div>  
      
        
        
<div style={{display:'flex',justifyContent:'center',padding:'1vw 0',margin:'auto' }}>
    <TextField  className='searchBox'    label='Search' variant='filled' style={{flex:1}} onChange={(e)=>setSearchText(e.target.value)} />

<Button  varient='contained' style={{marginLeft:'4px', background:'white' }}  onClick={fetchSearch} > 
<SearchIcon   />

 </Button>

</div>
        
     <Tabs value={type} indicatorColor='primary'textColor='primary' 
     onChange={(e,newValue)=>{
      setType(newValue);
      setPage(1)
     }} >
      <Tab  style={{width:'50%',color:'white'}}    label= "search Movies"  />
      <Tab  style={{width:'50%',color:'white'}}    label= "Search TV Series"/>
      
      </Tabs>     
      <div>
      <span className="pageTitle"> </span>
      <div className="trending">
           {
            content && content.map((c)=>{
            return  (
               <SingleContent key={c.id} poster={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${c.poster_path}`} id={c.id} title={c.title  ||c.name} date={c.first_air_date || c.release_date} media_type={type ? 'tv':'movie'} vote_average={c.vote_average} />
                )
            })
           }
           {
            searchText && content.length===0 &&  (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>  )
           }
      </div>
      {
        totalPages >0  &&

        <CustomPagination  setpage={setPage}  totalPages={totalPages} />
      }
    </div>

    </div>
  )
}

export default Search
