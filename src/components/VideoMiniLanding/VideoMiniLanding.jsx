import React, { useState } from "react";

const VideoMiniLanding = ({ icon, title, onClickHandler }) => {
  const [productSelected, setProductSelected] = useState(false);

  const handleSelect = () => {
    setProductSelected(true);
    onClickHandler();
  };

  return (
    <div className="relative">
      <div className="py-20 md:py-16 !w-[300px] h-[500px] flex flex-col items-center justify-center bg-white rounded-xl shadow lg:!w-[350px] lg:h-[420px] xl:!w-[400px] xl:h-[440px] border border-gray-200 overflow-hidden relative">
        <img
          src={icon}
          alt=""
          className="absolute inset-0 w-full h-full"
        />
        <p className="text-center text-lg md:text-2xl font-medium my-2 md:my-3">
          {title}
        </p>
        <button
            onClick={handleSelect}
            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 flex items-center text-primary bg-white border border-gray-300 px-10 md:px-14 py-2 rounded-md font-normal text-sm md:text-xs hover:bg-grey duration-300`}
            >
            WATCH NOW
        </button>

      </div>
    </div>
  );
};

export default VideoMiniLanding;
