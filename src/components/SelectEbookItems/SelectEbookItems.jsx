import React, { useState } from "react";

const SelectEbookItems = ({ icon, title, onClickHandler }) => {
  const [productSelected, setProductSelected] = useState(false);
  const [showProductCard, setShowProductCard] = useState(false);

  const handleSelect = () => {
    setProductSelected(true);
    onClickHandler();
  };

  const handleAddProduct = () => {
    setShowProductCard(true); 
  };

  return (
    <>
      {/* 2nd step */}
      {!showProductCard && (
        <>
            <div className="py-5 md:py-10 w-[70%] !h-auto flex flex-col items-center justify-center bg-white rounded-xl shadow md:w-[321px] md:h-[340px] border border-gray-200">
            <img src={icon} alt="" className="rounded-md border border-gray-300 border-4" />
              <p className="text-center text-[16] md:text-1xl font-medium my-2 md:my-3">
                {title}
              </p>
              <div className="bg-primary w-20 h-7 rounded-md">
              <p className="text-center text-[16] md:text-1xl font-medium my-1 md:my-1 text-white">
              10.99$
              </p>
              </div>
              <button
                onClick={handleSelect}
                className={`${
                  title === "Simple Store" || title === "Amazon"
                    ? "!bg-white !text-black"
                    : ""
                } mt-2 md:mt-10  flex items-center text-white bg-primary border border-gray-300 px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs hover:bg-[#3855b3da] duration-300`}
              >
                Select
              </button>
            </div>
          
        </>
      )}

    </>
  );
};

export default SelectEbookItems;

