import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faLink,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

import ZapSVG from "assets/zap.svg";
import LinkSVG from "assets/Link.svg";
import ShareSVG from "assets/share.svg";
import TemplateCover from "assets/template1.jpeg";
import UserPic from "assets/userPic.svg";
import InstaSVG from "assets/insta.svg";
import XSVG from "assets/x.svg";
import DribbleSVG from "assets/dribble.svg";
import LinkedInSVG from "assets/linkedin.svg";
import React, { useState, useEffect } from "react";
import Button from "components/Button/Button";
import PricingSection from "components/PricingSection/PricingSection";
import Loading from "components/Loading/Loading";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import FacebookSVG from "assets/facebook.svg";
import Template1 from "components/Templates/Template1";
import Template2 from "components/Templates/Template2";
import Template3 from "components/Templates/Template3";
import Template4 from "components/Templates/Template4";
import Template5 from "components/Templates/Template5";

const PreviewTemplate = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [openAIModel, setOpenAIModel] = useState(false);
  const [data, setData] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const [templateId, setTemplateId] = useState(1);
  const navigate = useNavigate();

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
              {/* {Use templates here} */}
              {templateId == 1 && <Template1 data={data} />}
              {templateId == 2 && <Template2 data={data} />}
              {templateId == 3 && <Template3 data={data} />}
              {templateId == 4 && <Template4 data={data} />}
              {templateId == 5 && <Template5 data={data} />}
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
          </div>
        </>
      )}
    </>
  );
};

export default PreviewTemplate;
