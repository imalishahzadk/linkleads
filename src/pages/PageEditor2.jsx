import "./pageeditor2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import Achievment from "../components/Achievement/Achievement";
import UserIcon from "../assets/userPic.svg";
import AISVG from "../assets/aisvg.svg";
import ChatBot from "../components/ChatBox/ChatBox";
import ZapSVG from "../assets/zap.svg";
import LinkSVG from "../assets/Link.svg";
import ShareSVG from "../assets/share.svg"
import TemplateCover from "../assets/template1.jpeg"
import UserPic from "../assets/userPic.svg"
import InstaSVG from "../assets/instagramLogo.svg"
import XSVG from "../assets/twitterLogo.svg"
import GoogleSVG from "../assets/googleLogo.svg"
import TikTokSVG from "../assets/tiktokLogo.svg"
import WhatsappSVG from "../assets/whatsappLogo.svg"
import FacebookSVG from "../assets/facebookLogo.svg"
import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import PricingSection from "../components/PricingSection/PricingSection";
import Loading from "../components/Loading/Loading"
import CategorySVG from "../assets/category.svg";
import filSVG from "../assets/file.svg";
import SMSSVG from "../assets/sms.svg";
import SimpleStoreSVG from "../assets/simpleStore.svg";
import ModifySVG from "../assets/modify.svg"
import { FaChevronDown, FaChevronUp, FaFont, FaUpload, FaLink, FaStore, FaCcMastercard } from 'react-icons/fa';
import Cropper from 'react-easy-crop';

const Template1 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [openAIModel, setOpenAIModel] = useState(false);
  const [showFonts, setShowFonts] = useState(false);
  const [showModifyTemplateOptions, setShowModifyTemplateOptions] = useState(false);
  const [showBackgroundOptions, setShowBackgroundOptions] = useState(false);
  const [showUploadSubCards, setShowUploadSubCards] = useState(false);
  const [images, setImages] = useState({ image1: null, image2: null });
  const [croppedArea, setCroppedArea] = useState(null);
  const [cropConfig, setCropConfig] = useState({
    imageKey: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    croppedImage: null,
  });
  const [showCropper, setShowCropper] = useState(false);

  const handleToggle = () => {
    setShowModifyTemplateOptions(!showModifyTemplateOptions);
  };

  const handleBackgroundToggle = () => {
    setShowBackgroundOptions(!showBackgroundOptions);
  };
  const handleUploadSubCardsToggle = () => setShowUploadSubCards(!showUploadSubCards);

  const handleImageUpload = (event, imageKey) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prevImages => ({
          ...prevImages,
          [imageKey]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleCrop = async () => {
    const croppedImage = await getCroppedImg(images[cropConfig.imageKey], croppedArea);
    setImages(prevImages => ({
      ...prevImages,
      [cropConfig.imageKey]: croppedImage,
    }));
    setShowCropper(false);
  };

  const getCroppedImg = (imageSrc, pixelCrop) => {
    const canvas = document.createElement('canvas');
    const image = new Image();
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
    return new Promise((resolve, reject) => {
      image.onload = () => {
        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );
        canvas.toBlob(blob => {
          resolve(URL.createObjectURL(blob));
        }, 'image/jpeg');
      };
      image.src = imageSrc;
    });
  };

  const startCrop = (imageKey) => {
    setCropConfig(prevConfig => ({
      ...prevConfig,
      imageKey,
      crop: { x: 0, y: 0 },
      zoom: 1,
    }));
    setShowCropper(true);
  };
  useEffect(() => {
    // Simulate initial loading time
    const initialLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setShouldRenderUI(true);
    }, 1000);
    // Cleanup function to clear timeout
    return () => clearTimeout(initialLoadingTimeout);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <>
      <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">
        <div className="flex-grow bg-[#f6f7fa] px-2 lg:px-16 pt-10">
          {/* Top Navbar, Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-center pb-5">
            <h3 className="text-2xl font-medium">My Page</h3>
            <div className="flex gap-5">
              <button>
                <img src={LinkSVG} alt="" />
              </button>

              <Button
                text="Share"
                src={ShareSVG}
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-white"
              />
              <Button
                text="0/20 Credits"
                className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-[#28439D1A]"
              />
              <Button
                onClick={() => setShowPopup(true)}
                text="Upgrade"
                src={ZapSVG}
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
              {showPopup && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-lg">
                    <PricingSection setShowPopup={setShowPopup} />
                  </div>
                </div>
              )}
            </div>
          </div>
            <div className="section-container">
                <img src={TemplateCover} alt="Cover Photo" className="imgg"/>
                <img src={UserPic} alt="User" className="userImgg"/>
                <div className="userInfoo">
                    <div className="userText">
                        <h2 className="UserHeadingg">Harrison Phillips</h2>
                        <p>@harrison123</p>
                    </div>
                    <div className="buttonContainer">
                        <Button
                        text="Change Template"
                        className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
                        />
                    </div>
                </div>

                    <div className="userDescription">
                        <p>I'm a frontend developer, crafting user interfaces with HTML, CSS., 
                        I'm a frontend developer, crafting user interfaces with HTML, CSS... See more</p>
                    </div>
                    <div className="social-iconss">
                        <div className="icon-container">
                            <img src={InstaSVG} alt="Instagram" className="insta"/>
                        </div>
                        <div className="icon-container">
                            <img src={XSVG} alt="X (Twitter)" className="x"/>
                        </div>
                        <div className="icon-container">
                            <img src={GoogleSVG} alt="Google" className="google"/>
                        </div>
                        <div className="icon-container">
                            <img src={WhatsappSVG} alt="WhatsApp" className="whatsapp"/>
                        </div>
                        <div className="icon-container">
                            <img src={TikTokSVG} alt="TikTok" className="tiktok"/>
                        </div>
                        <div className="icon-container">
                            <img src={FacebookSVG} alt="Facebook" className="facebook"/>
                        </div>
                    </div>
                    <p className="linklead-p">Powered by | <a href="https://example.com" className="font-semibold">linklead</a></p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pb-5 mt-5">
            <h3 className="text-2xl font-medium"></h3>
            <div className="flex gap-5">
              <Button
                text="Change Template"
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-3 rounded-full font-bold text-xs bg-white"
              />
              <Button
                text="Manage Page"
                className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
            </div>
          </div>
          </div> 

          {/* right sidebar */}

          <div className="w-full lg:w-[370px] p-5 bg-white">
          <div
            onClick={() => setOpenAIModel(!openAIModel)}
            className="flex justify-end"
          >
            <button className="shadow-icon p-3">
              <img src={AISVG} alt="" />
            </button>
          </div>
          <div className="flex flex-col gap-3 items-center relative">
            <img src={UserIcon} width={60} alt="" />
            <p>@harrison123</p>

            <div className="flex flex-col justify-center gap-y-6 mx-5 w-full mt-5">
      <div
        className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-2">
          <img src={CategorySVG} alt="" />
          <p className="font-semibold text-black/70">Modify Template</p>
        </div>
        {showModifyTemplateOptions ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
      </div>

      {showModifyTemplateOptions && (
        <>
          <div
            className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
            onClick={handleUploadSubCardsToggle}
          >
            <div className="flex items-center gap-2 p-2 ">
            <div className=" ml-1 w-12 h-12 bg-white-200 rounded-full flex items-center justify-center shadow-md">
                <FaUpload className="text-blue-600" />
            </div>
            <p className="ml-1">Upload Images</p>
            </div>
            {showUploadSubCards ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
          </div>

          {showUploadSubCards && (
            <div className="flex flex-col gap-3 border border-gray-200 p-2 rounded-2xl">
              <div className="flex flex-col items-center gap-3 border border-gray-200 p-2 rounded-xl">
              <div>
              <p className="text-black/70 pb-2 border-b border-gray-400">Upload Cover Picture</p> {/* Added border-bottom style */}
              </div>
              <div className="flex items-center">
                <label className="choose-image-button text-[12px] text-gray-600 border border-gray-400 rounded p-2 cursor-pointer mr-14">
                    Choose File
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'image1')} className="hidden" />
                </label>

                <div className="flex-grow"></div> {/* Empty div to push the delete icon to the right */}
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>

            </div>




{images.image1 && (
                  <>
                    <img
                      src={images.image1}
                      alt="Preview"
                      className="image-preview cursor-pointer"
                      onClick={() => startCrop('image1')}
                    />
                  </>
                )}
                <div className="flex items-center gap-6 border-t-2 border-grey-300 pt-3">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                        Repeat
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                        Cover
                    </label>
                </div>


              </div>
              <div className="flex flex-col items-center gap-3 border border-gray-200 p-2 rounded-xl">
              <div>
              <p className="text-black/70 pb-2 border-b border-gray-400">Upload Profile Picture</p> {/* Added border-bottom style */}
              </div>
              <div className="flex items-center">
                <label className="choose-image-button text-[12px] text-gray-600 border border-gray-400 rounded p-2 cursor-pointer mr-14">
                    Choose File
                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'image2')} className="hidden" />
                </label>

                <div className="flex-grow"></div> {/* Empty div to push the delete icon to the right */}
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>

            </div>
                {images.image2 && (
                  <>
                    <img
                      src={images.image2}
                      alt="Preview"
                      className="image-preview cursor-pointer"
                      onClick={() => startCrop('image2')}
                    />
                  </>
                )}
                <div className="flex items-center gap-6 border-t-2 border-grey-300 pt-3">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                        Repeat
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                        Cover
                    </label>
                </div>
              </div>
            </div>
          )}

          <div
            className={`flex flex-col gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer ${showBackgroundOptions ? 'border-b-0' : ''}`}
            onClick={handleBackgroundToggle}
          >
            <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 p-2 ">
            <div className=" ml-1 w-12 h-12 bg-white-200 rounded-full flex items-center justify-center shadow-md">
                <FaLink className="text-blue-600" />
            </div>
            <p className="ml-1">Background</p>
            </div>
              {showBackgroundOptions ? <FaChevronUp className="mr-2" /> : <FaChevronDown className="mr-2" />}
            </div>
          </div>
          {showBackgroundOptions && (
            <div className="border border-t-2 border-gray-200 p-2 mb-5 rounded-b-2xl">
              <div className="flex items-center gap-2 ml-6">
                <input type="radio" id="singleColor" name="background" value="singleColor" />
                <label htmlFor="singleColor">Single Color</label>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-6">
                <input type="radio" id="gradientColor" name="background" value="gradientColor" />
                <label htmlFor="gradientColor">Gradient Color</label>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-6">
                <input type="radio" id="image" name="background" value="image" />
                <label htmlFor="image">Image</label>
              </div>
              <div className="flex items-center gap-2 mt-2 ml-6">
                <input type="radio" id="chooseBackgroundColor" name="background" value="chooseBackgroundColor" />
                <label htmlFor="chooseBackgroundColor">Choose Background Color</label>
              </div>
            </div>
          )}

          <div className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer" 
          onClick={() => setShowFonts(!showFonts)}>
          <div className="flex items-center gap-2 p-2 ">
            <div className=" ml-1 w-12 h-12 bg-white-200 rounded-full flex items-center justify-center shadow-md">
                <FaFont className="text-blue-600" />
            </div>
            <p className="ml-1">Pick Font</p>
            </div>
        <FaChevronDown className="mr-2" />
      </div>
      
      {showFonts && (
        <div className="flex flex-col gap-3 border border-gray-200 p-2 rounded-xl">
  <div className="border border-2 border-grey-200 rounded-xl p-4" >
    <h4 className="font-roboto text-[22px] text-black/70 pb-1 border-b border-b-2 border-gray-400">Roboto</h4>
    <p className="mt-2 text-[18px]">Ali Hamza</p>
    <p className="font-roboto mt-2">I'm a frontend developer, crafting captivating user 
    interfaces with HTML, CSS, and JavaScript.</p>
  </div>
  <div className="border border-2 border-grey-200 rounded-xl p-4" >
    <h4 className="font-montserrat text-[22px] text-black/70 pb-1 border-b border-b-2 border-gray-400">Montserrat</h4>
    <p className="mt-2 text-[18px]">Ali Hamza</p>
    <p className="font-montserrat mt-2">I'm a frontend developer, crafting captivating 
    user interfaces with HTML, CSS, and JavaScript.</p>
  </div>
  <div className="border border-2 border-grey-200 rounded-xl p-4" >
    <h2 className="font-poppins text-[22px] text-black/70 pb-1 border-b border-b-2 border-gray-400">Poppins</h2>
    <p className="mt-2 text-[18px]">Ali Hamza</p>
    <p className="font-poppins mt-2">I'm a frontend developer, crafting captivating user interfaces with HTML, CSS, and JavaScript.</p>
  </div>
</div>

      )}
        </>
      )}

      {!showModifyTemplateOptions && (
        <>
          <div className="flex items-center gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer">
            <img src={CategorySVG} alt="" />
            <p className="font-semibold text-black/70">Explore the Category</p>
          </div>
          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-2xl cursor-pointer">
            <div className=" ml-1 w-12 h-12 bg-white-200 rounded-full flex items-center justify-center shadow-md">
                <FaStore className="text-green-600" />
            </div>
            <p className="ml-1 font-semibold text-black/70">Explore the Store</p>
            </div>
          <div className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer">
            <div className="flex items-center gap-2">
            <div className=" ml-2 w-12 h-12 bg-white-200 rounded-full flex items-center justify-center shadow-md">
                <FaCcMastercard className="text-blue-600" />
            </div>
              <div className="column ml-1">
                <p className="font-semibold text-black/70">Buy Credits</p>
                <p className="text-[13px] mt-3 text-black/80">Available: 16</p>
                <a href="#" className="text-primary underline">Buy Credits</a>
              </div>
            </div>
            <FaChevronDown className="mr-2" />
          </div>
        </>
      )}
      {showCropper && (
  <div className="cropper-wrapper fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="cropper-container bg-white p-4 rounded-lg flex flex-col-reverse sm:flex-row">
      <div className="flex justify-between mb-4 sm:mb-0">
        {/* Save Button */}
        <button
          className="text-white bg-blue-500 p-2 rounded"
          onClick={handleCrop}
        >
          Save
        </button>
        {/* Cancel Button */}
        <button
          className="text-white bg-red-500 p-2 rounded ml-2"
          onClick={() => setShowCropper(false)}
        >
          Cancel
        </button>
      </div>
      {/* Cropper Component */}
      <Cropper
        image={images[cropConfig.imageKey]}
        crop={cropConfig.crop}
        zoom={cropConfig.zoom}
        aspect={1}
        onCropChange={(crop) => setCropConfig(prevConfig => ({ ...prevConfig, crop }))}
        onZoomChange={(zoom) => setCropConfig(prevConfig => ({ ...prevConfig, zoom }))}
        onCropComplete={handleCropComplete}
        className="order-first sm:order-last"
      />
    </div>
  </div>
)}

    </div>

          </div>
        </div>
        {/* right sidebar ends */}
      </div>
      <div className="">
        <ChatBot />
      </div>
      </>
      )}
    </>
  );
};

export default Template1;
