import React, { useState } from "react";
import UserSVG from "../assets/userPic.svg";
import Tabs from "../components/Tabs/ProductTabs";
import CategorySVG from "../assets/category.svg";
import filSVG from "../assets/file.svg";
import SMSSVG from "../assets/sms.svg";
import SimpleStoreSVG from "../assets/simpleStore.svg";
import { FaChevronDown } from "react-icons/fa6";
import Banner from "../components/Banner/Banner";
import { useNavigate } from "react-router-dom";
import TurtleSVG from "../assets/Turtle.svg";

const specialOfferData = {
  title:
    "In-depth guides or reports that provide valuable information on a specific topic relevant to the target audience.",
  discount: "Deep Blue Home",
  image: TurtleSVG,
  buttonText: "Get Access",
};

const CustomizeLeadMagnet = () => {
  const navigate = useNavigate();
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <div className="lg:ml-4 flex flex-col lg:flex-row gap-10 justify-between bg-[#F8F8FA] h-[100vh] w-200">
      {/* right side div */}
      <div className="w-full flex flex-col lg:p-10">
        {/* banner */}
        <Banner />

        {/* tabs */}
        <div className="border border-gray-200 mt-5 rounded-lg">
          <Tabs specialOffer={specialOfferData} />
        </div>
      </div>

      {/* left side div */}
      <div className="md:w-[500px] bg-white h-100">
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
        <p className="text-xl mx-10 my-5 font-medium">Lead Magnet: Ebook</p>
        <div className="flex flex-col justify-center gap-y-6 mx-5">
          <div className="flex items-center gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer">
            <img src={filSVG} alt="" />
            <p>Customize Landing Page</p>
          </div>
          <div
            onClick={() => navigate("/customize-products-email")}
            className="flex items-center gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
          >
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

export default CustomizeLeadMagnet;
