import React, { useState } from "react";

const CategoryItem = ({ selected, icon, title, onClickHandler }) => {
  const [showProductCard, setShowProductCard] = useState(false);

  const handleSelect = () => {
    onClickHandler();
  };

  const handleAddProduct = () => {
    setShowProductCard(true);
  };

  return (
    <div className="py-5 md:py-10 !w-[220px] !h-auto flex flex-col items-center justify-center bg-white rounded-xl shadow lg:!w-[250px] lg:!h-auto xl:!w-[321px] xl:!h-[340px] border border-gray-200 !overflow-hidden">
      {/* <div className="py-5 md:py-10 w-[70%] !h-auto flex flex-col items-center justify-center bg-white rounded-xl shadow !md:w-[413px] md:h-[413px] border border-gray-200"> */}
      <img src={icon} alt="" style={{height:'150px'}} />
      <p className="text-center text-lg md:text-2xl font-medium my-2 md:my-3">
        {title}
      </p>
      <button
        // className={`${
        //   title === "Workout" || title === "Music"
        //     ? "!bg-white !text-black"
        //     : ""
        // } mt-2 md:mt-4 flex items-center text-white bg-primary border border-gray-300 px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs hover:bg-[#3855b3da] duration-300`}
        className={`${
          !selected
            ? "!bg-white !text-black"
            : ""
        } mt-2 md:mt-4 flex items-center text-white bg-primary border border-gray-300 px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs hover:bg-[#3855b3da] duration-300`}
        onClick={handleSelect}
      >
        Select
      </button>
    </div>
  );
};

export default CategoryItem;
