import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import MovieSearch from '../MovieSearch';
import MovieList from '../MovieList';
import { MovieProvider } from '../../context/MovieDetailContext';
import Banner from '../Banner';

const Layout = () => {
  const [movieSearch, setMovieSearch] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;

  const handleSearch = async (value) => {
      setMovieSearch([]);
      const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        },
      };
      if (value === "") return setMovieSearch([]);
      try {
        const searchMovie = await fetch(url, options);
        const data = await searchMovie.json();
        setMovieSearch(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(data.results);
        console.log(error);
      }
    }
  
  
  return (
    <>
        <div className='bg-black pb-32'>
          <Header onSearch={handleSearch} />
          <Banner />
        </div>
      
    </>
  )
}

export default Layout
