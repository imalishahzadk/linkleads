import AISVG from "../assets/aisvg.svg";
import UserIcon from "../assets/userPic.svg";
import ZapSVG from "../assets/zap.svg";
import LinkSVG from "../assets/Link.svg";
import ShareSVG from "../assets/share.svg"
import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import ChatBot from "../components/ChatBox/ChatBox";
import PricingSection from "../components/PricingSection/PricingSection";
import Loading from "../components/Loading/Loading"
import Achievment from "../components/Achievement/Achievement";

const Sales = () => {
    const [showPopup, setShowPopup] = useState(false);
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

    return (
        <>
            {isLoading && <Loading />}
            {shouldRenderUI && (
                <>
                    <div className="flex flex-col lg:flex-row w-full h-full overflow-hidden">
                        <div className="flex-grow bg-[#f6f7fa] px-2 lg:px-16 pt-10">
                            {/* Top Navbar, Buttons */}
                            <div className="flex flex-col md:flex-row justify-between items-center pb-5">
                                <h3 className="text-2xl font-medium mb-5"> My Sale</h3>
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

                            <div className="bg-white rounded-xl p-2 grid grid-cols-1 md:grid-cols-4 gap-2">
                                <h5 className="font-semibold text-center text-[18px]">Sale ID</h5>
                                <h5 className="font-semibold text-center text-[18px]">Purchase Name</h5>
                                <h5 className="font-semibold text-center text-[18px]">Amount</h5>
                                <h5 className="font-semibold text-center text-[18px]">Email</h5>
                            </div>

                            <div className="bg-white rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-2 mt-4">
                                <h5 className="text-center text-black/70 font-semibold">ID12</h5>
                                <h5 className="text-center text-black/70 font-semibold">Nicolas Jones</h5>
                                <h5 className="text-center text-black/70 font-semibold">6000</h5>
                                <h5 className="text-center text-black/70 font-semibold">nicolas@gmail.com</h5>
                            </div>

                            <div className="bg-white rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-2 mt-4">
                                <h5 className="text-center text-black/70 font-semibold">ID12</h5>
                                <h5 className="text-center text-black/70 font-semibold">Nicolas Jones</h5>
                                <h5 className="text-center text-black/70 font-semibold">6000</h5>
                                <h5 className="text-center text-black/70 font-semibold">nicolas@gmail.com</h5>
                            </div>

                            <div className="bg-white rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-2 mt-4">
                                <h5 className="text-center text-black/70 font-semibold">ID12</h5>
                                <h5 className="text-center text-black/70 font-semibold">Nicolas Jones</h5>
                                <h5 className="text-center text-black/70 font-semibold">6000</h5>
                                <h5 className="text-center text-black/70 font-semibold">nicolas@gmail.com</h5>
                            </div>

                            <div className="bg-white rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-2 mt-4">
                                <h5 className="text-center text-black/70 font-semibold">ID12</h5>
                                <h5 className="text-center text-black/70 font-semibold">Nicolas Jones</h5>
                                <h5 className="text-center text-black/70 font-semibold">6000</h5>
                                <h5 className="text-center text-black/70 font-semibold">nicolas@gmail.com</h5>
                            </div>

                            <div className="bg-white rounded-xl p-4 grid grid-cols-1 md:grid-cols-4 gap-2 mt-4 mb-4">
                                <h5 className="text-center text-black/70 font-semibold">ID12</h5>
                                <h5 className="text-center text-black/70 font-semibold">Nicolas Jones</h5>
                                <h5 className="text-center text-black/70 font-semibold">6000</h5>
                                <h5 className="text-center text-black/70 font-semibold">nicolas@gmail.com</h5>
                            </div>




                        </div>

                        <div className="w-full min-h-screen lg:w-[350px] p-5 bg-white">
                            <div className="flex justify-end">
                                <button className="shadow-icon p-3">
                                    <img src={AISVG} alt="" />
                                </button>
                            </div>
                            <div className="flex flex-col gap-3 items-center relative">
                                <div className="relative">
                                    <img src={UserIcon} width={60} alt="" />
                                    <div className="absolute top-10 right-0 flex items-center justify-center w-4 h-4 bg-primary text-white text-xs font-bold rounded-full">
                                        5
                                    </div>
                                </div>
                                <p className="font-semibold">@harrison123</p>
                                <p className="text-[14px] text-black/80">16/20 credits used</p>
                            </div>

                            <div className="border p-8 rounded-2xl mt-8">
                                <h3 className="font-semibold text-black/70">
                                    Total Sales:
                                </h3>
                            </div>
                            <div className="border p-8 rounded-2xl mt-4">
                                <h3 className="font-semibold text-black/70">
                                    Total Balance: xxx amount
                                </h3>
                            </div>
                            <div className="border p-8 rounded-2xl mt-4">
                                <h3 className="font-semibold text-black/70">
                                    Withdraw Balance:
                                </h3>
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
};

export default Sales;
