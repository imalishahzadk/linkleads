import "css/template3.css";
import LinkSVG from "assets/Linkwhite.svg";
import ShareSVG from "assets/share.svg";
import TemplateCover from "assets/template3cover.jpeg";
import UserPic from "assets/template3user.jpeg";
import React, { useState, useEffect } from "react";
import Button from "components/Button/Button";
import PricingSection from "components/PricingSection/PricingSection";
import Loading from "components/Loading/Loading";
import InstaSVG from "assets/insta1.svg";
import XSVG from "assets/x1.svg";
import DribbleSVG from "assets/dribble1.svg";
import LinkedInSVG from "assets/linkedin.svg";
import { useNavigate } from "react-router-dom";

const Template3 = ({ data }) => {
  const navigate = useNavigate();
  const socialIcons = {
    Instagram: InstaSVG,
    Twitter: XSVG,
    Dribble: DribbleSVG,
    LinkedIn: LinkedInSVG,
  };
  return (
    <div className="section-container">
      <img src={TemplateCover} alt="Cover Photo" className="imggggg" />
      <img src={UserPic} alt="User" className="userImggggg" />
      <div className="userInfooooo">
        <h2 className=" UserHeadinggggg">{data.name}</h2>
        <p className="userParagraph">
          {data.profession}
        </p>
      </div>
      <div className="btn-divvvvv grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 text-white">
        <button className="b1111" onClick={() => navigate("/lead-magnet-quiz/ebook/"+data.username)}>
          <span className="text">My Ebooks</span>
        </button>
        <button className="b2222" onClick={() => navigate("/lead-magnet-quiz/product/"+data.username)}>
          <span className="text">My Store</span>
        </button>
        <button className="b3333" onClick={() => navigate("/lead-magnet-quiz/video/"+data.username)}>
          <span className="text">My Videos</span>
        </button>
      </div>
      <div className="social-iconsssss">
      {data.basic_links.map((link, index) => {
          const Icon = socialIcons[link.title];
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Icon||LinkSVG} alt={link.title} className="" />
            </a>
          );
        })}
      </div>

      <p className="linklead-ppppp">
        Powered by |{" "}
        <a href="https://example.com" className="font-semibold">
          linklead
        </a>
      </p>
    </div>
  );
};

export default Template3;
