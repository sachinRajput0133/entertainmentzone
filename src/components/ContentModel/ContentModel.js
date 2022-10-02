import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
// import Typography from '@mui/material/Typography';
import YouTubeIcon from "@mui/icons-material/YouTube";
import axios from "axios";
import { useState, useEffect } from "react";
import './ContentModel.css'
import Carousel from "../Carousel/Carousel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "70vh",
  background: " rgba(21, 58, 35)",
  // borderRadius: "2px solid #282c34",
  color: "white",
  // border: "2px solid #000",
  boxShadow: 24,
  borderRadius:'2vw',
  p: 1,
  

};

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=668395355cfd28aa28566f4ca964d861&&language=en-US`
    );

    //  console.log(data)
    setContent(data);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=668395355cfd28aa28566f4ca964d861&&language=en-US`
    );

    // console.log(data.results[0]?.key);
    setVideo(data.results[0]?.key);
  };
  useEffect(() => {
    fetchData();
    fetchVideo();

     
     // eslint-disable-next-line
  }, [video]);

  return (
    <div>
      <div onClick={handleOpen} className="trending-card">
        {children}
      </div>
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
          {content && (
            <Box sx={style}>
              <div className="contentModal">
                <img  className='image-portrait'  src={
                    `https://image.tmdb.org/t/p/w300/${content.poster_path}` }
                  alt={content.title || content.name}   />
                <img  className='image-landscape'  src={
                    `https://image.tmdb.org/t/p/w500/${content.backdrop_path
                  }` }
                  alt={content.title || content.name}   />
                
                  
               
                 

                <div className="contentModal-about">
                  <span className="content-modal-title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "_ _ _ _ "
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}
                  <span className="modal-description">{content.overview}</span>

                <Carousel media_type={media_type} id={id}  />
                    
                  <Button
                    varient="contained"
                    color="secondary"
                    target="_blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                    startIcon={<YouTubeIcon />}
                    style={{background:'red',color:'white' ,    marginTop: '2vw'}}
                  >
                
                    Watch The Trailer
                  </Button>

                </div>
              </div>
            </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
