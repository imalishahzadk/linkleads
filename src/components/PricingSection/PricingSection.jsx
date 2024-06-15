import React, { useState, useEffect } from "react";
import CloseIcon from "../../assets/close.svg";
import { FaArrowRight, FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BuyCredits from "../BuyCredits/BuyCredits";
import "./pricing.css";

const PricingSection = ({ setShowPopup, subscribed }) => {
  const [showBuyCreditsPopup, setShowBuyCreditsPopup] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const container = document.getElementById("pricingSectionContainer");
      if (container) {
        container.scrollTop += e.deltaY;
      }
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      id="pricingSectionContainer"
      className="flex flex-col text-base max-h-screen overflow-y-scroll lg:overflow-hidden h-[90vh] lg:h-full rounded-xl pricing-section-container"
      onWheel={(e) => e.preventDefault()}
    >
      <div className="flex items-center justify-between p-5 pt-3 bg-white sticky top-0 z-10">
        <p className="text-lg font-medium font-semibold text-[#3855B3]">
          Upgrade Now
        </p>
        <div onClick={() => setShowPopup(false)} className="cursor-pointer">
          <img src={CloseIcon} alt="" />
        </div>
      </div>
      <div className="h-1 border-b border-b-[#D9D9D9] " />
      <div className="flex items-center justify-center mt-10 pb-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-medium text-center flex gap-2 justify-center mb-1 font-semibold">
            More Credits, More Creativity!
          </p>
          <p className="text-lg sm:text-xl px-1 md:px-2 text-center flex gap-2 justify-center text-gray-600 font-thin">
            Get a subscription now and unlock endless design
          </p>
          <p className="text-xl text-center flex gap-2 justify-center mb-5 text-gray-600 font-thin">
            possibilities. Keep your designs flowing!
          </p>
          <div className="bg-[#3855B3] py-3 w-full text-center ">
            <p className="text-2xl text-white/90">16 Available</p>
            <p className="text-white text-2xl font-semibold">
              94.5% Credits used
            </p>
          </div>
          <Link
            to="#"
            onClick={() => setShowBuyCreditsPopup(true)}
            className="text-center underline my-5 text-blue-500"
          >
            Buy More Credits
          </Link>
          {/* packeges name */}
          <div className="mt-5 grid gap-5 !mx-10 lg:grid-cols-2">
            <div className="ring-1 ring-gray-200 rounded-3xl p-5 xl:px-5 border border-gray-400 flex flex-col justify-between">
              <div>
                <h3 className="text-[#3855B3] text-2md font-semibold leading-8">
                  Free
                </h3>
                <p className="mt-1 flex items-baseline gap-x-1">
                  <span className="text-[25px] font-bold tracking-tight text-[#3855B3]">
                    $0/mo
                  </span>
                </p>
              </div>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex items-center gap-x-3 text-[16px] font-semibold">
                  <FaCircleCheck />
                  <span>Unlimited Links</span>
                </li>
                <li className="flex items-center gap-x-3 text-[16px] font-semibold">
                  <FaCircleCheck />
                  <span>20 Credits</span>
                </li>
                <li className="flex items-center gap-x-3 text-[16px] font-semibold">
                  <FaCircleCheck />
                  <span>
                    Tip Jar & other <br />
                    monitization support
                  </span>
                </li>
              </ul>
              <button
                className={`w-full bg-blue-600 ${
                  subscribed ? "text-white/100" : "text-white/60"
                } hover:ring-blue-300 mt-5 block rounded-xl py-2 px-3 text-center text-lg font-semibold leading-6`}
              >
                {subscribed ? "Switch to Free Plan" : "Already Using"}
              </button>
            </div>
            {/* pro */}
            <div className="ring-1 ring-gray-200 rounded-3xl p-5 xl:px-5 border border-gray-400 flex flex-col justify-between">
              <div>
                <h3 className="text-[#3855B3] text-2md font-semibold leading-8">
                  Pro
                </h3>
                <div className="flex items-baseline gap-x-1">
                  <del className="text-[18px] font-semibold text-[#3855B3]">
                    $29
                  </del>
                  <span className="text-[25px] font-bold tracking-tight text-[#3855B3]">
                    $99.9/mo
                  </span>
                </div>
              </div>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                <li className="flex items-center gap-x-3 text-[16px] font-semibold">
                  <FaCircleCheck />
                  <span>
                    Advance customization <br /> option
                  </span>
                </li>
                <li className="flex items-center gap-x-3 text-[16px] font-semibold">
                  <FaCircleCheck />
                  <span>20 Credits</span>
                </li>
                <li className="flex items-center gap-x-3 text-[16px] font-semibold">
                  <FaCircleCheck />
                  <span>Conversion tracking</span>
                </li>
                <Link
                  to="/payment"
                  className="flex items-center justify-center underline gap-x-3 text-lg font-semibold"
                >
                  <span>See all features</span>
                  <FaArrowRight />
                </Link>
              </ul>
              {/* <Link to="/payment" className="w-full bg-blue-600 text-white hover:ring-blue-300 mt-6 block rounded-xl py-2 px-3 text-center text-lg font-semibold leading-6">
                Upgrade
              </Link> */}
              <button
                onClick={
                  subscribed
                    ? () => {}
                    : () =>
                        (window.location.href =
                          "https://buy.stripe.com/test_9AQ6ov95dbDsbXGcMM")
                }
                className={`w-full bg-blue-600 ${
                  subscribed ? "text-white opacity-60" : "text-white"
                } hover:ring-blue-300 mt-6 block rounded-xl py-2 px-3 text-center text-lg font-semibold leading-61`}
              >
                {subscribed ? "Already Using" : "Upgrade"}
              </button>
            </div>
          </div>

          <Link to="#" className="text-center underline mt-5 text-blue-500">
            View all plans
          </Link>
        </div>
      </div>
      {showBuyCreditsPopup && (
        <BuyCredits setShowBuyCreditsPopup={setShowBuyCreditsPopup} />
      )}
    </section>
  );
};

export default PricingSection;
