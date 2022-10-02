import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useEffect ,useState} from 'react';

import WhatshotIcon from '@mui/icons-material/Whatshot';
// import { makeStyles ,useStyles} from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate } from 'react-router-dom'
// const useStyles=makeStyles({
// root:  {width:'100%'}
// })
export default function SimpleBottomNavigation() {
// useStyles();
const navigate=useNavigate()
const [value, setValue] = useState(0);
useEffect(()=>{
if(value===0){
    navigate('/')
}else if(value===1){
    navigate('/movies') 
}else if(value===2){
    navigate('/series')
}else if (value===3){
    navigate('/search')
}


},[value , navigate])

  return (
    <Box sx={{ width: '100%',position:'fixed',bottom:0,color:'white'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
     style={{backgroundColor:'rgb(21 58 35 / 92%)',zIndex:100 ,boxShadow:'0px 5px 5px black' ,color:'white'}} >
        <BottomNavigationAction style={{color:'white'}} label="Trending" icon={<WhatshotIcon style={{color:'white'}}/>} />
        <BottomNavigationAction style={{color:'white'}} label="Movies" icon={<MovieIcon style={{color:'white'}}/>} />
        <BottomNavigationAction style={{color:'white'}} label="TV Series" icon={<TvIcon style={{color:'white'}} />} />
        <BottomNavigationAction style={{color:'white'}} label="Search" icon={<SearchIcon style={{color:'white'}} />} />
      </BottomNavigation>
    </Box>
  );
}