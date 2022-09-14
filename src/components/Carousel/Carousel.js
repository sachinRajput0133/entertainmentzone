import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './Carousel.css'

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ media_type, id }) => {
  const [credits, setCredits] = useState();
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=668395355cfd28aa28566f4ca964d861&language=en-US`
    );
    console.log(data.cast);
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
     // eslint-disable-next-line
  }, []);
  const items = credits?.map((c) => (
    <div className="carousel-item">
     
      <img
        src={c.profile_path?

                      `https://image.tmdb.org/t/p/w300/${c.profile_path}`:'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
            
        }
        onDragStart={handleDragStart}
        className="carousel-image"
        alt={c.name}
      />
      <b className="carouselItem-text">{c.name} </b>
    </div>
     ));

  return <AliceCarousel responsive={responsive}  infinite disableButtonsControls disableDotsControls  autoPlay  mouseTracking items={items} />;
};

export default Carousel;
