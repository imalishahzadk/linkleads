import "./pageeditor4.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faRedo, faUndo, faEye, faLink } from '@fortawesome/free-solid-svg-icons';
import { FaArrowLeft, FaChevronDown, FaLink, FaPlus, FaCcMastercard, FaEdit, FaInstagram, FaFont } from 'react-icons/fa';
import UserIcon from "../assets/userPic.svg";
import AISVG from "../assets/aisvg.svg";
import ChatBot from "../components/ChatBox/ChatBox";
import TemplateCover from "../assets/template1.jpeg";
import UserPic from "../assets/userPic.svg";
import InstaSVG from "../assets/instagramLogo.svg";
import XSVG from "../assets/twitterLogo.svg";
import GoogleSVG from "../assets/googleLogo.svg";
import TikTokSVG from "../assets/tiktokLogo.svg";
import WhatsappSVG from "../assets/whatsappLogo.svg";
import FacebookSVG from "../assets/facebookLogo.svg";
import React, { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import CategorySVG from "../assets/category.svg";
import filSVG from "../assets/file.svg";
import SMSSVG from "../assets/sms.svg";
import SimpleStoreSVG from "../assets/simpleStore.svg";
import ModifySVG from "../assets/modify.svg";
import pageeditorIMG from "../assets/pageeditorIMG.png";
import foodSVG from "../assets/food.svg";
import PersonalSVG from "../assets/personalInfo.svg"
import colorSVG from "../assets/color.svg"
const Button = ({ text, icon, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {text}
    {icon}
  </button>
);

const Template1 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [openAIModel, setOpenAIModel] = useState(false);
  const [showManageLinks, setShowManageLinks] = useState(false);
  const [showNewLinks, setShowNewLinks] = useState(false);
  const [showCustomLinkInput, setShowCustomLinkInput] = useState(false);
  const [showInstagramInput, setShowInstagramInput] = useState(false);
  const [customLink, setCustomLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');

  const [showFacebookInput, setShowFacebookInput] = useState(false);
  const [facebookLink, setFacebookLink] = useState('');

  const [showTikTokInput, setShowTikTokInput] = useState(false);
  const [tiktokLink, setTikTokLink] = useState('');

  const [showNewLinks1, setShowNewLinks1] = useState(false);
  const [showCustomLinkInput1, setShowCustomLinkInput1] = useState(false);
  const [showInstagramInput1, setShowInstagramInput1] = useState(false);
  const [customLink1, setCustomLink1] = useState('');
  const [instagramLink1, setInstagramLink1] = useState('');

  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showEditProfilee, setShowEditProfilee] = useState(false);

  const [showFonts, setShowFonts] = useState(false);
  const [showColor, setShowColor] = useState(false);


  const handleManageLinksClick = () => {
    setShowManageLinks(true);
  };

  const handleBackClick = () => {
    setShowManageLinks(false);
    setShowNewLinks(false);
    setShowCustomLinkInput(false);
    setShowInstagramInput(false);
  };

  const handleCreateNewClick = () => {
    setShowNewLinks(!showNewLinks); // Toggle the showNewLinks state
  };

  const handleCustomLinkClick = () => {
    setShowCustomLinkInput(!showCustomLinkInput);
  };

  const handleInstagramClick = () => {
    setShowInstagramInput(!showInstagramInput);
  };

  const handleFacebookClick = () => {
    setShowFacebookInput(!showFacebookInput);
  };

  const handleTikTokClick = () => {
    setShowTikTokInput(!showTikTokInput);
  };

  const handleSaveCustomLink = () => {
    // Save the custom link logic here
    setShowCustomLinkInput(false);
  };

  const handleSaveInstagramLink = () => {
    // Save the Instagram link logic here
    setShowInstagramInput(false);
  };

  const handleSaveFacebookLink = () => {
    // Save the Instagram link logic here
    setShowFacebookInput(false);
  };

  const handleSaveTikTokLink = () => {
    // Save the Instagram link logic here
    setShowTikTokInput(false);
  };

  const handleCreateNewClick1 = () => {
    setShowNewLinks1(!showNewLinks1); // Toggle the showNewLinks state
  };

  const handleCustomLinkClick1 = () => {
    setShowCustomLinkInput1(!showCustomLinkInput1);
  };

  const handleInstagramClick1 = () => {
    setShowInstagramInput1(!showInstagramInput1);
  };

  const handleSaveCustomLink1 = () => {
    // Save the custom link logic here
    setShowCustomLinkInput1(false);
  };

  const handleSaveInstagramLink1 = () => {
    // Save the Instagram link logic here
    setShowInstagramInput1(false);
  };

  const handleEditProfileClick = () => {
    setShowEditProfile(!showEditProfile);
  };

  const handleEditProfileClickk = () => {
    setShowEditProfilee(!showEditProfilee);
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
        <div className="bg-blue-200 bg-opacity-30 shadow-md p-6 md:p-16 flex flex-col md:flex-row items-start md:items-center rounded-md gap-6">
            <div className="flex-1">
                <h2 className="text-[22px] font-semibold text-black/70">
                    Pick Link in Bio Templates
                </h2>
                <p className="pt-5">
                    Apply a template to your Link in bio 
                    page to get started. You can change your links and appearance anytime.
                </p>
                <Button
                text="Preview"
                icon={<FontAwesomeIcon icon={faEye} className="text-white-600" />}
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-4 py-2 rounded-full font-bold text-xs bg-primary text-white mt-4"
              />
            </div>
            <div className="flex justify-center md:justify-end">
                <img src={pageeditorIMG} alt="User" className="h-40 w-52 md:h-50 md:w-64"/>
            </div>
        </div>


            <div className="section-container mt-6">
                <img src={TemplateCover} alt="Cover Photo" className="imgg"/>
                <img src={UserPic} alt="User" className="userImgg"/>
                <div className="userInfoo">
                    <div className="userText">
                        <h2 className="UserHeadingg">Harrison Phillips</h2>
                        <p>@harrison123</p>
                    </div>
                    <div className="buttonContainer">
                        <Button
                        text="Edit Profile"
                        className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
                        onClick={handleEditProfileClick}
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
                    <div className="p-6 flex flex-col md:flex-row gap-6 ml-0 md:ml-8">
                        <div className="border p-4 md:p-8 w-full md:w-80 h-auto md:h-60 rounded-xl flex flex-col justify-between">
                            <div className="flex items-center justify-between w-full">
                            <h2 className="text-[20px]">
                                My Category
                            </h2>
                            <p className="text-2xl w-8 h-8 rounded-full bg-gray-200  text-blue-600 flex items-center justify-center cursor-pointer">
                                +
                            </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-4 ml-0 md:ml-3">
                            <div className="rounded-xl border flex flex-col items-center space-y-4 p-2 w-64 h-36 min-h-36">
                                <img src={foodSVG} alt="Food Category" className="w-8 h-8 text-blue-600" />
                                <p className="text-[14px] text-blue-600">Food Category</p>
                                <div className="flex space-x-4">
                                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faEdit} className="text-blue-600 h-3 w-3" />
                                </div>
                                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faTrash} className="text-red-600 w-3 h-3" />
                                </div>
                                </div>
                            </div>
                            <div className="rounded-xl border flex flex-col items-center space-y-4 p-2 w-64 h-36 min-h-36">
                                <img src={foodSVG} alt="Food Category" className="w-8 h-8 text-blue-600" />
                                <p className="text-[14px] text-blue-600">Food Category</p>
                                <div className="flex space-x-4">
                                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faEdit} className="text-blue-600 w-3 h-3" />
                                </div>
                                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faTrash} className="text-red-600 w-3 h-3" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="border p-4 md:p-8 w-full md:w-80 h-auto md:h-60 rounded-xl flex flex-col justify-between">
                            <div className="flex items-center justify-between w-full">
                            <h2 className="text-[20px]">
                                My Stores
                            </h2>
                            <p className="text-2xl w-8 h-8 rounded-full bg-gray-200  text-blue-600 flex items-center justify-center cursor-pointer">
                                +
                            </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4 mt-4 ml-0 md:ml-3">
                            <div className="rounded-xl border flex flex-col items-center space-y-4 p-2 w-64 h-36 min-h-36">
                                <img src={foodSVG} alt="Food Category" className="w-8 h-8 text-blue-600" />
                                <p className="text-[14px] text-blue-600">Store 1</p>
                                <div className="flex space-x-4">
                                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faEdit} className="text-blue-600 h-3 w-3" />
                                </div>
                                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faTrash} className="text-red-600 h-3 w-3" />
                                </div>
                                </div>
                            </div>
                            <div className="rounded-xl border flex flex-col items-center space-y-4 p-2 h-36 w-64 min-h-36">
                                <img src={foodSVG} alt="Food Category" className="w-8 h-8 text-blue-600" />
                                <p className="text-[14px] text-blue-600">Store 2</p>
                                <div className="flex space-x-4">
                                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faEdit} className="text-blue-600 w-3 h-3" />
                                </div>
                                <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                                    <FontAwesomeIcon icon={faTrash} className="text-red-600 w-3 h-3" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center pb-5 mt-5">
            <h3 className="text-2xl font-medium"></h3>
            <div className="flex gap-5">
            <Button
                text="Undo"
                icon={<FontAwesomeIcon icon={faUndo} className="text-blue-600 mr-2" />}
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-white"
              />
                <Button
                 icon={<FontAwesomeIcon icon={faRedo} className="text-blue-600 mr-2" />}
                text="Redo"
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-white"
              />
              <Button
                text="Publish"
                className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
              />
            </div>
          </div>
          </div> 
                      {/* right sidebar */}
                      <div className="w-full lg:w-[440px] p-5 bg-white">
              <div onClick={() => setOpenAIModel(!openAIModel)} className="flex justify-end">
                <button className="shadow-icon p-3">
                  <img src={AISVG} alt="" />
                </button>
              </div>
              
              <div className="flex flex-col gap-3 items-center relative">
                <img src={UserIcon} width={60} alt="" />
                <p>@harrison123</p>

                {/* Toggle content based on showEditProfile state */}
                {showEditProfile ? (
  <div className="w-full">
    <h2 className="text-xl mt-5">Personal Information</h2>
    <div
      className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer mt-5"
      onClick={handleEditProfileClickk}
    >
      <div className="flex items-center gap-2 p-2">
        <div className="ml-1 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
          <img src={PersonalSVG} className="w-6 h-6" alt="Personal SVG" />
        </div>
        <p className="ml-1">Personal Details</p>
      </div>
      <FaChevronDown className="mr-2" />
    </div>
    {showEditProfilee && (
  <>
    <div className="border p-2 rounded-xl mt-1">
      <div className="border rounded-xl p-2">
        <p className="ml-2 sm:ml-4 font-semibold text-black/70">Name</p>
        <input 
          type="text" 
          placeholder="Harrison Phillips" 
          className="border border-2 border-gray-300 p-1 rounded-md ml-2 sm:ml-4 mt-2 shadow-sm w-full sm:w-auto"
        />
      </div>
      <div className="border rounded-xl p-2 mt-2">
        <p className="ml-2 sm:ml-4 font-semibold text-black/70">Profession</p>
        <input 
          type="text" 
          placeholder="Software Engineer" 
          className="border border-2 border-gray-300 p-1 rounded-md ml-2 sm:ml-4 mt-2 shadow-sm w-full sm:w-auto"
        />
      </div>
      <div className="border rounded-xl p-2 mt-2">
        <p className="ml-2 sm:ml-4 font-semibold text-black/70">Description</p>
        <textarea 
          placeholder="I'm a frontend developer" 
          className="border border-2 border-gray-300 p-1 rounded-md ml-2 sm:ml-4 mt-2 shadow-sm w-full sm:w-auto" 
          style={{ resize: "vertical", maxHeight: "10em" }}
        />
      </div>
    </div>
  </>
)}


      <div className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer mt-5"
      onClick={() => setShowColor(!showColor)}>

        <div className="flex items-center gap-2 p-2">
          <div className="ml-1 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
            <img src={colorSVG} className="w-6 h-6" alt="Color SVG" />
          </div>
          <p className="ml-1">Pick Color</p>
        </div>
        <FaChevronDown className="mr-2" />
      </div>
      {showColor && (
        <div className="flex flex-col gap-3 border border-gray-200 p-2 rounded-xl mt-2">
          <div className="border border-2 border-grey-200 rounded-xl p-4 flex flex-wrap justify-center sm:justify-start">
            <p className="w-8 h-8 bg-blue-600 rounded-full m-2 ml-6"></p>
            <p className="w-8 h-8 bg-orange-600 rounded-full m-2"></p>
            <p className="w-8 h-8 bg-yellow-600 rounded-full m-2"></p>
            <p className="w-8 h-8 bg-pink-600 rounded-full m-2"></p>
          </div>
        </div>
      )}



      <div className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer mt-5"
        onClick={() => setShowFonts(!showFonts)}>
        <div className="flex items-center gap-2 p-2">
          <div className="ml-1 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
            <FaFont className="text-blue-600" />
          </div>
          <p className="ml-1">Pick Font</p>
        </div>
        <FaChevronDown className="mr-2" />
      </div>
      {showFonts && (
        <div className="flex flex-col gap-3 border border-gray-200 p-2 rounded-xl mt-2">
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
    </div>
) : null}
                
      {showManageLinks ? (
        <div>
          <div className="flex items-center mb-5">
            <button
              onClick={handleBackClick}
              className="flex items-center gap-2 text-blue-600"
            >
              <FaArrowLeft />
              <span>Back</span>
            </button>
          </div>
          <h2 className="text-2xl mb-5">Manage Basic Links</h2>
          <div className="flex flex-col gap-4">
            <div 
              className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
              onClick={handleCreateNewClick}
            >
              <div className="flex items-center gap-2 p-2">
                <div className="ml-1 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                  <FaPlus className="text-blue-600" />
                </div>
                <p className="ml-1">Create new Basic Links</p>
              </div>
              <FaChevronDown className="mr-2" />
            </div>
            {showNewLinks && (
              <>
                <div className="border p-2 rounded-xl">
                  <div 
                    className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
                    onClick={handleCustomLinkClick}
                  >
                    <div className="flex items-center gap-2 p-2">
                      <div className="ml-1 w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <FaLink className="text-blue-600" />
                      </div>
                      <p className="ml-1">Custom Link</p>
                    </div>
                    <FaChevronDown className="mr-2" />
                  </div>
                  {showCustomLinkInput && (
                    <div className="mt-2 flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Enter custom link"
                        value={customLink}
                        onChange={(e) => setCustomLink(e.target.value)}
                        className="border p-2 rounded-md"
                      />
                      <button
                        onClick={handleSaveCustomLink}
                        className="bg-blue-600 text-white p-2 rounded-md"
                      >
                        Save Link
                      </button>
                    </div>
                  )}

                  <div 
                    className="mt-1 flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
                    onClick={handleInstagramClick}
                  >
                    <div className="flex items-center gap-2 p-2">
                      <div className="ml-1 w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <img src={InstaSVG} alt="Instagram" />
                      </div>
                      <p className="ml-1">Instagram</p>
                    </div>
                    <FaChevronDown className="mr-2" />
                  </div>
                  {showInstagramInput && (
                    <div className="mt-2 flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Enter Instagram link"
                        value={instagramLink}
                        onChange={(e) => setInstagramLink(e.target.value)}
                        className="border p-2 rounded-md"
                      />
                      <button
                        onClick={handleSaveInstagramLink}
                        className="bg-blue-600 text-white p-2 rounded-md"
                      >
                        Save Link
                      </button>
                    </div>
                  )}

                  <div 
                    className="mt-1 flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
                    onClick={handleTikTokClick}
                  >
                    <div className="flex items-center gap-2 p-2">
                      <div className="ml-1 w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <img src={TikTokSVG} alt="Instagram" />
                      </div>
                      <p className="ml-1">TikTok</p>
                    </div>
                    <FaChevronDown className="mr-2" />
                  </div>
                  {showTikTokInput && (
                    <div className="mt-2 flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Enter TikTok link"
                        value={tiktokLink}
                        onChange={(e) => setTikTokLink(e.target.value)}
                        className="border p-2 rounded-md"
                      />
                      <button
                        onClick={handleSaveTikTokLink}
                        className="bg-blue-600 text-white p-2 rounded-md"
                      >
                        Save Link
                      </button>
                    </div>
                  )}

                  <div 
                    className="mt-1 flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
                    onClick={handleFacebookClick}
                  >
                    <div className="flex items-center gap-2 p-2">
                      <div className="ml-1 w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <img src={FacebookSVG} alt="Facebook" />
                      </div>
                      <p className="ml-1">Facebook</p>
                    </div>
                    <FaChevronDown className="mr-2" />
                  </div>
                  {showFacebookInput && (
                    <div className="mt-2 flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Enter Facebook link"
                        value={facebookLink}
                        onChange={(e) => setFacebookLink(e.target.value)}
                        className="border p-2 rounded-md"
                      />
                      <button
                        onClick={handleSaveFacebookLink}
                        className="bg-blue-600 text-white p-2 rounded-md"
                      >
                        Save Link
                      </button>
                    </div>
                  )}
                  <Button
                text="Add Link"
                className="flex flex-row-reverse items-center gap-1 border border-gray-300 px-3 md:px-4 py-2 rounded-full font-bold text-xs bg-primary text-white mt-4"
              />
                </div>
              </>
            )}



            <div className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
              onClick={handleCreateNewClick1}
            >
              <div className="flex items-center gap-2 p-2">
                <div className="ml-1 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md cursor-pointer">
                  <FaEdit className="text-blue-600" />
                </div>
                <p className="ml-1 ">Manage Basic Links</p>
              </div>
              <FaChevronDown className="mr-2" />
            </div>
            {showNewLinks1 && (
              <>
                <div className="border p-2 rounded-xl">
                  <div 
                    className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
                    onClick={handleCustomLinkClick1}
                  >
                    <div className="flex items-center gap-2 p-2">
                      <div className="ml-1 w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <FaLink className="text-blue-600" />
                      </div>
                      <p className="ml-1">Custom Link</p>
                    </div>
                    <FaChevronDown className="mr-2" />
                  </div>
                  {showCustomLinkInput1 && (
                    <div className="mt-2 flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Enter custom link"
                        value={customLink1}
                        onChange={(e) => setCustomLink1(e.target.value)}
                        className="border p-2 rounded-md"
                      />
                      <button
                        onClick={handleSaveCustomLink1}
                        className="bg-blue-600 text-white p-2 rounded-md"
                      >
                        Save Link
                      </button>
                    </div>
                  )}

                  <div 
                    className="mt-1 flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer"
                    onClick={handleInstagramClick1}
                  >
                    <div className="flex items-center gap-2 p-2">
                      <div className="ml-1 w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center shadow-md">
                        <img src={InstaSVG} alt="Instagram" />
                      </div>
                      <p className="ml-1">Instagram</p>
                    </div>
                    <FaChevronDown className="mr-2" />
                  </div>
                  {showInstagramInput1 && (
                    <div className="mt-2 flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Enter Instagram link"
                        value={instagramLink1}
                        onChange={(e) => setInstagramLink1(e.target.value)}
                        className="border p-2 rounded-md"
                      />
                      <button
                        onClick={handleSaveInstagramLink1}
                        className="bg-blue-600 text-white p-2 rounded-md"
                      >
                        Save Link
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
                  <>
                  <div
                    className="flex flex-col sm:flex-row items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl cursor-pointer mt-5 w-full"
                    onClick={handleManageLinksClick}
                  >
                    <div className="flex items-center gap-2 p-2">
                      <div className="ml-1 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                        <FaLink className="text-orange-600" />
                      </div>
                      <p className="ml-1 text-center sm:text-left">Manage Basic Links</p>
                    </div>
                    <FaChevronDown className="mr-2 hidden sm:block" />
                  </div>

                    <div className="flex items-center justify-between gap-3 border border-gray-200 p-2 rounded-2xl w-full cursor-pointer">
                      <div className="flex items-center gap-2">
                        <div className="ml-2 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                          <FaCcMastercard className="text-purple-600" />
                        </div>
                        <div className="column ml-2">
                          <p>Buy Credits</p>
                          <p className="text-[13px] mt-3 text-black/80">Available: 16</p>
                          <a href="#" className="text-primary underline">Buy Credits</a>
                        </div>
                      </div>
                      <FaChevronDown className="mr-2" />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="">
            <ChatBot />
          </div>
        </>
      )}
    </>
  );
}

export default Template1;
