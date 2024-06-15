import "css/template2wsidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserPic from "assets/template2user.jpeg";
import TemplateCover from "assets/template2cover.jpeg"
import React, { useState, useEffect } from "react";
import { faInstagram, faLinkedin, faDribbble, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Template2 = ({data}) => {
  const socialIcons = {
    Instagram: faInstagram,
    Twitter: faTwitter,
    Facebook: faFacebook,
    Dribble: faDribbble,
    LinkedIn: faLinkedin,
  };
  return (
    
            <div className="section-container">
                <img src={TemplateCover} alt="Cover Photo" className="imgggg"/>
                <img src={UserPic} alt="User" className="userImgggg"/>
                    <div className="userInfoooo">
                        <h2 className=" UserHeadingggg">{data.name}</h2>
                        <p>{data.profession}</p>
                    </div>
                    <div className="userDescccc">
                        <p>{data.description}</p>
                    </div>

                    <div className="btn-divvv grid grid-cols-1 md:grid-cols-1 gap-3 md:gap-5 text-white">
                    {data.basic_links.map((link, index) => {
                    const Icon = socialIcons[link.title];
                    return (
                      <button className="b11"onClick={() => {window.open(link.url)}}>
                            <FontAwesomeIcon icon={Icon||faLink} className="b-icon" />
                            <span className="text">{link.title}</span>
                        </button> 
                    );
                  })}                  
                    </div>  
                    <p className="linklead-p">Powered by | <a href="https://example.com" className="font-semibold">linklead</a></p>
            </div>
            
  );
};

export default Template2;
