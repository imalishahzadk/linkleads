import React, { useState } from "react";
import { Link } from "react-router-dom";
import InfoSVG from "../../assets/info.svg";
import CancelSVG from "../../assets/cancel.svg";

const Card = ({
  icon,
  title,
  subtitle,
  buttonText,
  PopupHeading,
  PopupText,
  onClick,
  link,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const shouldShowPopupOnRight = title === "My Product";

  return (
    <div className="h-[88px] rounded-lg bg-white border border-gray-300 flex justify-between items-center px-2 sm:px-4">
      <div className="flex gap-3 items-center">
        <div className="shadow-icon p-2">
          {icon && <img src={icon} width={24} alt="" />}
        </div>
        <div>
          <p className="text-base font-semibold opacity-80">{title}</p>
          <p className="text-xs font-light text-gray-700">{subtitle}</p>
        </div>
        {PopupHeading && PopupText && (
          <div className="flex cursor-pointer relative mb-4">
  <img
    src={InfoSVG}
    width={20}
    alt=""
    onClick={() => setIsPopupOpen(!isPopupOpen)}
  />
  {isPopupOpen && (
    <div
      className={`absolute ${
        shouldShowPopupOnRight
          ? "left-0 md:left-auto md:right-0 transform translate-x-0 md:transform-none md:translate-x-full md:translate-y-0"
          : "left-0 transform -translate-x-1/2"
      } top-full mt-1 w-72 bg-red-200 border border-gray-300 rounded-lg shadow-lg z-10`}
    >
      {/* Conditional rendering for left side triangle */}
      {shouldShowPopupOnRight ? (
        <>
          <div className="hidden md:flex w-0 h-0 border-t-[18px] border-t-transparent border-r-[20px] border-r-[#D4DEFF] border-b-[18px] border-b-transparent absolute top-1/2 transform -translate-y-1/2 right-full" />
          <div className="md:hidden w-0 h-0 border-l-[18px] border-l-transparent border-b-[20px] border-b-[#D4DEFF] border-r-[18px] border-r-transparent absolute bottom-full left-1/2 transform -translate-x-1/2" />
        </>
      ) : (
        <div className="w-0 h-0 border-l-[18px] border-l-transparent border-b-[20px] border-b-[#D4DEFF] border-r-[18px] border-r-transparent absolute bottom-full left-1/2 transform -translate-x-1/2" />
      )}

      <div className="p-7 bg-[#D4DEFF]">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium">{PopupHeading}</span>
          <span onClick={() => setIsPopupOpen(false)}>
            <img src={CancelSVG} alt="" />
          </span>
        </div>
        <p className="mt-4 text-gray-400">{PopupText}</p>
      </div>
    </div>
  )}
</div>

        )}
      </div>
      <button
        onClick={onClick}
        className="flex items-center gap-1 border border-gray-300 px-3 py-2 md:px-4 md:py-2 rounded-full font-bold text-xs bg-primary hover:bg-[#3855b3da] duration-300 text-white"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
