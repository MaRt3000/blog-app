import React from "react";
import { category } from "../../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10" onClick={onClick}>
      <button className="bg-white w-8 h-8 rounded-full shadow-md flex justify-center items-center transition-transform hover:scale-110">
        <MdNavigateNext className="text-xl" />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10" onClick={onClick}>
      <button className="bg-white w-8 h-8 rounded-full shadow-md flex justify-center items-center transition-transform hover:scale-110">
        <GrFormPrevious className="text-xl" />
      </button>
    </div>
  );
};

export const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section className="mt-12 relative">
      <div className="w-full">
        <Slider {...settings}>
          {category.map((item) => (
            <div key={item.id} className="">
              <div className="relative cursor-pointer">
                <img src={item.cover} alt="cover" className="w-full h-64 object-cover rounded" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                  <h4 className="text-lg font-medium text-yellow-400">{item.category}</h4>
                  <p className="text-white mt-2 text-sm font-light">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
