

const Header = () => {
 
  return (
    <div className="p-4 bg-black flex justify-between items-center *:font-serif w-[80%] m-auto">
      <div className="flex items-center space-x-4">
        <h1 className="text-4xl mr-3 font-semibold text-red-700 ">Phim Moi</h1>
        <nav className="flex items-center space-x-8 *:text-white hover:*:text-red-500">
          <a href="#" className="">
            Phim Mới
          </a>
          <a href="#" className="">
            Phim Lẻ
          </a>
          <a href="#" className="">
            Phim Bộ
          </a>
          <a href="#" className="">
            Thể Loại
        
          </a>
          <a href="#" className="">
            Quốc gia
          </a>

        </nav>
      </div>
      <div className=" space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-3 py-1 border border-gray-300 rounded-md mr-2"
        />
        <button className="px-3 py-1 bg-red-500 text-white font-semibold rounded-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
