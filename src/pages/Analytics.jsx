// import React, { useState, useEffect } from 'react';
// import LineGraph from '../components/LineGraph/LineGraph';
// import { Card1, Card2, Card3, Card4, Card5 } from "./Cards";
// import "./analytics.css";
// import { FaShare, FaArrowCircleUp, FaLink } from 'react-icons/fa';
// import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
// import Loading from '../components/Loading/Loading';

// const Analytics = () => {
//   const [isGraph1Open, setIsGraph1Open] = useState(true);
//   const [isGraph2Open, setIsGraph2Open] = useState(true);
//   const [isLoading, setIsLoading] = useState(true);
//   const [shouldRenderUI, setShouldRenderUI] = useState(false);


//   useEffect(() => {
//     // Simulate initial loading time
//     const initialLoadingTimeout = setTimeout(() => {
//       setIsLoading(false);
//       setShouldRenderUI(true);
//     }, 1000);
//     // Cleanup function to clear timeout
//     return () => clearTimeout(initialLoadingTimeout);
//   }, []);

//   const toggleGraph1 = () => {
//     setIsGraph1Open(!isGraph1Open);
//   };

//   const toggleGraph2 = () => {
//     setIsGraph2Open(!isGraph2Open);
//   };

//   return (
//     <>
//           {isLoading && <Loading />}
//       {shouldRenderUI && (
//         <>
//     <div className="dashboard-container">
//       {/* Content */}
//       <div className="content-container">
//         <div className="header">
//           <h1>My Page</h1>
//           <div className='icon'>
//             <FaLink />
//           </div>
//           <div className="buttons">
//             <button className="circular-button1">
//               <FaShare />
//               <span>Share</span>
//             </button>
//             <button className="circular-button2">
//               <span>0/20 Credits</span>
//             </button>
//             <button className="circular-button3">
//               <FaArrowCircleUp />
//               <span>Upgrade</span>
//             </button>
//           </div>
//         </div>
//         <div className="content">
//           {/* Cards Section */}
//           <div className="cards-section">
//             <div className="left-cards">
//               <Card1 />
//               <Card2 />
//               <Card3 />
//               <Card4 />
//               <Card5 />
//             </div>
//           </div>
//           {/* First Graph Section */}
//           <div className="section-container">
//             <LineGraph />
//           </div>
//           <div className="header1">
//             <h1>My Links</h1>
//           </div>
//           {/* Second Graph Section */}
//           <div className="section-container1">
//             <div className="section-header">
//               <h5 className='font-semibold'>Dashboard
//               </h5>
//               <button className="section-button" onClick={toggleGraph1}>
//                 {isGraph1Open ? <IoIosArrowDown /> : <IoIosArrowUp />}
//               </button>
//             </div>
//           </div>
//           <div className={`section-container2 ${isGraph1Open ? "open" : ""}`}>
//             <LineGraph />
//           </div>
//           <div className="header1">
//             <h1>My Lead Magnets</h1>
//           </div>
//           <div className="section-container1">
//             <div className="section-header">
//               <h5 className="font-semibold">Ebooks</h5>
//               <button className="section-button" onClick={toggleGraph2}>
//                 {isGraph2Open ? <IoIosArrowDown /> : <IoIosArrowUp />}
//               </button>
//             </div>
//           </div>
//           <div className={`section-container2 ${isGraph2Open ? "open" : ""}`}>
//             <LineGraph />
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//       )}
//     </>
//   );
// };

// export default Analytics;

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

import "./analytics.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

import GraphicProgressionSVG from "../assets/graphic-progression.svg"
import GraphSVG from "../assets/graph.svg"
import ClickSVG from "../assets/click.svg"
import ZapSVG from "../assets/zap.svg";
import LinkSVG from "../assets/Link.svg";
import ShareSVG from "../assets/share.svg"
import EyeSVG from "../assets/eye.svg";
import AISVG from "../assets/aisvg.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircleCheck from "../assets/circleCheck.svg";
import Dashboard2SVG from "../assets/dashboard2.svg";
import Button from "../components/Button/Button";
import Card from "../components/CardAnalytics/CardAnalytics";
import ChatBot from "../components/ChatBox/ChatBox";
import NewLinkModel from "../components/Models/NewLink";
import CategoryModal from "../components/Models/Category";
import NewStoreModel from "../components/Models/NewStore";
import CancelSVG from "../assets/cancel.svg";
import Achievment from "../components/Achievement/Achievement";
import PricingSection from "../components/PricingSection/PricingSection";
import LineGraph from "../components/LineGraph/LineGraph";
import Loading from "../components/Loading/Loading"
// import 'bootstrap/dist/css/bootstrap.min.css';

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
  const [isGraph1Open, setIsGraph1Open] = useState(true);
  const [isGraph2Open, setIsGraph2Open] = useState(true);

  const toggleGraph1 = () => {
    setIsGraph1Open(!isGraph1Open);
  };
  
  const toggleGraph2 = () => {
    setIsGraph2Open(!isGraph2Open);
  };
  
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
          {/* Top Navbar, Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center pb-5">
            <h3 className="text-2xl font-medium mb-5"></h3>
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-5 mb-10">
          {/* <div className='green-bg'> */}
            <Card
              icon={Dashboard2SVG}
              title="3"
              subtitle="Category Count"
              subtitle1="11%"
            />
            {/* </div> */}


            <Card
              icon={EyeSVG}
              title="5K"
              subtitle="Total Views"
              subtitle1="11%"
            />
            <Card
              icon={EyeSVG}
              title="5K"
              subtitle="Unique Views"
              subtitle1="11%"
            />
            <Card
              icon={ClickSVG}
              title="1,345"
              subtitle="Total Clicks"
              subtitle1="11%"
            />
            <Card
              icon={GraphSVG}
              title="20.00%"
              subtitle="CTR"
              link="/store"
              subtitle1="11%"
            />
          </div>

          {/* Line Graph */}
          <LineGraph />
          <div className="dashboard-container">
            <div className="content-container">
            <div className="mt-2 mb-2 font-semibold text-[20px] text-black/70">
                <h1>My Links</h1>
              </div>
              <div className="section-container">
                <div className="section-header">
                  <h5 className='font-semibold'>Dashboard</h5>
                  <button className="section-button" onClick={toggleGraph1}>
                    {isGraph1Open ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </button>
                </div>
          </div>
         </div>
       </div>
<div className={`section-container2 ${isGraph1Open ? "" : "closed"}`}>
  <LineGraph />
</div>      
          <div className="dashboard-container">
            <div className="content-container">
              <div className="mt-2 mb-2 font-semibold text-[20px] text-black/70">
                <h1>My Lead Magnets</h1>
              </div>
              <div className="section-container">
                <div className="section-header">
                  <h5 className='font-semibold'>Ebooks</h5>
                  <button className="section-button" onClick={toggleGraph2}>
                {isGraph2Open ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </button>
                </div>
          </div>
         </div>
       </div>
       <div className={`section-container2 ${isGraph2Open ? "" : "closed"}`}>
  <LineGraph />
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
