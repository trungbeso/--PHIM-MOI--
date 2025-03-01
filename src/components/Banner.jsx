import IconPlay from "../assets/play-button.png";
import { useContext } from "react";
import { MovieContext } from '../context/MovieDetailContext';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarIcon from '@mui/icons-material/Star';

const Banner = ({ title, data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);
  const imgUrl = import.meta.env.VITE_IMG_URL;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <div className="h-[700px] relative">
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        transitionDuration={800}
        containerClass="carousel-container h-full"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        showDots={true}
        arrows={false}
      >
        {Array.isArray(data) && data.map((item) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${imgUrl}${item.backdrop_path})` }}
            className="h-[700px] w-full bg-center bg-cover relative">
            <div className="absolute w-full top-0 left-0 h-full bg-black/50" />
            <div className="md:w-[80%] sm:w-full h-full mx-auto flex flex-col md:flex-row items-center justify-between space-x-8 p-4 relative">
              {/* content- left */}
              <div className="flex flex-col space-y-5 items-baseline w-full md:w-1/2 bg-black/50 p-4">
                <div className="bg-blue-500 transition duration-300 hover:bg-indigo-500 text-white py-1 px-3">
                  {item.adult ? '18+' : 'PG-13'}
                </div>
                <div className="flex flex-col space-y-4">
                  <h1 className="text-3xl font-semibold text-white">
                    {item.title || item.original_title}
                  </h1>
                  <p className="text-white line-clamp-4">{item.overview}</p>
                  <div className="flex text-white space-x-4">
                    <div className="flex items-center space-x-1">
                      <RemoveRedEyeIcon color="secondary" />
                      <p>{item.popularity}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <StarIcon color="primary" />
                      <p>{item.vote_average}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-white font-semibold">
                    <p>Ngày công chiếu: </p>
                    <span>{item.release_date}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="px-6 py-3 bg-black text-white text-sm font-semibold hover:bg-opacity-80 transition"
                      onClick={() => handleVideoTrailer(item.id)}
                    >
                      Xem Trailer
                    </button>
                    <button className="px-6 py-3 rounded-md bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition">
                      Xem Phim
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Right */}
              <div className="w-full md:w-1/2 flex justify-center items-center mt-4 md:mt-0">
                <div
                  className="group cursor-pointer w-[300px] md:w-[400px] h-[450px] md:h-[560px] relative"
                  onClick={() => handleVideoTrailer(item.id)}
                >
                  <img
                    src={`${imgUrl}${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg shadow-red-400"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <img src={IconPlay} alt="Play" className="w-16 h-16 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default Banner;