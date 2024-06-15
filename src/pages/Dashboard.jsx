import UserIcon from "../assets/userPic.svg";
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
import Loading from "../components/Loading/Loading";

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
  const [achievements, setAchievements] = useState({});
  const [dashboardData, setDashboardData] = useState({})

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
          setAchievements(response.data.achievements);
          setDashboardData(response.data);
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
                <h3 className="text-2xl font-medium mb-5">
                  Progress Dashboard
                </h3>
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
                        <PricingSection setShowPopup={setShowPopup}  subscribed={dashboardData.subscribed}/>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="h-[186px] py-[25px] px-[35px] rounded-[20px] bg-primary text-[#FFFFFFB2]">
                  <p className="font-light pb-2 text-base">LINK LEADS</p>
                  <div className="flex justify-between items-center mt-1 mb-5">
                    <p className="text-white text-2xl font-medium">
                      Hi, {name}! 👋
                    </p>
                    <img src={UserIcon} width={36} alt="" />
                  </div>
                  <p className="font-light">
                    Here you'll be able to view check your <br />
                    categories, links, lead magnets, and more!
                  </p>
                </div>

                <div className="h-[186px] py-[25px] px-[35px] rounded-[20px] bg-white border-[#E6E7E9] border-2">
                  <p>Date</p>
                  <div className="flex justify-between items-center mt-1 mb-5">
                    <p className="text-2xl font-medium">Overall Progress</p>
                    <div className="shadow-icon p-3">
                      <img src={CircleCheck} width={24} alt="" />
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-2 rounded-lg bg-[#F0F1F2] my-3">
                    <div
                      style={{ width: "20%" }}
                      className="bg-primary rounded-lg h-full"
                    ></div>
                  </div>
                  <p>20/70 Points</p>
                </div>
              </div>

              {/* Line Graph */}
              <LineGraph
                graph={graph}
                clicks={clicks}
                views={views}
                ctr={ctr}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-10">
                <Card
                  icon={Dashboard2SVG}
                  title="My Categories"
                  subtitle="+1 new category"
                  buttonText="+ Add New Category"
                  onClick={() => setOpenCategoryModel(true)}
                  PopupHeading="My categories"
                  PopupText="You can create categories to group related links and lead magnets together. Categories also allow you to guide the user to what they most likely want."
                />

                <Card
                  icon={StoreSVG}
                  title="My Stores"
                  subtitle="+1 new store"
                  buttonText="+ Add New Store"
                  onClick={() => setOpenStoreModel(true)}
                  PopupHeading="My Store"
                  PopupText="You can organize items into categories to group similar products together. Categories help direct customers to the items they are most interested in."
                />
                <Card
                  icon={LinkSVG}
                  title="My Links"
                  subtitle="+1 new link"
                  buttonText="+ Add New Link"
                  onClick={() => setOpenLinkModel(true)}
                  PopupHeading="My links"
                  PopupText="Here you can create links to anything you want to highlight on your page."
                />
                <Card
                  icon={WeightSVG}
                  title="My Lead Magnets"
                  subtitle="+1 new lead"
                  buttonText="+ Add New Lead"
                  PopupHeading="Lead Magnet"
                  PopupText="Here you can create and upload lead magnets. These are files that you may want to share with your users in exchange of them submitting their email address."
                />
                <Card
                  icon={ShoppingBasket}
                  title="My Product"
                  subtitle="+1 new product"
                  link="/store"
                  buttonText="+ Add New Product"
                  PopupHeading="My Products"
                  PopupText="Here, you can create and showcase products that you want to highlight on your page."
                />
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
                <p>@{username}</p>
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
                        <span className="text-xl font-medium">
                          Achievements
                        </span>
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
                    checked={
                      achievements.categories / achievements.total_categories ==
                      1
                    }
                    title="Categorizer"
                    subtitle={
                      achievements.categories +
                      "/" +
                      achievements.total_categories
                    }
                    progress={
                      (achievements.categories /
                        achievements.total_categories) *
                      100
                    }
                    points={10 * achievements.categories}
                  />
                  <Achievment
                    checked={
                      achievements.basic_links /
                        achievements.total_basic_links ==
                      1
                    }
                    title="Basic Links"
                    subtitle={
                      achievements.basic_links +
                      "/" +
                      achievements.total_basic_links
                    }
                    progress={
                      (achievements.basic_links /
                        achievements.total_basic_links) *
                      100
                    }
                    points={10 * achievements.basic_links}
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
