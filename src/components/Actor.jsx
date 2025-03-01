import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { MovieContext } from '../context/MovieDetailContext';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EmmaStone from '/emma-stone.jpg';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 5000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5
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

const Actor = ({ title, data }) => {
  const imgUrl = import.meta.env.VITE_IMG_URL;
  const { handleVideoTrailer } = useContext(MovieContext);

  return (
    <div className="text-white p-5 mb-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl mb-4 font-bold uppercase border-l-4 border-red-500 pl-2">
          {title}
        </h2>
        <button className='text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md'>
          Xem thêm
          <ArrowRightIcon />
        </button>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        className="flex items-center space-x-4"
        itemClass="carousel-item-padding-40-px">
        {Array.isArray(data) && data.length > 0 && data.map((item) => (
          <div key={item.id}
            className="w-[150px] h-[300px] relative group flex items-center justify-center"
            onClick={() => handleVideoTrailer(item.id)}>
            <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/30 hover:bg-black/0" />
              <img src={`${imgUrl}${item.profile_path}` || `${EmmaStone}`} alt={item.original_name} className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-1 text-center flex justify-center items-center w-full">
                <p className="uppercase text-md">{item.name || item.original_name}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

Actor.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default Actor;
