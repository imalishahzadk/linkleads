import React, { useState } from "react";
import Button from "../components/Button/Button";
import UserSVG from "../assets/userPic.svg";
import CategorySVG from "../assets/category.svg";
import filSVG from "../assets/file.svg";
import SMSSVG from "../assets/sms.svg";
import SimpleStoreSVG from "../assets/simpleStore.svg";
import { FaChevronDown } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ScanEye from "../assets/scanEye.svg";

const CustomizeProductEmail = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <div className="ml-4 mt-1 flex flex-col lg:flex-row gap-10 justify-between">
      {/* right side div */}
      <div className="w-full">
        {/* banner */}
        <div className="bg-gray-100 p-5 md:p-10 md:h-72 w-full ">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-[#181819E5]">
              Customize your Product Emails
            </p>
            <img src={ScanEye} alt="" className="p-3 shadow-icon" />
          </div>

          <p className="my-6 text-base leading-5 text-[#18181992]">
            {`Tailor the emails sent to users who sign up for this element (link
            or lead magnet). Add a`}
            <br />
            {`custom image, additional links, and adjust size, color, and appearance. Utilize placeholders like`}
            <br />
            {"{{ name }}"} {`for personalized content.`}
          </p>

          <p className="my-6 text-base leading-5 text-[#18181992]">
            Ensure URLs are valid (starting with http:// or https://)
          </p>

          <Button
            text="+ Generate with AI"
            className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-normal text-xs bg-primary text-white"
          />
        </div>

        {/* md editor */}
        <div className="my-5 mx-10">
          <SimpleMDE />
        </div>
      </div>

      {/* left side div */}
      <div className="md:w-[500px] bg-white">
        {/* profile */}
        <div className="flex flex-col items-center justify-center my-10">
          <div class="relative py-2">
            <div class="absolute top-28 right-3">
              <p class="flex h-2 w-2 items-center justify-center rounded-full bg-primary p-3 text-xs text-white">
                5
              </p>
            </div>
            <img src={UserSVG} alt="" className="object-cover w-32 h-32" />
          </div>
          <p className="text-2xl font-medium my-3">Harrison Philips</p>
          <p className="text-gray-700">16/20 Credits used</p>
        </div>
        <p className="text-xl mx-10 my-5 font-medium">
          Products: Plants Trouser
        </p>
        <div className="flex flex-col justify-center gap-y-6 mx-5">
          <div
            onClick={() => navigate("/customize-lead-magnet")}
            className="flex items-center gap-3 p-2 rounded-2xl cursor-pointer"
          >
            <img src={filSVG} alt="" />
            <p>Customize Landing Page</p>
          </div>
          <div className="flex items-center gap-3 border border-gray-500 p-2 rounded-2xl cursor-pointer">
            <img src={SMSSVG} alt="" />
            <p>Customize Emails</p>
          </div>
          <div
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <img src={CategorySVG} alt="" />
              <p>Catogries</p>
            </div>
            <FaChevronDown className="mr-2" />
          </div>
          {categoriesOpen && (
            <div className="flex items-center gap-3 -mt-3">
              <div className="border border-gray-200 px-8 py-8 rounded-2xl">
                <img
                  src={SimpleStoreSVG}
                  alt=""
                  className="w-10 mx-auto my-3"
                />
                <div className="text-gray-500">Category 1</div>
              </div>
              <div className="border border-gray-200 px-8 py-8 rounded-2xl">
                <img
                  src={SimpleStoreSVG}
                  alt=""
                  className="w-10 mx-auto my-3"
                />
                <div className="text-gray-500">Category 2</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomizeProductEmail;
