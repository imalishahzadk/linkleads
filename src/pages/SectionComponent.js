import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";

const FAQ = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  const toggleExpand = (id) => {
    if (id === 1) setExpanded1(!expanded1);
    if (id === 2) setExpanded2(!expanded2);
    if (id === 3) setExpanded3(!expanded3);
  };

  return (
    <div className="right-div flex-1 mt-6 md:mt-0">
      <div className="mb-4">
        <div
          className="flex items-center justify-between border-t-2 p-2 relative cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => toggleExpand(1)}
        >
          <p className="text-black/80">What exactly is LinkLeads.ai?</p>
          <FontAwesomeIcon
            icon={expanded1 ? faMinus : faPlus}
            className="w-4 h-4 text-gray-500 transition duration-300"
          />
        </div>
        <div
          className={`ml-6 text-sm text-black/80 transition-all duration-300 overflow-hidden ${
            expanded1 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p>
            LinkLeads.ai is the last link-in-bio tool you need. It creates your
            page and turns it into an automated sales funnel. The AI gives you
            ideas for new lead magnets/products. It then writes the lead magnet
            for you. It also writes your follow-up emails with new leads. It
            organizes your links with categories. It gives each lead magnet a
            mini landing page with a countdown timer. This makes sure your
            visitors turn into leads fast. It does lots of other things. But,
            it's faster for you to let us make your page in the next 30 seconds
            for you to see for yourself :)
          </p>
        </div>
      </div>
      <div className="mb-4">
        <div
          className="flex items-center justify-between border-t-2 p-2 relative cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => toggleExpand(2)}
        >
          <p className="text-black/80">Is it complicated to set up?</p>
          <FontAwesomeIcon
            icon={expanded2 ? faMinus : faPlus}
            className="w-4 h-4 text-gray-500 transition duration-300"
          />
        </div>
        <div
          className={`ml-6 text-sm text-black/80 transition-all duration-300 overflow-hidden ${
            expanded2 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p>
            Not at all! You can have our AI create your page within the next 30
            seconds by clicking the sign-up button.
          </p>
        </div>
      </div>
      <div>
        <div
          className="flex items-center justify-between border-t-2 p-2 relative cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => toggleExpand(3)}
        >
          <p className="text-black/80">Will it really make a difference in how many leads I get?</p>
          <FontAwesomeIcon
            icon={expanded3 ? faMinus : faPlus}
            className="w-4 h-4 text-gray-500 transition duration-300"
          />
        </div>
        <div
          className={`ml-6 text-sm text-black/80 transition-all duration-300 overflow-hidden ${
            expanded3 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <p>
            Absolutely. It basically turns every link, lead magnet, or product
            you share into its own sales funnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
