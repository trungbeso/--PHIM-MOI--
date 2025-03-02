import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header';

interface ImportMetaEnv {
  VITE_API_KEY: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
import RightSideBar from '../RightSideBar';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';
import { MovieProvider } from '../../context/MovieDetailContext';
import Banner from '../Banner';



const Layout = () => {
  const [movies, setMovies] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [tvShowRate, setTvShowRate] = useState([]);
  const [actors, setActors] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchRef = useRef<HTMLDivElement>(null);

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
      console.log(error);
    }
  }


  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };
      const url = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, [apiKey]);

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';
      const url3 = 'https://api.themoviedb.org/3/tv/popular?language=vi%25E1%25BB%2587t&page=1';
      const url4 = 'https://api.themoviedb.org/3/tv/top_rated?language=vi&page=1';
      const url5 = 'https://api.themoviedb.org/3/trending/person/week?language=vi';

      const [res1, res2, res3, res4, res5] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
        fetch(url3, options),
        fetch(url4, options),
        fetch(url5, options)
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      const data4 = await res4.json();
      const data5 = await res5.json();

      setMovies(data1.results);
      setMovieRate(data2.results);
      setTvShows(data3.results);
      setTvShowRate(data4.results);
      setActors(data5.results);
    };
    fetchMovie();
  }, [])

  useEffect(() => {
    if (movieSearch.length > 0 && searchRef.current) {
      searchRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [movieSearch])

  return (
    <MovieProvider>
      <div className="bg-black">
        <Header onSearch={handleSearch} />
        <Banner data={tvShowRate} />
        <div className="w-[90%] md:w-[80%] m-auto flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[70%]">
            <Outlet context={{ movieSearch }} />
          </div>
          <div className="w-full md:w-[30%] mt-10 md:mt-0">
            <RightSideBar data={movies} />
          </div>
        </div>
        <Footer />
      </div>
    </MovieProvider>
  );
};

export default Layout;
