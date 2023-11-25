import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';

function Cards({ item }) {
    const [isHeartFiltered, setIsHeartFiltered] = useState(false);

    const heartHandle = () => {
        setIsHeartFiltered(!isHeartFiltered);
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl relative">
            <div className={`absolute rating gap-1 right-2 top-2 p-4 heartStar bg-green ${isHeartFiltered ? "text-red" : "text-white"}`}>
                <FaHeart className="h-5 w-5 cursor-pointer" onClick={heartHandle} />
            </div>

            <Link to={`/menu/${item._id}`}>
                <figure>
                    <img
                        src={item.image}
                        alt="image"
                        className="hover:scale-105 transition-all duration-200 md:h-72"
                    />
                </figure>
            </Link>

            <div className="card-body">
            <Link to={`/menu/${item._id}`}> <h2 className="card-title">{item.name}</h2></Link>
                <p>Description of the item</p>
                <div className="card-actions justify-between items-center mt-5">
                    <h5 className="font-semibold"><span className="text-sm text-red">$</span>{item.price}</h5>
                    <button className="btn bg-green text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default Cards;
