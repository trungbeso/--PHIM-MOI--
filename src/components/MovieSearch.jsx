import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react';
import { MovieContext } from '../context/MovieDetailContext';
import { useOutletContext } from 'react-router';

const MovieSearch = ({ title, data }) => {
  const imgUrl = import.meta.env.VITE_IMG_URL;
  const { handleVideoTrailer } = useContext(MovieContext);
  const { movieSearch = [] } = useOutletContext() || {};
  const searchRef = useRef(null);


  return (
    <div ref={searchRef} className="w-[90%] md:w-[80%] m-auto text-white p-5 md:p-10 mb-10 z-10">
      <h2 className="text-xl mb-4 font-bold uppercase">
        {title}
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {Array.isArray(movieSearch) && movieSearch.length > 0 && movieSearch.map((item) => (
          <div key={item.id}
            onClick={() => handleVideoTrailer(item.id)}
            className="w-full h-[300px] relative group"
          >
            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
              <img src={`${imgUrl}${item.poster_path}`} alt={item.original_title} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-1 text-center flex justify-center items-center w-full">
                <p className="uppercase text-md">{item.title || item.original_title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

MovieSearch.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
}

export default MovieSearch

