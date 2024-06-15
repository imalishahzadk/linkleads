import "css/template2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faDribbble,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

import ZapSVG from "assets/zap.svg";
import LinkSVG from "assets/Link.svg";
import ShareSVG from "assets/share.svg";
import TemplateCover from "assets/template2cover.jpeg";
import UserPic from "assets/template2user.jpeg";
import React, { useState, useEffect } from "react";
import Button from "components/Button/Button";
import PricingSection from "components/PricingSection/PricingSection";
import Loading from "components/Loading/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Template2 = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);

  const navigate = useNavigate();
  const socialIcons = {
    Instagram: faInstagram,
    Twitter: faTwitter,
    Facebook: faFacebook,
    Dribble: faDribbble,
    LinkedIn: faLinkedin,
  };

  return (
    <div className="section-container">
      <img src={TemplateCover} alt="Cover Photo" className="imggg" />
      <img src={UserPic} alt="User" className="userImggg" />
      <div className="userInfooo">
        <h2 className=" UserHeadinggg">{data.name}</h2>
        <p>{data.profession}</p>
      </div>
      <div className="userDesccc">
        <p>{data.description}</p>
      </div>
      <div className="btn-divvv grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 text-white">
        {data.basic_links.map((link, index) => {
          const Icon = socialIcons[link.title];
          return (
            <button
              className="b11"
              onClick={() => {
                window.open(link.url);
              }}
            >
              <FontAwesomeIcon icon={Icon || faLink} className="b-icon" />
              <span className="text">{link.title}</span>
            </button>
          );
        })}
      </div>

      <p className="linklead-p">
        Powered by |{" "}
        <a href="https://example.com" className="font-semibold">
          linklead
        </a>
      </p>
    </div>
  );
};

export default Template2;
