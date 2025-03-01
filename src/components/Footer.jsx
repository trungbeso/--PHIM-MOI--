import { Phone as PhoneIcon } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Main columns */}
        <div className="flex flex-col md:flex-row items-start md:items-start md:p-3 justify-around mb-8">
          {/* Description section */}
          <div className="mb-8 text-sm border-gray-700 w-full md:w-1/4 md:mx-9">
            <img src="/public/footer-logo.png" alt="" className="my-4" />

            <p className="mb-4">
              Phim mới - Trang xem phim Online với giao diện mới.<br />
              Nguồn phim được tổng hợp từ các website lớn với đa dạng các đầu phim
              và thể loại vô cùng phong phú.
            </p>

            {/* Contact */}
            <div className="flex items-center gap-2 mb-4">
              <PhoneIcon className="text-sm" />
              <button className="font-semibold hover:text-red-400" href="#">Contact: Call Now</button>
            </div>
          </div>

          {/* Column 1 - Phim mới */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 pointer-events-none">PHIM MỚI</h3>
            <div className="space-y-2 text-sm hover:*:text-red-400 cursor-pointer">
              <div>Phim Khoa Học</div>
              <div>Phim Kim Dị</div>
              <div>Phim Chiếu Rạp</div>
              <div>Phim Hình Sự</div>
              <div>Phim Hành Động</div>
            </div>
          </div>

          {/* Column 2 - Phim hay */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 pointer-events-none">PHIM HAY</h3>
            <div className="space-y-2 text-sm hover:*:text-red-400 cursor-pointer">
              <div>Phim Âu Mỹ</div>
              <div>Phim Hàn Quốc</div>
              <div>Phim Trung Quốc</div>
              <div>Phim Nhật Bản</div>
              <div>Phim Thái Lan</div>
            </div>
          </div>

          {/* Column 3 - Thông tin */}
          <div className="w-full md:w-1/4">
            <h3 className="font-bold mb-4 pointer-events-none">THÔNG TIN</h3>
            <div className="space-y-2 text-sm hover:*:text-red-400 cursor-pointer">
              <div>Giới thiệu</div>
              <div>Liên hệ chúng tôi</div>
              <div>Điều khoản sử dụng</div>
              <div>Chính sách riêng tư</div>
              <div>Khiếu nại bản quyền</div>
            </div>
          </div>
        </div>

        {/* Anime keywords */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-gray-400 border-t border-gray-700 p-5">
          <div className="text-xs font-semibold space-x-3">
            {[
              "anime", "animety", "anime hay", "anime ty",
              "download anime vietsub", "anime hd", "tai anime",
              "anime moi nhat", "phim anime", "hoat hinh nhat", "tokuda", "maria ozawa"
            ].map((keyword, index) => (
              <span key={index} className="hover:text-white cursor-pointer">
                {keyword}
              </span>
            ))}
          </div>

          <div className="social flex gap-4 items-center">
            <a href="https://www.facebook.com/">
              <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png" alt="instagram" />
            </a>
            <a href="https://www.youtube.com/">
              <img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;