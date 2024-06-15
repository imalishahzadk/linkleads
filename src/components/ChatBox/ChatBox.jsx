import React, { useState } from "react";
import { FiMic, FiArrowUp } from "react-icons/fi";
import ChatWithAISVG from "../../assets/chatWitAI.svg";
import { Link } from "react-router-dom";

const ChatBot = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsChatboxOpen(!isChatboxOpen)}
        className="bg-white fixed right-0 bottom-0 shadow-icon p-3 mb-4 mr-4 cursor-pointer"
      >
        <img src={ChatWithAISVG} alt="" />
      </div>
      {isChatboxOpen && (
        <div className="fixed bottom-16 right-4 mx-5 md:w-96 bg-white border border-gray-400 shadow-md rounded-lg">
          <div className="p-5 leading-7 h-80 overflow-y-auto">
            <div className="mb-2">
              <p className="border border-gray-300 bg-transparent text-gray-700 rounded-lg py-2 px-4 inline-block">
                👋 Hi! <br /> <br /> I'm an AI-powered assistant who can help
                you with ideas, advice, and questions.
              </p>
            </div>
            <div className="mb-2">
              <p className="border border-gray-300 bg-transparent text-gray-700 rounded-lg py-2 px-4 inline-block">
                Just a heads up, I'm using new AI tech. It's always best to
                check my response for accuracy. By interacting with me, you
                agree to these{" "}
                <Link to="#" className="underline text-purple-400">
                  Terms
                </Link>
              </p>
            </div>
          </div>
          <div className="p-4 border-t flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="How can I help?"
                className="w-full px-3 py-4 border border-purple-400 rounded-md focus:outline-none"
              />
              <FiMic className="absolute right-3 top-2/4 transform -translate-y-2/4 text-xl" />
            </div>
            <button className="ml-2 bg-gray-300 text-white p-3 rounded-full">
              <FiArrowUp className="w-6 h-6" /> {/* Arrow-up icon */}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
