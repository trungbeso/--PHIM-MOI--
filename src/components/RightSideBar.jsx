import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarRateIcon from '@mui/icons-material/StarRate';

const RightSideBar = ({ data }) => {
  const imgUrl = import.meta.env.VITE_IMG_URL;

  return (
    <div className='border-l-2 text-white border-gray-800 right-4 h-full w-[300px] space-y-5'>
      <div className="year-release p-4 flex flex-col flex-wrap overflow-hidden">
        <div className="flex justify-between items-center pb-4">
          <p>Năm phát hành</p>
          <ExpandMoreIcon />
        </div>
        <div className="flex flex-wrap justify-around items-center align-middle text-center space-x-3 space-y-2 mb-7">
          {Array.isArray(data) && data.length > 0 && data.map((item) => (
            <div key={item.id} className='first:bg-white first:text-black bg-gray-800 rounded-md hover:bg-white hover:text-black cursor-pointer p-2 '>
              {item.release_date?.split('-')[0]}
            </div>
          ))}
        </div>

        {Array.isArray(data) && data.length > 4 && data[4] && (
          <div key={data[4].id} className='w-full h-[150px] bg- bg-center object-cover bg-black/30 relative'>
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
    </div>
  )
}

export default RightSideBar
