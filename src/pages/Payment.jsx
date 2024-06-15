import UserIcon from "../assets/userPic.svg";
import MasterCardSVG from "../assets/mastercard.svg"
import TroyImg from "../assets/troy.png"
import InfoSVG from "../assets/info.svg";
import ZapSVG from "../assets/zap.svg";
import LinkSVG from "../assets/Link.svg";
import ShareSVG from "../assets/share.svg";
import AISVG from "../assets/aisvg.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircleCheck from "../assets/circleCheck.svg";
import Dashboard2SVG from "../assets/dashboard2.svg";
import ShoppingBasket from "../assets/shoppingBasket.svg";
import StoreSVG from "../assets/store.svg";
import WeightSVG from "../assets/weight.svg";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import ChatBot from "../components/ChatBox/ChatBox";
import NewLinkModel from "../components/Models/NewLink";
import CategoryModal from "../components/Models/Category";
import NewStoreModel from "../components/Models/NewStore";
import CancelSVG from "../assets/cancel.svg";
import Achievment from "../components/Achievement/Achievement";
import PricingSection from "../components/PricingSection/PricingSection";
import LineGraph from "../components/LineGraph/LineGraph";
import Loading from "../components/Loading/Loading"
import { CiCreditCard1 } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { TbBrandVisa } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const Dashboard = () => {
  const [openCategoryModel, setOpenCategoryModel] = useState(false);
  const [openStoreModel, setOpenStoreModel] = useState(false);
  const [openLinkModel, setOpenLinkModel] = useState(false);
  const [openAIModel, setOpenAIModel] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [clicks, setclicks] = useState(0);
  const [views, setViews] = useState(0);
  const [ctr, setCtr] = useState(0);
  const [graph, setGraph] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);

  useEffect(() => {
    // Simulate initial loading time
    const initialLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setShouldRenderUI(true);
    }, 1000);
    // Cleanup function to clear timeout
    return () => clearTimeout(initialLoadingTimeout);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/dashboard", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Data received:", response.data);

        if (response.status === 200) {
          setName(response.data.name);
          setUsername(response.data.username);
          setGraph(response.data.graph);
          setclicks(response.data.clicks);
          setViews(response.data.views);
          setCtr(response.data.ctr);
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
    <div className="dashboard-container">
      <div className="content-container">
        <div className="mt-2 mb-2 font-semibold text-[20px] text-black/70">
          <h1>Start Your Free Trial</h1>
        </div>
        <div className="section-container mt-5">
          <div className="section-header flex items-center">
            <h5 className='font-semibold'>Dashboard</h5>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>


       <div className="dashboard-container">
            <div className="content-container">
            <div className="mt-2 mb-2 font-semibold text-[20px] text-black/70">
                <h1>Payment Method</h1>
              </div>
              <div className="section-container mt-5">
                <div className="section-header">
                  <h5 className=' head1 font-semibold'>Dashboard</h5>
                </div>
          </div>
         </div>
       </div>

       <div className="dashboard-container">
            <div className="content-container">
              <div className="section-container1 mt-1 grid grid-cols-1 md:grid-cols-5 gap-5">
                <div className="section-header1">
                  <h5 className=' check-icon font-semibold text-[20px]'><FaCheckCircle/></h5>
                  <h5 className=" text-[30px] mt-5"><CiCreditCard1/></h5>
                </div>
                <div className="section-header1">
                  <h5 className='font-semibold text-black/60'>Bank</h5>
                  <h5 className='font-semibold text-black/80'>Bank of America</h5>
                </div>
                <div className="section-header1">
                  <h5 className='font-semibold text-black/60'>Last Four Digits</h5>
                  <h5 className='font-semibold text-black/80'>1234</h5>
                </div>
                <div className="section-header1">
                  <h5 className='font-semibold text-black/60'>Name on Card</h5>
                  <h5 className='font-semibold text-black/80'>Hizir Kocaman</h5>
                </div>
                <div className="section-header1">
                  <h5 className='font-semibold text-black/60'>Expiration Date</h5>
                  <h5 className='font-semibold text-black/80'>12/34</h5>
                </div>
          </div>
         </div>
       </div>

       <div className="card-fields mt-10 p-8" style={{ display: 'flex', alignItems: 'center' }}>
    <label className="radio-label mb-5">
        <input type="radio" name="card-type" className="radio-input"/>
        <span className="radio-custom"></span>
    </label>
    <div className="credit-card-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <h1 className="ml-5 font-semibold text-black/80">Add New Card</h1>
        <i className="icon">
            <TbBrandVisa />
        </i>
    </div>
</div>







        </div>

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
            <img src={UserIcon} width={60} alt="" />
            <p>@harrison123</p>
            <Button
              text="Customize Page"
              className="flex items-center gap-1 border border-gray-300 px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
            />
            <h3 className="w-full flex my-3 font-medium text-lg">
              Achievements
              <img
                onClick={() => setIsPopupOpen(!isPopupOpen)}
                src={InfoSVG}
                className="ml-5 cursor-pointer"
                alt=""
              />
            </h3>
            {isPopupOpen && (
              <div className="absolute left-52 transform -translate-x-1/2 top-44 mt-1 w-72 bg-red-200 border border-gray-300 rounded-lg shadow-lg z-10">
                <div className="w-0 h-0 border-l-[18px] border-l-transparent border-b-[20px] border-b-[#D4DEFF] border-r-[18px] border-r-transparent absolute bottom-full left-[75px] transform -translate-x-1/3"></div>
                <div className="p-7 bg-[#D4DEFF]">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-medium">Achievements</span>
                    <span onClick={() => setIsPopupOpen(false)}>
                      <img src={CancelSVG} alt="" />
                    </span>
                  </div>
                  <p className="mt-4 text-gray-400">
                    In this section you'll find common tasks to improve your
                    pages
                  </p>
                </div>
              </div>
            )}
            {/* Achievment Cards */}
            <div className="achievements flex flex-col gap-4 w-full">
              <Achievment
                checked={true}
                title="Categorizer"
                subtitle="3 / 3"
                progress={100}
                points={10}
              />
              <Achievment
                checked={true}
                title="Basic Links"
                subtitle="6 / 6"
                progress={50}
                points={10}
              />
              <Achievment
                title="Lead Email Collector"
                subtitle="0 / 10"
                progress={0}
                points={0}
              />
              <Achievment
                title="Profile Completeness"
                subtitle="50 / 100"
                progress={60}
                points={50}
              />
              <Achievment
                title="Lead Magnet views"
                subtitle="0 / 1000"
                progress={80}
                points={80}
              />
              <Achievment
                title="Store Product views"
                subtitle="0 / 1000"
                progress={0}
                points={0}
              />
            </div>
          </div>
        </div>
        
        <CategoryModal
          openCategoryModel={openCategoryModel}
          onClose={() => setOpenCategoryModel(false)}
        />
        <NewStoreModel
          openStoreModel={openStoreModel}
          onClose={() => setOpenStoreModel(false)}
        />
        <NewLinkModel
          openLinkModel={openLinkModel}
          onClose={() => setOpenLinkModel(false)}
        />
      </div>
      <div className="">
        <ChatBot />
      </div>
      </>
      )}
    </>
  );
};

export default Dashboard;
