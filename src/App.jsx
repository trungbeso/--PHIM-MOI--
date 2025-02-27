import { useState, useEffect } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import MovieList from './components/MovieList'

function App() {
  const [movies, setMovies] = useState();
  const [movieRate, setMovieRate] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;

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

  return (
    <div className='bg-black pb-32'>
      <Header />
      <Banner />
      <MovieList title={'Phim Hot'} data={movies} />
      <MovieList title={'Phim Moi'} data={movieRate} />
    </div>
  )
}

export default App
