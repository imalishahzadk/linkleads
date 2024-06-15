import "css/template3wsidebar.css";
import InstaSVG from "assets/insta1.svg";
import XSVG from "assets/x1.svg";
import DribbleSVG from "assets/dribble1.svg";
import UserPic from "assets/template3user.jpeg";
import LinkSVG from "assets/Linkwhite.svg";
import TemplateCover from "assets/template3cover.jpeg";
import React from "react";
import { useNavigate } from "react-router-dom";
import FacebookSVG from "assets/facebook.svg";
import LinkedInSVG from "assets/linkedin.svg";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Template3 = ({data}) => {
  const navigate = useNavigate();
  const socialIcons = {
    Instagram: InstaSVG,
    Twitter: XSVG,
    Dribble: DribbleSVG,
    LinkedIn: LinkedInSVG,
  };

  return (
    <div className="section-container">
      <img src={TemplateCover} alt="Cover Photo" className="imgggggg" />
      <img src={UserPic} alt="User" className="userImgggggg" />
      <div className="userInfoooooo">
        <h2 className=" UserHeadingggggg">{data.name}</h2>
        <p className="userParagraphh">
          {data.profession}
        </p>
      </div>
      <div className="btn-divvvvvv grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 text-white">
        <button className="b11111" onClick={() => navigate("/lead-magnet-quiz/ebook/"+data.username)}>
          <span className="text">My Ebooks</span>
        </button>
        <button className="b22222" onClick={() => navigate("/lead-magnet-quiz/product/"+data.username)}>
          <span className="text">My Store</span>
        </button>
        <button className="b33333" onClick={() => navigate("/lead-magnet-quiz/video/"+data.username)}>
          <span className="text">My Videos</span>
        </button>
      </div>
      <div className="social-iconssssss">
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
      <p className="linklead-pppppp">
        Powered by |{" "}
        <a href="https://linkleads.ai" className="font-semibold">
          linklead
        </a>
      </p>
    </div>
  );
};

export default Template3;
