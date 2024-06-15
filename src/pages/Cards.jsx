import React from 'react';
import './cards.css';
import { LuStore, LuEye } from "react-icons/lu";
import { TbClick } from "react-icons/tb";
import { GoGraph } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { BiCategory } from 'react-icons/bi';

export const Card1 = () => {
    return (
      <div className="card1">
        <div className="category-icon-wrapper">
          <BiCategory className="category-icon" />
        </div>
        <div>
          <h5 className="headin1">
            <span className="number">3</span>
            <span className="progress-icon1"><GiProgression/></span>
            <span className="percentage1">11%</span>
          </h5>       
          <p className='p2'>Category Count</p>
        </div>
      </div>
    );
  };
  
  export const Card2 = () => {
    return (
      <div className="card2">
        <div className="eye-icon-wrapper">
          <LuEye className="eye-icon" />
        </div>
        <div>
          <h5 className="headin1">
            <span className="number">5K</span>
            <span className="progress-icon2"><GiProgression/></span>
            <span className="percentage2">11%</span>
          </h5>       
          <p className='p2'>Total Views</p>
        </div>
      </div>
    );
  };
  
  export const Card3 = () => {
    return (
      <div className="card3">
        <div className="eye-icon1-wrapper">
          <LuEye className="eye-icon1" />
        </div>
        <div>
          <h5 className="headin1">
            <span className="number">5K</span>
            <span className="progress-icon3"><GiProgression/></span>
            <span className="percentage3">11%</span>
          </h5>       
          <p className='p2'>Unique Views</p>
        </div>
      </div>
    );
  };
  
  export const Card4 = () => {
    return (
      <div className="card4">
        <div className="click-icon-wrapper">
          <TbClick className="click-icon" />
        </div>
        <div>
          <h5 className="headin1">
            <span className="number">1,345</span>
            <span className="progress-icon4"><GiProgression/></span>
            <span className="percentage4">11%</span>
          </h5>       
          <p className='p2'>Total Clicks</p>
        </div>
      </div>
    );
  };
  
  export const Card5 = () => {
    return (
      <div className="card5">
        <div className="graph-icon-wrapper">
          <GoGraph className="graph-icon" />
        </div>
        <div>
          <h5 className="headin1">
            <span className="number">20%</span>
            <span className="progress-icon5"><GiProgression/></span>
            <span className="percentage5">11%</span>
          </h5>       
          <p className='p2'>CTR</p>
        </div>
      </div>
    );
  };
  

