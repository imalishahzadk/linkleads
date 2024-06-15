import "css/template1wsidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faLink,
  faShoppingBag,
  faShoppingCart,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import FacebookSVG from "assets/facebook.svg";
import LinkSVG from "assets/Linkblue.svg";
import TemplateCover from "assets/template1.jpeg";
import UserPic from "assets/userPic.svg";
import InstaSVG from "assets/insta.svg";
import XSVG from "assets/x.svg";
import DribbleSVG from "assets/dribble.svg";
import LinkedInSVG from "assets/linkedin.svg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Template1 = ({data}) => {
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
      <img src={TemplateCover} alt="Cover Photo" className="imgg" />
      <img src={UserPic} alt="User" className="userImgg" />
      <div className="userInfoo">
        <h2 className=" UserHeadingg">{data.name}</h2>
        <p>{data.profession}</p>
      </div>
      <div className="userDescc">
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
      <div className="social-iconss">
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
