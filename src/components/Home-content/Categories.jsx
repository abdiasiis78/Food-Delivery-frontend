
import React from "react";

function Categories() {

    const categoryItems = [
        {id: 1, title: "Main Dish", despriction: "(86 dishes)", image: "/images/home/category/img1.png"},
        {id: 2, title: "Break Fast", despriction: "(12 break fast)", image: "/images/home/category/img2.png"},
        {id: 3, title: "Dessert", despriction: "(48 dessert)", image: "/images/home/category/img3.png"},
        {id: 4, title: "Browse All", despriction: "(255 Items)", image: "/images/home/category/img4.png"}
    ]

  return (
    <div className="py-16" id="section-container">
      <div className="text-center">
        <p className="" id="subtitle">Customer Favorites</p>
        <h2 className="" id='title'>Popular Catagories</h2>
      </div>

      {/* categories */}

       <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around">
           {
            categoryItems.map((item) =>(
                <div key={item.id} className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all">
                  <div className="flex w-full mx-auto items-center justify-center">
                    <img src={item.image} alt="" className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28" />
                  </div>
                  <div className="mt-5 space-y-2">
                    <h5>{item.title}</h5>
                    <p>{item.despriction}</p>
                  </div>
                </div>
             ) )
           }

       </div>

    </div>
  );
}

export default Categories;
