import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import DashboardIcon from "../../assets/dashboardIcon.svg";
import MyPageIcon from "../../assets/myPage.svg";
import PageEditorIcon from "../../assets/editPage.svg";
import LeadMagnetIcon from "../../assets/leadMgnt.svg";
import ProductsIcon from "../../assets/products.svg";
import AnalyticsIcon from "../../assets/analytics.svg";
import FeedbackIcon from "../../assets/feedback.svg";
import SupportIcon from "../../assets/support.svg";

const Sidebar = (props) => {
  const { pathname } = useLocation();
  const [activeItem, setActiveItem] = useState(null);
  const [sidebarHeight, setSidebarHeight] = useState(window.innerHeight);

  const data = [
    { src: DashboardIcon, text: "Dashboard", to: "/dashboard" },
    { src: MyPageIcon, text: "My Page", to: "/my-page" },
    { src: PageEditorIcon, text: "Page Editor", to: "/page-editor" },
    { src: LeadMagnetIcon, text: "Lead Magnet", to: "/lead-magnet" },
    { src: ProductsIcon, text: "Store", to: "/store" },
    { src: AnalyticsIcon, text: "Analytics", to: "/analytics" },
    { src: FeedbackIcon, text: "Feedback", to: "/feedback" },
    { src: SupportIcon, text: "Support", to: "/support" },
  ];

  const handleClick = (index) => {
    setActiveItem(index);
  };

  useEffect(() => {
    const updateSidebarHeight = () => {
      setSidebarHeight(window.innerHeight);
    };

    window.addEventListener("resize", updateSidebarHeight);

    return () => window.removeEventListener("resize", updateSidebarHeight);
  }, []);

  return (
    <>
      <div
        className="w-20 bg-[#10277C] flex flex-col items-center fixed"
        style={{ height: sidebarHeight }}
      >
        <Link to="/dashboard">
          <img src={Logo} width={45} alt="" className="my-20" />
        </Link>
        {data.map((item, index) => (
          <Link
            to={item.to}
            key={index}
            className={`flex flex-col items-center justify-center cursor-pointer py-3 ${
              activeItem === index
                ? "bg-transparent text-white"
                : "text-gray-300"
            }`}
            onClick={() => handleClick(index)}
          >
            <div className="mt-2">
              <img src={item.src} alt="" />
            </div>
            <p
              className={`mt-2 text-[10px] ${
                activeItem === index
                  ? "bg-transparent text-white"
                  : "text-gray-300"
              }`}
            >
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
