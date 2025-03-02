import React from 'react';
import PropTypes from 'prop-types';
import MovieList from '../components/MovieList';
import Actor from '../components/Actor';
import MovieSearch from '../components/MovieSearch';

const HomePage = ({ movieRate, movieSearch, movies, tvShows, tvShowRate, actors }) => {
  return (
    <div>
      {movieSearch.length > 0 ? (
        <MovieSearch title="Search Results" data={movieSearch} />
      ) : (
        <>
          <MovieList title="Phim Chiếu Rạp Mới Cập Nhật" data={movies} />
          <MovieList title="Phim Mới Nổi Bật" data={movieRate} />
          <MovieList title="Phim Bộ Mới Cập Nhật" data={tvShows} />
          <MovieList title="Phim Bộ Nổi Bật" data={tvShowRate} />
          <Actor title="Diễn Viên Nổi Bật" data={actors} />
        </>
      )}
    </div>
  );
};

HomePage.propTypes = {
  movieRate: PropTypes.array,
  movieSearch: PropTypes.array,
  movies: PropTypes.array,
  tvShows: PropTypes.array,
  tvShowRate: PropTypes.array,
  actors: PropTypes.array,
};

export default HomePage;