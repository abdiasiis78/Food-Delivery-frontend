import React, { useEffect, useState } from "react";
import Cards from "../../components/Home-content/Cards";
import { FaFilter } from "react-icons/fa";
function Menus() {
  const [menu, setMenu] = useState([]);
  const [filtaredItmes, setFiltaredItmes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  //  loding data
  useEffect(() => {
    // fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();

        setMenu(data);
        setFiltaredItmes(data);
      } catch (err) {
        console.log("error fetching", err);
      }
    };

    // invoke fuc
    fetchData();
  }, []);

  //   filterItems
  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFiltaredItmes(filtered);
    setSelectedCategory(category);
  };

  //   show all data
  const showAll = () => {
    setFiltaredItmes(menu);
    setSelectedCategory("all");
  };

  // sorting based on A-Z , Z-A, Low-high pricing

  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filtaredItmes];

    // logic
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFiltaredItmes(sortedItems);
  };

  return (
    <div>
      {/* menu Banner section */}
      <div
        className="bg-gradient-to-r from-[#fafafa] from-0% to-[#fcfcfc] to-100%"
        id="section-container"
      >
        <div className="py-48 flex flex-col  justify-center items-center gap-8">
          {/* texts */}
          <div className=" text-center space-y-7 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug ">
              For the Love of Delicious <span className="text-green">Food</span>
            </h2>
            <p className="text-[#4A4A4A] text-xl md:w-4/5 mx-auto">
              Come with family & feel the joy of mouthwatering food such as
              Greek Salad, Lasagne, Butternut Pumpkin, Tokusen Wagyu, Olivas
              Rellenas and more for a moderate cost
            </p>
            <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* menu shop section */}
      <div className="section-container">
        {/* filtering and sorting */}
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between md:items-center space-y-3 mb-8">
          {/* all category btns */}
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap py-4">
            <button
              onClick={showAll}
              className={selectedCategory == "all" ? "active" : ""}
            >
              All
            </button>
            <button
              onClick={() => filterItems("salad")}
              className={selectedCategory == "salad" ? "active" : ""}
            >
              Salad
            </button>
            <button
              onClick={() => filterItems("pizza")}
              className={selectedCategory == "pizza" ? "active" : ""}
            >
              Pizza
            </button>
            <button
              onClick={() => filterItems("soup")}
              className={selectedCategory == "soup" ? "active" : ""}
            >
              Soups
            </button>
            <button
              onClick={() => filterItems("dessert")}
              className={selectedCategory == "dessert" ? "active" : ""}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems("drinks")}
              className={selectedCategory == "drinks" ? "active" : ""}
            >
              Drinks
            </button>
          </div>

          {/* sorting based on filtering */}
          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-red p-2">
              <FaFilter className="h-4 w-4 text-white" />
            </div>

            {/* sorting options */}
            <select
              name="sort"
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-red text-white px-2 py-1 rounded-sm"
            >
              <option value="default">default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to high</option>
              <option value="high-to-low">High tolow</option>
            </select>
          </div>
        </div>

        {/* product card */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:gap-4 grid-cols-1 mx-auto gap-4 p-3">
          {filtaredItmes.map((item) => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menus;
