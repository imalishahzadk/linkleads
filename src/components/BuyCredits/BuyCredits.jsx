import React from "react";
import CloseIcon from "../../assets/close.svg";
import Button from "../Button/Button";

const BuyCredits = ({ setShowBuyCreditsPopup }) => {
  return (
    <div className="px-2 sm:px-0 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl w-[400px]">
        <div className="flex items-center justify-between p-5">
          <p className="text-lg font-semibold">Buy Credits</p>
          <div
            onClick={() => setShowBuyCreditsPopup(false)}
            className="cursor-pointer"
          >
            <img src={CloseIcon} alt="" />
          </div>
        </div>
        <div className="h-1 border-b border-b-[#D9D9D9]" />
        <div className="px-5">
          <p className="mt-5 text-xl font-medium">Available Credits</p>
          <p className="mt-2">16</p>
        </div>
        <div class="col-span-2 sm:col-span-1 px-5">
          <p className="mt-5 text-xl font-normal">Select the amount to buy</p>
          <select
            id="category"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            <option selected="">50 for $5.10</option>
            <option selected="">50 for $5.10</option>
            <option selected="">50 for $5.10</option>
            <option selected="">50 for $5.10</option>
          </select>
        </div>
        <p className="mt-5 text-xl font-medium px-5">
          Your account will be charged
        </p>
        <p className="mt-2 px-5">$5.10</p>
        <p className="mt-5 text-xl font-medium px-5">
          New Credits balance will be
        </p>
        <p className="mt-2 px-5">76</p>
        <div className="flex items-end justify-end gap-2 px-5 mb-5">
          <Button
            text="Cancel"
            className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-white text-black"
          />
          <Button
            text="Buy Credits"
            className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyCredits;
