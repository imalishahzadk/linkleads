import { Link } from "react-router-dom";
import React from "react";
import { IoMdClose } from "react-icons/io";
import DashboardIcon from "../../assets/dashboardIcon.svg";
import MyPageIcon from "../../assets/myPage.svg";
import PageEditorIcon from "../../assets/editPage.svg";
import LeadMagnetIcon from "../../assets/leadMgnt.svg";
import ProductsIcon from "../../assets/products.svg";
import AnalyticsIcon from "../../assets/analytics.svg";
import FeedbackIcon from "../../assets/feedback.svg";
import SupportIcon from "../../assets/support.svg";

const SidebarForMobile = ({ openMenu, setOpenMenu }) => {
  const data = [
    { src: DashboardIcon, text: "Dashboard", to: "/dashboard" },
    { src: MyPageIcon, text: "My Page", to: "/my-page" },
    { src: PageEditorIcon, text: "Page Editor", to: "/page-editor" },
    { src: LeadMagnetIcon, text: "Lead Magnet", to: "/lead-magnet" },
    { src: ProductsIcon, text: "Products", to: "/products" },
    { src: AnalyticsIcon, text: "Analytics", to: "/analytics" },
    { src: FeedbackIcon, text: "Feedback", to: "/feedback" },
    { src: SupportIcon, text: "Support", to: "/support" },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 transition-transform ${
        openMenu ? "transform translate-x-0" : "transform -translate-x-full"
      } w-[70%] sm:w-4/4 md:w-2/4 bg-primary z-50 text-white duration-300 ease-in-out `}
    >
      <div className="flex items-end justify-end p-3">
        <div>
          <IoMdClose
            onClick={() => setOpenMenu(false)}
            className="h-9 w-9 cursor-pointer"
          />
        </div>
      </div>
      <div className="px-4 py-10 space-y-5 md:space-y-5 text-lg sm:text-2xl font-medium">
        {data.map(({ src, text, to }) => (
          <Link
            onClick={() => setOpenMenu(false)}
            key={to}
            to={to}
            className="flex items-center gap-3 duration-200 hover:text-white"
          >
            <img src={src} alt={text} className="h-6 w-6 inline-block" />
            {text}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SidebarForMobile;
