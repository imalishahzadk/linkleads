import React, { useState } from "react";

const imgStylee = {
    width: '100%',
    height: '200px',
    maxWidth: '280px',
    borderRadius: '8px'
};


const paraStyle = {
    marginRight: "190px",
    fontSize: '26px'
};

const SelectVideoItems = ({ icon, title, duration, onClickHandler }) => {
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
                <div className="py-5 md:py-10 w-[70%] !h-auto flex flex-col items-center justify-center bg-white rounded-xl shadow md:w-[350px] md:h-[340px] border border-gray-200">
                        <img src={icon} alt="" className="rounded-md border border-gray-300 border-4" style={imgStylee} />
                    <div className="flex justify-center">
                        <p className="text-left text-[16] md:text-1xl font-medium my-2 md:my-3 mr-16">
                            {title}
                        </p>
                    </div>
                    <div className="text-primary" style={paraStyle}>
                        <p>
                            <sup>$</sup>200.<sup>50</sup>
                        </p>
                    </div>


                    <button
                        onClick={handleSelect}
                        className={`${
                            title === "Simple Store" || title === "Amazon"
                                ? "!bg-white !text-black"
                                : ""
                            } mt-2 md:mt-10 flex items-center text-white bg-primary h-14 w-40 border border-gray-300 px-3 md:px-12 py-2 rounded-full font-normal text-sm md:text-lg hover:bg-[#3855b3da] duration-300`}
                    >
                        Select
                    </button>
                </div>
            )}
        </>
    );
};

export default SelectVideoItems;
