import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import Actor from './components/Actor';
import CinemaPage from './page/CinemaPage';
import Layout from './components/Layout/Layout';
import HomePage from './page/HomePage';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [tvShowRate, setTvShowRate] = useState([]);
  const [actors, setActors] = useState([]);
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
    <Router>
      <Routes>
        <Route path="/" element={<Layout movieSearch={movieSearch} />}>
          <Route index element={<HomePage
            movieSearch={movieSearch}
            movies={movies}
            movieRate={movieRate}
            tvShows={tvShows}
            tvShowRate={tvShowRate}
            actors={actors} />} />
          <Route path="search" element={<MovieSearch title={'Kết Quả Tìm Kiếm'} />} />
          <Route path="movies" element={<CinemaPage title={'Phim Chiếu Rạp Mới Cập Nhật'} data={movies} />} />
          <Route path="rated-movies" element={<CinemaPage title={'Phim Mới Nổi Bật'} data={movieRate} />} />
          <Route path="tv-shows" element={<CinemaPage title={'Phim Bộ Mới Cập Nhật'} data={tvShows} />} />
          <Route path="rated-tv-shows" element={<CinemaPage title={'Phim Bộ Nổi Bật'} data={tvShowRate} />} />
          <Route path="actors" element={<Actor title={'Diễn Viên Nổi Bật'} data={actors} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;