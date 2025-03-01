import PropTypes from "prop-types";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const movieType = [
  { "id": 1, "type": "Phim Hành Động", "path": "/phim-hanh-dong" },
  { "id": 2, "type": "Phim Kinh Dị", "path": "/phim-kinh-di" },
  { "id": 3, "type": "Phim Hài", "path": "/phim-hai" },
  { "id": 4, "type": "Phim Tình Cảm", "path": "/phim-tinh-cam" },
  { "id": 5, "type": "Phim Viễn Tưởng", "path": "/phim-vien-tuong" },
  { "id": 6, "type": "Phim Hoạt Hình", "path": "/phim-hoat-hinh" },
  { "id": 7, "type": "Phim Phiêu Lưu", "path": "/phim-phieu-luu" },
  { "id": 8, "type": "Phim Tài Liệu", "path": "/phim-tai-lieu" },
  { "id": 9, "type": "Phim Chiến Tranh", "path": "/phim-chien-tranh" },
  { "id": 10, "type": "Phim Thể Thao", "path": "/phim-the-thao" },
  { "id": 11, "type": "Phim Gia Đình", "path": "/phim-gia-dinh" },
  { "id": 12, "type": "Phim Âm Nhạc", "path": "/phim-am-nhac" },
  { "id": 13, "type": "Phim Tâm Lý", "path": "/phim-tam-ly" },
  { "id": 14, "type": "Phim Cổ Trang", "path": "/phim-co-trang" },
  { "id": 15, "type": "Phim Học Đường", "path": "/phim-hoc-duong" },
  { "id": 16, "type": "Phim Khoa Học", "path": "/phim-khoa-hoc" },
  { "id": 17, "type": "Phim Hình Sự", "path": "/phim-hinh-su" },
  { "id": 18, "type": "Phim Võ Thuật", "path": "/phim-vo-thuat" },
  { "id": 19, "type": "Phim Thần Thoại", "path": "/phim-than-thoai" },
  { "id": 20, "type": "Phim Kinh Điển", "path": "/phim-kinh-dien" }
];

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
  const [typeIsOpen, setTypeIsOpen] = useState(false);
  const [countryIsOpen, setCountryIsOpen] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(textSearch);
    }
  };

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
                {movieType.map((movie) => (
                  <a key={movie.id} href={movie.path} className="block p-1 px-2 hover:bg-gray-700 bg-gray-900 hover:font-semibold">
                    {movie.type}
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
