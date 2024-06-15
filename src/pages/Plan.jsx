import React, { useState, useEffect } from "react";
import Loading from "../components/Loading/Loading";
import { FaCheckCircle } from 'react-icons/fa';

const Plan = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRenderUI, setShouldRenderUI] = useState(false);
    const [toggle, setToggle] = useState('left');

    const handleLeftClick = () => {
        setToggle('left');
    };

    const handleRightClick = () => {
        setToggle('right');
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
                <div className="flex flex-col justify-center items-center min-h-screen px-4">
                    <h1 className="text-primary text-[30px] font-semibold mb-4 mt-10 text-center">
                        Choose Your Plan
                    </h1>
                    <div className="relative w-56 bg-white rounded-full shadow-md mb-8">
                        <div
                            id="btn"
                            className={`absolute top-0 w-1/2 h-full bg-primary rounded-full transition-all duration-500 ${toggle === 'right' ? 'left-1/2' : 'left-0'}`}
                        ></div>
                        <button
                            type="button"
                            className="w-1/2 py-2.5 text-center bg-transparent border-none outline-none font-semibold text-black/70"
                            onClick={handleLeftClick}
                        >
                            Monthly
                        </button>
                        <button
                            type="button"
                            className="w-1/2 py-2.5 text-center bg-transparent border-none outline-none text-black/70 font-semibold"
                            onClick={handleRightClick}
                        >
                            Yearly
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-8">
                        <div className="bg-white w-full md:w-80 p-4 border border-primary rounded-3xl">
                            <p className="flex items-start mb-2 font-semibold text-primary text-[20px]">Free</p>
                            <h2 className="text-3xl font-bold my-4 text-primary">$0/mo</h2>
                            <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90 mt-10">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Customizable Link in Bio page
                            </p>
                            <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Limited analytics (up to 3 months of data)
                            </p>
                            <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Free Six Templates
                            </p>
                            <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Email Support
                            </p>
                            <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Email Campaign
                            </p>
                            <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Template Customization
                            </p>
                            <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5 " /> Max 10 Links
                            </p>
                            <p className="p-2 bg-primary text-white text-[20px] rounded-2xl ml-4 mr-4 shadow-md pl-14">Already Using</p>
                        </div>
                        <div className="flex flex-col space-y-4 w-full md:w-auto">
                            <div className="bg-primary h-20 w-full md:w-80 rounded-t-3xl">
                                <h1 className="text-white text-center mt-4 text-[30px]">
                                    Most Popular
                                </h1>
                            </div>
                            <div className="bg-white w-full md:w-80 p-4 border border-primary rounded-3xl">
                                <p className="flex items-start mb-2 font-semibold text-primary text-[20px]">Pro</p>
                                <h2 className="text-3xl font-bold my-4 text-primary">$10/mo</h2>
                                <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90 mt-10">
                                    <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Access to Free Features
                                </p>
                                <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                    <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Full analytics (up to 1 year)
                                </p>
                                <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                    <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> 50 credits for AI features
                                </p>
                                <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                    <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> AI Generated Profile
                                </p>
                                <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                    <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Email Broadcasting
                                </p>
                                <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                    <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Template Customization
                                </p>
                                <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90">
                                    <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5 " /> Option to hide Link in Bio logo
                                </p>
                                <p className="p-2 bg-primary text-white text-[20px] rounded-2xl ml-4 mr-4 shadow-md pl-14">Try Pro for free</p>
                            </div>
                        </div>
                        <div className="bg-white w-full md:w-80 p-4 border border-primary rounded-3xl">
                            <p className="flex items-start mb-2 font-semibold text-primary text-[20px]">Premium</p>
                            <h2 className="text-3xl font-bold my-4 text-primary">$20/mo</h2>
                            <p className="flex items-start mb-4 text-[15px] font-semibold text-black/90 mt-10">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Access to Pro Features
                            </p>
                            <p className="flex items-start mb-4 mt-9 text-[15px]  font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Full analytics (up to 1 year)
                            </p>
                            <p className="flex items-start mb-4 mt-9 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> 100 credits for AI features
                            </p>
                            <p className="flex items-start mb-4 mt-9 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Special Email Template
                            </p>
                            <p className="flex items-start mb-4 mt-8 text-[15px] font-semibold text-black/90">
                                <FaCheckCircle className="text-primary mr-4 flex-shrink-0 w-5 h-5" /> Custom Domain
                            </p>
                            <p className="p-2 bg-primary text-white text-[20px] rounded-2xl ml-4 mr-4 shadow-md pl-8">Try Premium for free</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Plan;
