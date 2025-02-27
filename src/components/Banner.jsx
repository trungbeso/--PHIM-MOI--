import Star from "../assets/rating.png";
import HalfStar from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full top-0 left-0 h-full bg-black opacity-30" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <div className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 text-white py-1 px-3">
            TV Show
          </div>
          <div className="flex flex-col space-y-5 items-space-y-4">
            <h1 className="text-3xl font-semibold text-white">Nghe nói em thích tôi</h1>
            <div className="flex items-center space-x-3 *:w-8 *:h-8">
              <img src={Star} alt="rating" />
              <img src={Star} alt="rating" />
              <img src={Star} alt="rating" />
              <img src={Star} alt="rating" />
              <img src={HalfStar} alt="rating" />
            </div>
            <p className="text-white">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quaestione voluptate. Necessitatibus, quidem. lorem ipsum dolor
              sit amet consectetur adipisicing elit. Quisquam, quaestione
              voluptate. Necessitatibus, quidem. lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, quaestione voluptate.
              Necessitatibus, quidem. lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quisquam, quaestione voluptate. Necessitatibus,
              quidem. lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quaestione voluptate. Necessitatibus, quidem.
            </p>
            <div className="flex items-center space-x-4 *:p-3 text-white text-sm font-semibold ">
              <button className="  bg-black">Chi tiết</button>
              <button className=" bg-red-500">Xem phim</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="group cursor-pointer w-[400px] h-[560px] relative ">
            <img src={ImgTemp} alt="temp" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150 ease-in-out hover:scale-110 ">
                <img src={IconPlay} alt="" className="w-16 h-16 z-10" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
