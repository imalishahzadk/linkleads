import InstaSVG from "assets/insta1.svg";
import XSVG from "assets/x1.svg";
import DribbleSVG from "assets/dribble1.svg";
import UserPic from "assets/template3user.jpeg";
import UserIcon from "assets/userPic.svg";
import AISVG from "assets/aisvg.svg";
import ChatBot from "../components/ChatBox/ChatBox";
import ZapSVG from "assets/zap.svg";
import LinkSVG from "assets/Link.svg";
import ShareSVG from "assets/share.svg";
import TemplateCover from "assets/template3cover.jpeg";
import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import PricingSection from "../components/PricingSection/PricingSection";
import Loading from "../components/Loading/Loading";
import CategorySVG from "assets/category.svg";
import SMSSVG from "assets/sms.svg";
import { FaChevronDown } from "react-icons/fa6";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import FacebookSVG from "assets/facebook.svg";
import LinkedInSVG from "assets/linkedin.svg";
import Template1Wsidebar from "components/Templates/Template1Wsidebar.jsx";
import Template2Wsidebar from "components/Templates/Template2Wsidebar.jsx";
import Template3Wsidebar from "components/Templates/Template3Wsidebar.jsx";
import Template4Wsidebar from "components/Templates/Template4Wsidebar.jsx";
import Template5Wsidebar from "components/Templates/Template5Wsidebar.jsx";

const EditTemplate = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [openAIModel, setOpenAIModel] = useState(false);
  const [data, setData] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const [templateId, setTemplateId] = useState(1);

  useEffect(() => {
    setTemplateId(searchParams.get("id"));
    const fetchData = async () => {
      try {
        const response = await axios.get("/user-data", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Data received:", response.data);

        if (response.status === 200) {
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
          setShouldRenderUI(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <>
          <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">
            <div className="flex-grow bg-[#f6f7fa] px-2 lg:px-16 pt-10">
              {/* Top Navbar, Buttons */}
              <div className="flex flex-col md:flex-row justify-between items-center pb-5">
                <h3 className="text-2xl font-medium">My Page</h3>
                <div className="flex gap-5">
                  <button>
                    <img src={LinkSVG} alt="" />
                  </button>

                  <Button
                    text="Share"
                    src={ShareSVG}
                    className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-white"
                  />
                  <Button
                    text="0/20 Credits"
                    className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-[#28439D1A]"
                  />
                  <Button
                    onClick={() => setShowPopup(true)}
                    text="Upgrade"
                    src={ZapSVG}
                    className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
                  />
                  {showPopup && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                      <div className="bg-white rounded-lg">
                        <PricingSection setShowPopup={setShowPopup} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* {load template here} */}
              {/* <Template3Wsidebar></Template3Wsidebar> */}

              {templateId == 1 && <Template1Wsidebar data={data} />}
              {templateId == 2 && <Template2Wsidebar data={data} />}
              {templateId == 3 && <Template3Wsidebar data={data} />}
              {templateId == 4 && <Template4Wsidebar data={data} />}
              {templateId == 5 && <Template5Wsidebar data={data} />}

              <div className="flex flex-col md:flex-row justify-between items-center pb-5 mt-5">
                <h3 className="text-2xl font-medium"></h3>
                <div className="flex gap-5">
                  <Button
                    text="Change Template"
                    className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-3 rounded-full font-bold text-xs bg-white"
                  />
                  <Button
                    text="Manage Page"
                    className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
                  />
                </div>
              </div>
            </div>

            {/* right sidebar */}

            <div className="w-full lg:w-[350px] p-5 bg-white">
              <div
                onClick={() => setOpenAIModel(!openAIModel)}
                className="flex justify-end"
              >
                <button className="shadow-icon p-3">
                  <img src={AISVG} alt="" />
                </button>
              </div>
              <div className="flex flex-col gap-3 items-center relative">
                <img src={UserIcon} width={60} height={60} alt="" />
                <p>@{data.username}</p>

                {/* Achievment Cards */}
                <div className="flex flex-col justify-center gap-y-6 mx-5 w-full mt-5">
                  <div className="flex items-center justify-between gap-3 border border-gray-200 border-2 p-2 rounded-2xl cursor-pointer">
                    <div className="flex items-center gap-2">
                      <img src={CategorySVG} alt="" />
                      <p>Modify Template</p>
                    </div>
                    <FaChevronDown className="mr-2" />
                  </div>
                  <div className="flex items-center gap-3 border border-gray-200 border-2 p-2 rounded-2xl cursor-pointer">
                    <img src={CategorySVG} alt="" />
                    <p>Explore the Category</p>
                  </div>
                  <div className="flex items-center gap-3 border border-gray-200 border-2 p-2 rounded-2xl cursor-pointer">
                    <img src={SMSSVG} alt="" />
                    <p>Explore the Store</p>
                  </div>
                  <div className="flex items-center justify-between gap-3 border border-gray-200 border-2 p-2 rounded-2xl cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div class="column">
                        <img src={CategorySVG} alt="" />
                      </div>
                      <div class="column">
                        <p>Buy Credits</p>
                        <p className="text-[13px] mt-3 text-black/80">
                          Available: 16
                        </p>
                        <a href="#" className="text-primary underline">
                          Buy Credits
                        </a>
                      </div>
                    </div>

                    <FaChevronDown className="mr-2" />
                  </div>
                </div>
              </div>
            </div>
            {/* right sidebar ends */}
          </div>
          <div className="">
            <ChatBot />
          </div>
        </>
      )}
    </>
  );
};

export default EditTemplate;
