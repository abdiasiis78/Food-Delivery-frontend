import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const SnextArrow = (props) =>{
  const {className, style , onClick} = props
  return (
    <div
    className={className}
    style={{...style, display: "block", background: "red"}}
    onClick={onClick}
    />
  )
}

const SprevArrow = (props) =>{
  const {className, style , onClick} = props
  return (
    <div
    className={className}
    style={{...style, display: "block", background: "red"}}
    onClick={onClick}
    />
  )
}

function SpecialDishes() {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipes(specials);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    nextArrow: <SnextArrow/>,
    prevArrow: <SprevArrow/>
    
  };

  return (
    <div className="my-20 relative  items-center" id="section-container">
      <div className="text-left">
        <p className="" id="subtitle">
          Special Dishes
        </p>
        <h2 className="md:w-[520px]" id="title">
          Standout Dishes From Our Menu
        </h2>
      </div>

      <div className="md:absolute right-5 top-8 mb-10 md:mr-24">
        <button onClick={() => slider?.current?.slickPrev()} className="btn p-2 rounded-full ml-5"><FaAngleLeft className="w-8 h-8 p-2"/></button>
        <button onClick={() => slider?.current?.slickNext()} className="btn p-2 rounded-full ml-5 bg-green"><FaAngleRight className="w-8 h-8 p-2 "/></button>
      </div>

      <Slider ref={slider} {...settings} className="overflow-hidden mt-10 space-x-5 items-center mx-auto">
        {recipes.map((item, i) => (
          <Cards key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
}

export default SpecialDishes;
