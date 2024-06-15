import "css/template4.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDribbble,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import LinkedInSVG from "assets/linkedin.svg";
import ZapSVG from "assets/zap.svg";
import LinkSVG from "assets/Linkblue.svg";
import ShareSVG from "assets/share.svg";
import TemplateCover from "assets/template4cover.jpeg";
import UserPic from "assets/template4user.png";
import React, { useState, useEffect } from "react";
import Button from "components/Button/Button";
import PricingSection from "components/PricingSection/PricingSection";
import Loading from "components/Loading/Loading";
import InstaSVG from "assets/insta.svg";
import XSVG from "assets/x.svg";
import DribbleSVG from "assets/dribble.svg";
import { useNavigate } from "react-router-dom";

const Template4 = ({data}) => {
  const navigate = useNavigate();
  const socialIcons = {
    Instagram: InstaSVG,
    Twitter: XSVG,
    Dribble: DribbleSVG,
    LinkedIn: LinkedInSVG,
  };
  return (
    <div className="section-container">
      <img src={TemplateCover} alt="Cover Photo" className="iimggggg" />
      <img src={UserPic} alt="User" className="uuserImggggg" />
      <div className="usuerInfooooo">
        <h2 className=" UUserHeadinggggg">@{data.username}</h2>
        <p className="uuserParagraph">{data.profession}</p>
      </div>
      <div className="uuserDesccc">
        <p>
          {data.description}
        </p>
      </div>
      <div className="ssocial-iconsssss">
        {data.basic_links.map((link, index) => {
          const Icon = socialIcons[link.title];
          return (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Icon || LinkSVG} alt={link.title} />
            </a>
          );
        })}
      </div>
      <div className="bbtn-divvvvv grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 text-white">
        <button className="bb1111" onClick={() => navigate("/lead-magnet-quiz/ebook/"+data.username)}>
          <span className="text">My Ebooks</span>
        </button>
        <button className="bb2222" onClick={() => navigate("/lead-magnet-quiz/product/"+data.username)}>
          <span className="text">My Store</span>
        </button>
        <button className="bb3333" onClick={() => navigate("/lead-magnet-quiz/video/"+data.username)}>
          <span className="text">My Videos</span>
        </button>
      </div>

      <p className="llinklead-ppppp">
        Powered by |{" "}
        <a href="https://example.com" className="font-semibold">
          linklead
        </a>
      </p>
    </div>
  );
};

export default Template4;
