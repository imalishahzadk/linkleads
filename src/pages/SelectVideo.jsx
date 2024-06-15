
import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import BackIcon from "../assets/backIcon.svg";
import RightArrow from "../assets/rightArrow.svg";
import VideoIMG1 from "../assets/selectvideo1.jpeg";
import VideoIMG2 from "../assets/selectvideo2.jpeg";
import VideoIMG3 from "../assets/selectvideo3.jpeg";
import Loading from "../components/Loading/Loading";
import SelectVideoItems from "../components/SelectVideoItems/SelectVideoItems"

const SelectVideo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [showTimerPopup, setShowTimerPopup] = useState(false);

  useEffect(() => {
    const initialLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setShouldRenderUI(true);
    }, 1000);
    return () => clearTimeout(initialLoadingTimeout);
  }, []);

  const toggleTimerPopup = () => {
    setShowTimerPopup(!showTimerPopup);
  };

  return (
    <>
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <div className="relative">
          {currentStep !== 3 && (
            <div className="flex flex-col md:flex-col">
              <div className="flex flex-col items-start justify-start px-5 py-2 md:p-20 bg-white h-[80vh]">
                {currentStep === 1 && (
                  <>
                    <p className="text-2xl md:text-3xl ml-11 font-normal">Select Video</p>
                    <p className="my-2 md:my-3 ml-12 max-w-xl text-black/60 text-sm md:text-base font-normal leading-2">
                      Choose from 3 Videos. Select and continue to view mini landing page with details and registration. Then enter your email to receive it for free.
                    </p>
                    <div className="flex items-center my-2 md:my-3 ml-12 max-w-xs text-black/60 text-sm md:text-base font-normal leading-2">
                      <input type="checkbox" className="mr-2" />
                      <p>Get All the Selected Videos?</p>
                    </div>
                  </>
                )}
              </div>
              <div className="bg-primary h-[80vh]"></div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="absolute ml-20 mr-20 inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
              <SelectVideoItems
                icon={VideoIMG1}
                title="How to Design Learning App | Figma Ui/Ux Design Tutorial"
                duration="10:45"
                onClickHandler={toggleTimerPopup}
              />
              <SelectVideoItems
                icon={VideoIMG2}
                title="How to Design Learning App | Figma Ui/Ux Design Tutorial"
                duration="10:45"
                onClickHandler={toggleTimerPopup}
              />
              <SelectVideoItems
                icon={VideoIMG3}
                title="How to Design Learning App | Figma Ui/Ux Design Tutorial"
                duration="10:45"
                onClickHandler={toggleTimerPopup}
              />
            </div>
          )}

          {showTimerPopup && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="p-3 rounded-2xl border border-gray-200">
                <div className="bg-[#28439D] p-20 rounded-2xl">
                  <p className="uppercase text-2xl font-semibold text-white mb-3">Out of time!</p>
                  <Button
                    text="try again"
                    className="uppercase px-6 py-2 text-white font-medium rounded-lg bg-[#6F7FB3CC] text-lg"
                    onClick={() => setShowTimerPopup(false)} // Close pop-up when "try again" is clicked
                  />
                </div>
              </div>
              <button onClick={toggleTimerPopup} className="absolute top-0 right-0 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
          <div className="absolute bottom-4 md:bottom-16 right-10 md:right-20 flex gap-3">
            {currentStep <= 3 && (
              <>
                <Button
                  // onClick={handleBack}
                  text="Back"
                  src={BackIcon}
                  className="mt-2 md:mt-4 flex flex-row-reverse items-center text-white px-3 md:px-10 py-2 rounded-full font-medium text-sm md:text-xs bg-[#3855B3] hover:bg-[#3855b3da] duration-300"
                />
                <Button
                  // onClick={handleContinue}
                  text="Continue"
                  src={RightArrow}
                  className="mr-2 mt-2 md:mt-4 flex items-center text-black px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-white"
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SelectVideo;
