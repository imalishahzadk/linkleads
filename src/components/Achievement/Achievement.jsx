import React from "react";
import { FaCheck } from "react-icons/fa6";

const Achievment = ({ checked, title, subtitle, progress, points }) => {
  return (
    <div className="border">
      {checked ? (
        <div className="status-box">
          <FaCheck/>
        </div>
      ) : (
        <div className="w-10 h-10 rounded-md border border-[#28439d] border-2"></div>
      )}
      <div className="flex-grow">
        <div className="flex justify-between font-medium">
          {title}
          <p className="text-primary text-sm">{subtitle}</p>
        </div>
        <div className="h-4 rounded-lg bg-[#F0F1F2] my-3">
          <div style={{ width: `${progress}%` }} className="progress-bar">
            {points} Points
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievment;
