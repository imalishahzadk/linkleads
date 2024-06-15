import "css/template5.css";
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
import TemplateCover from "assets/template5cover.jpeg";
import UserPic from "assets/template5user.jpeg";
import React, { useState, useEffect } from "react";
import Button from "components/Button/Button";
import PricingSection from "components/PricingSection/PricingSection";
import Loading from "components/Loading/Loading";
import InstaSVG from "assets/insta.svg";
import XSVG from "assets/x.svg";
import DribbleSVG from "assets/dribble.svg";

const Template5 = ({ data }) => {
  const socialIcons = {
    Instagram: InstaSVG,
    Twitter: XSVG,
    Dribble: DribbleSVG,
    LinkedIn: LinkedInSVG,
  };
  return (
    <div className="section-container">
      <img src={TemplateCover} alt="Cover Photo" className="iimmggggg" />
      <img src={UserPic} alt="User" className="uusserImggggg" />
      <div className="uusserInfooooo">
        <h2 className=" UUsserHeadinggggg">{data.name}</h2>
        <p className="uusserParagraph">{data.profession}</p>
      </div>
      <div className="uusserDesccc">
        <p>
          {data.description}
        </p>
      </div>
      <div className="ssoocial-iconsssss">
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
      <div className="bbttn-divvvvv grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 text-white">
        <button className="bbtn1111">
          <span className="text">My Store</span>
        </button>
        <h2 className="btn-head">Vlogs</h2>
        <button className="bbtn2222">
          <span className="text">Youtube</span>
        </button>
        <button className="bbtn3333">
          <span className="text">TikTok</span>
        </button>
        {data.ebooks.size !=0 &&
          (<h2 className="new-btn-heading">Ebooks</h2>)
        }
        {data.ebooks.map((book, index) => {
          return (
            
        <button className="new-bbb33333">
        <span className="text">{book.title}</span>
      </button>
          );
        })} 
      </div>

      <p className="lliinklead-ppppp">
        Powered by |{" "}
        <a href="https://example.com" className="font-semibold">
          linklead
        </a>
      </p>
    </div>
  );
};

export default Template5;
