import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const movieCountry = [
  { "id": 1, "country": "Việt Nam", "path": "/phim-viet-nam" },
  { "id": 2, "country": "Mỹ", "path": "/phim-my" },
  { "id": 3, "country": "Hàn Quốc", "path": "/phim-han-quoc" },
  { "id": 4, "country": "Trung Quốc", "path": "/phim-trung-quoc" },
  { "id": 5, "country": "Nhật Bản", "path": "/phim-nhat-ban" },
  { "id": 6, "country": "Thái Lan", "path": "/phim-thai-lan" },
  { "id": 7, "country": "Anh", "path": "/phim-anh" },
  { "id": 8, "country": "Pháp", "path": "/phim-phap" },
  { "id": 9, "country": "Đài Loan", "path": "/phim-dai-loan" },
  { "id": 10, "country": "Nga", "path": "/phim-nga" },
  { "id": 11, "country": "Hồng Kông", "path": "/phim-hong-kong" },
  { "id": 12, "country": "Úc", "path": "/phim-uc" },
  { "id": 13, "country": "Canada", "path": "/phim-canada" },
  { "id": 14, "country": "Thụy Điển", "path": "/phim-thuy-dien" },
  { "id": 15, "country": "Đức", "path": "/phim-duc" },
  { "id": 16, "country": "Nước khác", "path": "/phim-nuoc-khac" }
]

const Header = ({ onSearch }) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [typeIsOpen, setTypeIsOpen] = useState(false);
  const [movieTypes, setMovieTypes] = useState([]);
  const [countryIsOpen, setCountryIsOpen] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(textSearch);
    }
  };

  useEffect(() => {
    const fetchMovieType = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };
      const url = 'https://api.themoviedb.org/3/genre/movie/list?language=vi';
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setMovieTypes(data.genres);
      } catch (error) {
        console.log(error);
        console.log(data.genres);
      }

    }
    fetchMovieType();
  }, []);


  return (
    <div className="p-4 bg-black cursor-pointer flex flex-col md:flex-row justify-between items-center md:w-[80%] m-auto">
      <div className="flex items-center space-x-2 mb-4 md:mb-0">
        <a className="text-3xl mr-3 font-semibold text-red-700">Phim Moi</a>
        <nav className="flex items-center space-x-3 text-white hover:*:text-red-500 cursor-pointer">
          <a href="/" className="hidden md:block">
            Phim Mới
          </a>
          <a href="#" className="hidden md:block">
            Phim Lẻ
          </a>
          <a href="#" className="hidden md:block">
            Phim Bộ
          </a>
          <div
            className="relative"
            onMouseEnter={() => setTypeIsOpen(true)}
            onMouseLeave={() => setTypeIsOpen(false)}
          >
            <a href="#" className="flex items-center">
              Thể Loại
              <ExpandMoreIcon />
            </a>
            {typeIsOpen && (
              <div className="absolute top-full bg-black text-white p-3 rounded shadow-lg z-30 grid grid-cols-2 md:grid-cols-4 space-x-1 space-y-1 w-[200px] md:w-[370px] text-xs">
                {Array.isArray(movieTypes) && movieTypes.map((movie) => (
                  <a key={movie.id} href='#' className="block p-1 px-2 hover:bg-gray-700 bg-gray-900 hover:font-semibold">
                    {movie.name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setCountryIsOpen(true)}
            onMouseLeave={() => setCountryIsOpen(false)}
          >
            <a href="#" className="flex items-center">
              Quốc gia
              <ExpandMoreIcon />
            </a>
            {countryIsOpen && (
              <div className="absolute top-full bg-black text-white p-3 rounded shadow-lg z-30 grid grid-cols-2 md:grid-cols-4 space-x-1 space-y-1 w-[200px] md:w-[370px] text-xs">
                {movieCountry.map((movie) => (
                  <a key={movie.id} href={movie.path} className="block p-1 px-2 hover:bg-gray-700 bg-gray-900 hover:font-semibold">
                    {movie.country}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="flex space-x-2 w-full md:w-auto">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow md:flex-grow-0 border border-gray-300 rounded-md mr-2 p-1"
          onChange={(e) => setTextSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          value={textSearch}
        />
        <button
          onClick={() => onSearch(textSearch)}
          className="px-3 py-1 bg-red-500 text-white font-semibold rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
