import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide4" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-14 w-1/3">
            <p className="text-6xl font-bold">Affordable Price For Car Servicing</p>
            <p className="font-semibold">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex">
            <button className="btn btn-outline btn-warning mr-3">Discover More</button>
            <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide1" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-14 w-1/3">
            <p className="text-6xl font-bold">Affordable Price For Car Servicing</p>
            <p className="font-semibold">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex">
            <button className="btn btn-outline btn-warning mr-3">Discover More</button>
            <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide2" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-14 w-1/3">
            <p className="text-6xl font-bold">Affordable Price For Car Servicing</p>
            <p className="font-semibold">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex">
            <button className="btn btn-outline btn-warning mr-3">Discover More</button>
            <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
            <a href="#slide3" className="btn btn-circle mr-5">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-7 pl-14 w-1/3">
            <p className="text-6xl font-bold">Affordable Price For Car Servicing</p>
            <p className="font-semibold">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <div className="flex">
            <button className="btn btn-outline btn-warning mr-3">Discover More</button>
            <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
