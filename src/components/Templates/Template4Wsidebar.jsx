import "css/template4wsidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkSVG from "assets/Linkblue.svg";
import InstaSVG from "assets/insta.svg";
import XSVG from "assets/x.svg";
import DribbleSVG from "assets/dribble.svg";
import LinkedInSVG from "assets/linkedin.svg";
import UserPic from "assets/template4user.png";
import TemplateCover from "assets/template4cover.jpeg";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Template1 = ({data}) => {
  const navigate = useNavigate();
  
  const socialIcons = {
    Instagram: InstaSVG,
    Twitter: XSVG,
    Dribble: DribbleSVG,
    LinkedIn: LinkedInSVG,
  };
  return (
    <div className="section-container">
      <img src={TemplateCover} alt="Cover Photo" className="iiimgggggg" />
      <img src={UserPic} alt="User" className="uuuserImgggggg" />
      <div className="uuuserInfoooooo">
        <h2 className=" UUUserHeadingggggg">@{data.username}</h2>
        <p className="uuuserParagraphh">{data.profession}</p>
      </div>
      <div className="uuuserDesccc">
        <p>
          {data.description}
        </p>
      </div>
      <div className="bbbtn-divvvvvv grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 text-white">
        <button className="bbb11111" onClick={() => navigate("/lead-magnet-quiz/ebook/"+data.username)}>
          <span className="text">My Ebooks</span>
        </button>
        <button className="bbb22222" onClick={() => navigate("/lead-magnet-quiz/product/"+data.username)}>
          <span className="text">My Store</span>
        </button>
        <button className="bbb33333" onClick={() => navigate("/lead-magnet-quiz/video/"+data.username)}>
          <span className="text">My Videos</span>
        </button>
      </div>
      <div className="sssocial-iconssssss">
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
      <p className="lllinklead-pppppp">
        Powered by |{" "}
        <a href="https://linkleads.ai" className="font-semibold">
          linklead
        </a>
      </p>
    </div>
  );
};

export default Template1;
