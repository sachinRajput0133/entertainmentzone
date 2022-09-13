import { Button, Tab, Tabs, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import React, { useState } from 'react'


const Search = () => {
  
const[type,setType]=useState(0)
const [page,setPage]=useState(1)

// const darkTheme=createTheme({
//   palette:{
//     type:'dark',
//     primary:{
//       main:'#fff'
//     },
//   },
// });


  return (
    <div>  
      
        
        
<div style={{display:'flex',justifyContent:'center',padding:'1vw 0',margin:'auto' }}>
    <TextField  className='searchBox'    label='Search' variant='filled' style={{flex:1}}  />

<Button  varient='contained' style={{marginLeft:'4px', background:'white' }} > 
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
    
    </div>
  )
}

export default Search
