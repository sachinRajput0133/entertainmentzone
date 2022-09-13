import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  height:'80%',
  background:'#39445a',
 borderRadius:'2px solid #282c34',
  color:'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({children ,media_type , id  }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content,setContent]=useState();
  const [video,setVideo]=useState()


const fetchData=async ()=>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=668395355cfd28aa28566f4ca964d861&&language=en-US`)
      
        //  console.log(data)
            setContent(data)
                     
}
const fetchVideo=async ()=>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=668395355cfd28aa28566f4ca964d861&&language=en-US`)
      
         console.log(data.results[0]?.key)
         setVideo(data)


}
React.useEffect(()=>{
    fetchData()
    fetchVideo()
},[])



  return (
    <div>
      <Button onClick={handleOpen}  className='trending-card' >{children}</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

        { content &&
          <Box sx={style}>
            <div className="contentModal">
                {/* <img  className='image-portrait' src={
                    `https://image.tmdb.org/t/p/w600_and_h900_bestv2${content.poster_path}` }
                  alt={content.title || content.name}   /> */}
                <img  className='image-portrait' src={
                    `https://image.tmdb.org/t/p/w600_and_h900_bestv2${content.backdrop_path}` }
                  alt={content.title || content.name}   />
            </div>

          </Box>

        }    
        </Fade>
      </Modal>
    </div>
  );
}