import React, { useState, useEffect } from "react";
import BookIMG from "../assets/selectvideo2.jpeg";
import EbookMiniLanding from "../components/VideoMiniLanding/VideoMiniLanding";
import Loading from "../components/Loading/Loading";
import Button from "../components/Button/Button";
import BackIcon from "../assets/backIcon.svg";
import RightArrow from "../assets/rightArrow.svg";

const VideoMiniLanding = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [productSelected, setProductSelected] = useState(false);
  const [showProductCard, setShowProductCard] = useState(false);
  const [selectedStore, setSelectedStore] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);

  useEffect(() => {
    // Simulate initial loading time
    const initialLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setShouldRenderUI(true);
    }, 1000);
    // Cleanup function to clear timeout
    return () => clearTimeout(initialLoadingTimeout);
  }, []);

  const handleSelect = (storeName) => {
    // Set productSelected to true
    setProductSelected(true);
    // Set selected store
    setSelectedStore(storeName);
  };

  return (
    <>
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <div className="relative">
          {/* divs for bg */}
          {currentStep !== 3 && (
            <div className="flex flex-col md:flex-col">
              <div className="flex flex-col items-start justify-start px-5 py-2 md:p-20 bg-white h-[60vh]">
                {/* Conditionally render based on the currentStep */}
                {currentStep === 1 && (
                  <>
                    <p className="text-2xl md:text-3xl ml-11 font-normal">Ebook Mini Landing Page</p>
                  </>
                )}
              </div>
              <div className="bg-primary h-[60vh]"></div>
            </div>
          )}

          {/* Render steps based on the currentStep */}
          {currentStep === 1 && (
            <div className="absolute ml-20 mr-20 inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
              <EbookMiniLanding
                icon={BookIMG}
                onClickHandler={() => handleSelect("Simple Store")}
              />
              <EbookMiniLanding
                icon={BookIMG}
                onClickHandler={() => handleSelect("Shopify")}
              />
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
                  className="mr-16 mt-2 md:mt-4 flex items-center text-black px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-white"
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoMiniLanding;
