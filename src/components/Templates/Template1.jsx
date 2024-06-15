import "css/template1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faLink,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

import ZapSVG from "assets/zap.svg";
import LinkSVG from "assets/Linkblue.svg";
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
import { useNavigate } from "react-router-dom";
import FacebookSVG from "assets/facebook.svg";

const Template1 = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const navigate = useNavigate();
  const socialIcons = {
    Instagram: InstaSVG,
    Twitter: XSVG,
    Facebook: FacebookSVG,
    Dribble: DribbleSVG,
    LinkedIn: LinkedInSVG,
  };
  return (
    <div className="section-container">
      <img src={TemplateCover} alt="Cover Photo" className="img" />
      <img src={UserPic} alt="User" className="userImg" />
      <div className="userInfo">
        <h2 className=" UserHeading">{data.name}</h2>
        <p>{data.profession}</p>
      </div>
      <div className="userDesc">
        <p>{data.description}</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-3 md:gap-5 mt-5 text-white">
        <button className="b1" onClick={() => navigate("/lead-magnet-quiz/product/"+data.username)}>
          <FontAwesomeIcon icon={faLink} className="b-icon" />
          <span className="text">My Links</span>
        </button>
        <button className="b1" onClick={() => navigate("/lead-magnet-quiz/product/"+data.username)}>
          <FontAwesomeIcon icon={faShoppingBag} className="b-icon" />
          <span className="text">My Store</span>
        </button>
        <button className="b1" onClick={() => navigate("/lead-magnet-quiz/product/"+data.username)}>
          <FontAwesomeIcon icon={faCirclePlay} className="b-icon" />
          <span className="text">My Videos</span>
        </button>
      </div>
      <div className="social-icons">
        {data.basic_links.map((link, index) => {
          const Icon = socialIcons[link.title];
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Icon || LinkSVG} alt={link.title} className="" />
            </a>
          );
        })}
      </div>
      <p className="linklead-p">
        Powered by |{" "}
        <a href="https://linkleads.ai" className="font-semibold">
          linklead
        </a>
      </p>
    </div>
  );
};

export default Template1;
