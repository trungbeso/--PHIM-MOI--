import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRateIcon from '@mui/icons-material/StarRate';

const yearData = [{
  "id": 1,
  "year": 2025
}, {
  "id": 2,
  "year": 2024
}, {
  "id": 3,
  "year": 2023
}, {
  "id": 4,
  "year": 2022
}, {
  "id": 5,
  "year": 2021
}, {
  "id": 6,
  "year": 2020
}, {
  "id": 7,
  "year": 2019
}, {
  "id": 8,
  "year": 2018
}, {
  "id": 9,
  "year": 2017
}, {
  "id": 10,
  "year": 2016
}, {
  "id": 11,
  "year": 2015
}, {
  "id": 12,
  "year": 2014
}, {
  "id": 13,
  "year": 2013
}, {
  "id": 14,
  "year": 2012
}, {
  "id": 15,
  "year": 2011
}, {
  "id": 16,
  "year": 2010
}, {
  "id": 17,
  "year": 2009
}
  , {
  "id": 18,
  "year": 2008
}
  , {
  "id": 19,
  "year": 2007
}, {
  "id": 20,
  "year": 2006
}]

const RightSideBar = ({ data }) => {
  const imgUrl = import.meta.env.VITE_IMG_URL;

  return (
    <div className='border-l-2 text-white border-gray-800 right-4 h-full w-full md:w-[300px]'>
      <div className="year-release p-4 flex flex-col flex-wrap ">
        <div className="flex justify-between items-center my-4">
          <p>Năm phát hành</p>
          <ExpandMoreIcon />
        </div>
        <div className="flex flex-wrap justify-around items-center align-middle text-center space-x-3 space-y-2 mb-7">
          {yearData.map(year => (
            <div key={year.id} className='bg-gray-800 rounded-md hover:bg-white hover:text-black cursor-pointer p-2'>
              {year.year}
            </div>
          ))}
        </div>
      </div>

      <div className="poster h-[400px] p-4 my-5">
        {Array.isArray(data) && data.length > 4 && data[4] && (
          <div key={data[4].id} className='h-full w-full bg-center object-cover bg-black/30 relative'>
            <img src={`${imgUrl}${data[4].poster_path}`} alt={data[4].title} />
            <div className="text-lg w-40 px-2 rounded-sm bg-black/30 absolute z-10 bottom-0">
              <p>{data[4].title || data[4].original_title}</p>
              <div className='flex items-center space-x-2'>
                <StarRateIcon />
                <span>{data[4].vote_average}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-3xl items-center text-white p-4">
        {Array.isArray(data) && data.slice(7, 13).map((item) => (
          <div key={item.id} className='flex space-x-2 px-3 p-2 bg-gray-900 rounded-md mb-2 h-32'>
            <div className="pic w-20 h-32">
              <img src={`${imgUrl}${item.poster_path}`} className='w-24 h-[115px]' alt={item.original_title} />
            </div>
            <div className="flex flex-col text-[13px] font-semibold">
              <h3 className='pl-2 py-0'>{item.title || item.original_title}</h3>
              <div className='flex items-center space-x-2 border border-gray-800 w-fit rounded-md px-2'>
                <div className="text-sm">
                  <StarRateIcon />
                </div>
                <span className='text-gray-400'>{item.vote_average}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightSideBar;
