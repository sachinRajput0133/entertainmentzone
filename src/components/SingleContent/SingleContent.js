import { Badge } from '@mui/material'
import React from 'react'
import ContentModal from '../ContentModel/ContentModel'
// import { img_300  } from '../config/config'
import './SingleContent.css'

const SingleContent = ( { id, poster, title,date, media_type,vote_average}) => {
  return (
    <ContentModal media_type={media_type}  id={id}   >
        <Badge badgeContent={vote_average}  color={vote_average>6 ? 'primary': 'secondary'} />
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