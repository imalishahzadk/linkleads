import React from "react";
import Button from "../Button/Button";
import BannerPicture from "../../assets/bannerPic.svg";

const Banner = () => {
  return (
    <div className="bg-gray-100 p-5 md:p-10 md:h-72 w-full flex items-center justify-between">
      <div>
        <p className="text-2xl text-[#181819E5]">
          Customize your Lead magnet Landing Page
        </p>
        <p className="my-6 text-base leading-5 text-[#18181992]">
          Here, you can enter landing page details to make changes. You can also{" "}
          <br /> resize the preview to see how your page would appear on a
          mobile device.
        </p>
        <Button
          text="+ Generate with AI"
          className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-normal text-xs bg-primary text-white"
        />
      </div>
      <div className="hidden md:flex">
        <img src={BannerPicture} alt="" />
      </div>
    </div>
  );
};

export default Banner;
