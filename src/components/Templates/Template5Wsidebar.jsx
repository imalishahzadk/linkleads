import "css/template5wsidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InstaSVG from "assets/insta.svg";
import XSVG from "assets/x.svg";
import DribbleSVG from "assets/dribble.svg";
import LinkedInSVG from "assets/linkedin.svg";
import UserPic from "assets/template5user.jpeg";
import UserIcon from "assets/userPic.svg";
import AISVG from "assets/aisvg.svg";
import ChatBot from "components/ChatBox/ChatBox";
import ZapSVG from "assets/zap.svg";
import LinkSVG from "assets/Linkblue.svg";
import ShareSVG from "assets/share.svg";
import TemplateCover from "assets/template5cover.jpeg";
import React, { useState, useEffect } from "react";
import Button from "components/Button/Button";
import PricingSection from "components/PricingSection/PricingSection";
import Loading from "components/Loading/Loading";
import CategorySVG from "assets/category.svg";
import SMSSVG from "assets/sms.svg";
import SimpleStoreSVG from "assets/simpleStore.svg";
import ModifySVG from "assets/modify.svg";
import { FaChevronDown } from "react-icons/fa6";
import {
  faDribbble,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
const Template5 = ({ data }) => {
  const navigate = useNavigate();
  const socialIcons = {
    Instagram: InstaSVG,
    Twitter: XSVG,
    Dribble: DribbleSVG,
    LinkedIn: LinkedInSVG,
  };

  return (
    <div className="section-container">
      <img src={TemplateCover} alt="Cover Photo" className="new-iiimgggggg" />
      <img src={UserPic} alt="User" className="new-uuuserImgggggg" />
      <div className="new-uuuserInfoooooo">
        <h2 className=" new-UUUserHeadingggggg">{data.name}</h2>
        <p className="new-uuuserParagraphh">{data.profession}</p>
      </div>
      <div className="new-uuuserDesccc">
        <p>
          {data.description}
        </p>
      </div>
      <div className="new-bbbtn-divvvvvv grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 text-white">
        <button className="new-bbb11111">
          <span className="text">My Store</span>
        </button>
        <h2 className="new-btn-heading">Videos</h2>
        <button className="new-bbb22222">
          <span className="text">Youtube</span>
        </button>
        <button className="new-bbb33333">
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
      <div className="new-sssocial-iconssssss">
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
      <p className="new-lllinklead-pppppp">
        Powered by |{" "}
        <a href="https://linkleads.ai" className="font-semibold">
          linklead
        </a>
      </p>
    </div>
  );
};

export default Template5;
