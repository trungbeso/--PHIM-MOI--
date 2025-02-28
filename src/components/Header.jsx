import PropTypes from "prop-types";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = ({ onSearch }) => {
  const [typeIsOpen, setTypeIsOpen] = useState(false);
  const [nationIsOpen, setNationIsOpen] = useState(false);
  const [textSearch, setTextSearch] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(textSearch);
    }
  };

  return (
    <div className="p-4 bg-black cursor-pointer flex justify-between items-center *:font-serif w-[80%] m-auto">
      <div className="flex items-center space-x-2">
        <a className="text-3xl mr-3 font-semibold text-red-700 ">Phim Moi</a>
        <nav className="flex items-center space-x-3 *:text-white hover:*:text-red-500 *:cursor-pointer">
          <a href="/" >
            Phim Mới
          </a>
          <a href="#" className="">
            Phim Lẻ
          </a>
          <a href="#" className="" >
            Phim Bộ
          </a>
          <a href="#" className="" >
            Thể Loại
            <ExpandMoreIcon />
          </a>
          <a href="#" className="">
            Quốc gia
            <ExpandMoreIcon />
          </a>
        </nav>
      </div>
      <div className=" space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 border border-gray-300 rounded-md mr-2"
          onChange={(e) => setTextSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          value={textSearch}
        />
        <button
          onClick={() => onSearch(textSearch)}
          className="px-3 py-1 bg-red-500 text-white font-semibold rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

Header.prototypes = {
  onSearch: PropTypes.func,
};

export default Header;
