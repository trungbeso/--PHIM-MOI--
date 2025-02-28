import { useState, useEffect, useRef } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import MovieList from './components/MovieList'
import MovieSearch from './components/MovieSearch';
import { data } from 'autoprefixer';
import { MovieProvider } from './context/MovieDetailContext';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const apiKey = import.meta.env.VITE_API_KEY;
  const searchRef = useRef(null);

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

      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options)
      ]);

      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovies(data1.results);
      setMovieRate(data2.results);
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
      <div className='bg-black pb-32'>
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? <MovieSearch data={movieSearch} /> : (
          <>
            <MovieList title={'Phim Hot'} data={movies} />
            <MovieList title={'Phim Moi'} data={movieRate} />
          </>
        )}

      </div>
    </MovieProvider>

  )
}

export default App
