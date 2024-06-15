import React, { useState } from "react";
import AddIcon from "../../assets/addItem.svg";
import ProductCard from "../ProductCard/ProductCard";
import ShirtSVG from "../../assets/shirt.svg";
import EditSVG from "../../assets/editIcon.svg";
import DeleteSVG from "../../assets/deleteIcon.svg";

const StoreItem = ({ icon, title, onClickHandler }) => {
  const [productSelected, setProductSelected] = useState(false);
  const [showProductCard, setShowProductCard] = useState(false);

  const handleSelect = () => {
    setProductSelected(true);
    onClickHandler();
  };

  const handleAddProduct = () => {
    setShowProductCard(true); // Show ProductCard when Add Product button is clicked
  };

  return (
    <>
      {/* 2nd step */}
      {!showProductCard && (
        <>
          {!productSelected ? (
            <div className="py-5 md:py-10 w-[70%] !h-auto flex flex-col items-center justify-center bg-white rounded-xl shadow md:w-[321px] md:h-[340px] border border-gray-200">
              <img src={icon} alt="" style={{ height: "80px" }} />
              <p className="text-center text-lg md:text-2xl font-medium my-2 md:my-3">
                {title}
              </p>
              <button
                onClick={handleSelect}
                className={`${
                  title === "Simple Store" || title === "Amazon"
                    ? "!bg-white !text-black"
                    : ""
                } mt-2 md:mt-4 flex items-center text-white bg-primary border border-gray-300 px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs hover:bg-[#3855b3da] duration-300`}
              >
                Select
              </button>
            </div>
          ) : (
            <div className="p-5 w-[70%] flex flex-col items-center justify-center bg-white rounded-xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[413px] md:h-[413px] border border-gray-200">
              <img src={AddIcon} alt="" />
              <p className="text-center text-lg md:text-2xl font-medium my-2 md:my-3">
                No Products created yet
              </p>
              <p className="text-center text-sm md:text-base font-normal text-black/50">
                Simply create your first product.
              </p>
              <p className="text-center text-sm md:text-base font-normal text-black/50">
                Just click on the button.
              </p>
              <button
                onClick={handleAddProduct}
                className="mt-2 md:mt-4 flex items-center text-white px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-[#3855B3] hover:bg-[#3855b3da] duration-300"
              >
                + Add Product
              </button>
            </div>
          )}
        </>
      )}

      {/* Conditionally render ProductCard */}
      {showProductCard && (
        <ProductCard
          imageUrl={ShirtSVG}
          productName="Short Sleeve T-Shirt"
          price={200}
          decimalPoint={50}
          EditSVG={EditSVG}
          DeleteSVG={DeleteSVG}
        />
      )}
    </>
  );
};

export default StoreItem;
