import React, { useState } from "react";

const StoreItem = ({
  icon,
  title,
  price,
  onClickHandler,
  selected = false,
}) => {
  const [productSelected, setProductSelected] = useState(selected);

  const handleSelect = () => {
    // setProductSelected(!productSelected);
    onClickHandler();
  };

  return (
    <>
      <div className="py-5 md:py-10 w-[70%] !h-auto flex flex-col items-center bg-white rounded-xl shadow md:w-[321px] md:h-[340px] border border-gray-200">
        <img src={icon} alt="" className="mb-2" />
        <p className="text-[16px] md:text-1xl font-bold ml-10 text-left w-full px-4">
          {title}
        </p>
        <p className="text-[16px] md:text-2xl ml-10 text-left w-full px-4 text-blue-600">
          {price !== 0 ? `${price}$` : "Free"}
        </p>
        <button
          onClick={handleSelect}
          className={`${
            !selected ? "!bg-white !text-black" : ""
          } mt-2 md:mt-10 flex items-center justify-center text-white bg-primary border border-gray-300 px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs hover:bg-[#3855b3da] duration-300`}
        >
          Select
        </button>
      </div>
    </>
  );
};

export default StoreItem;
