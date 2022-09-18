
import { Badge, createTheme, ThemeProvider } from '@mui/material'
import { styled } from '@mui/system'

import React from 'react'
import ContentModal from '../ContentModel/ContentModel'
// import { img_300  } from '../config/config'
import './SingleContent.css'

const SingleContent = ( { id, poster, title,date, media_type,vote_average}) => {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#2d313a",
      },
    },
  });






  return (
    <ContentModal media_type={media_type}  id={id}   >
      <ThemeProvider theme={darkTheme}>
       
        <Badge badgeContent={vote_average.toFixed(1)}  color={vote_average>6 ? 'primary': 'secondary'} />

      </ThemeProvider>
       <img  className='poster'   src={poster?  poster : "https://www.movienewz.com/img/films/poster-holder.jpg" } alt={title} /> 
     
      <b  className='title'  >{title}</b>
      
      <div className='subTitleList' >
      <span  className='subTitle' >
        {media_type ==='tv' ? 'TV Series' : 'Movie'} </span>
       <span className='subTitle' >{date} </span>

      </div>
      
     
    </ContentModal>
  )
}

export default SingleContent
