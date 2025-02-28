import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useState } from 'react';
import { MovieContext } from '../context/MovieDetailContext';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2
  }
};

const MovieList = ({ title, data }) => {
  const imgUrl = import.meta.env.VITE_IMG_URL;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');
  const { handleVideoTrailer } = useContext(MovieContext);

  return (
    <div className="w-[80%] m-auto text-white p-10 mb-10">
      <h2 className="text-xl mb-4 font-bold uppercase">
        {title}
      </h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {Array.isArray(data) && data.length > 0 && data.map((item) => (
          <div key={item.id}
            className="w-[200px] h-[300px] relative group"
            onClick={() => handleVideoTrailer(item.id)}>
            <div className=" group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
              <img src={`${imgUrl}${item.poster_path}`} alt={item.original_title} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-1 text-center flex justify-center items-center w-full">
                <p className="uppercase text-md">{item.title || item.original_title}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
