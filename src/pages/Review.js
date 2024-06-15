import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import UserIcon from "../assets/userPic.svg";

const initialReviews = [
  {
    id: 1,
    name: "Alice Banks",
    title: "Head of Marketing",
    date: "Feb 13, 2021",
    text: "The device has a clean design and the metal housing feels sturdy in my hands. Soft rounded corners make it a pleasure to look at.",
  },
  {
    id: 2,
    name: "Bob Smith",
    title: "Product Manager",
    date: "Mar 20, 2021",
    text: "Great product with excellent features. Would recommend to others.",
  },
  {
    id: 3,
    name: "Catherine Johnson",
    title: "Software Engineer",
    date: "Apr 15, 2021",
    text: "The software runs smoothly with no issues. Very satisfied with my purchase.",
  },
];

const additionalReviews = [
  {
    id: 4,
    name: "David Brown",
    title: "UX Designer",
    date: "May 10, 2021",
    text: "Fantastic design and usability. Exceeds my expectations. The build quality is top-notch and the user experience is unparalleled.",
  },
  {
    id: 5,
    name: "Emily Davis",
    title: "Content Strategist",
    date: "Jun 05, 2021",
    text: "Content creation has become so much easier with this tool. Highly recommend it. The interface is intuitive and the features are robust.",
  },
  {
    id: 6,
    name: "Frank Miller",
    title: "QA Tester",
    date: "Jul 22, 2021",
    text: "Thoroughly tested and it passed all our criteria. Very reliable product. The testing phase went smoothly and all functionalities worked as expected.",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [allLoaded, setAllLoaded] = useState(false);

  const loadMoreReviews = () => {
    setReviews((prevReviews) => [...prevReviews, ...additionalReviews]);
    setAllLoaded(true);
  };

  return (
    <div className="bg-white flex flex-col justify-center items-center mt-10">
      <h1 className="text-3xl font-semibold text-primary">
        People Love Us Because They Have More Leads and Money Now
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col gap-4 bg-gray-400 rounded-xl p-4 hover:bg-gray-300 transition duration-200 ease-in-out transform hover:scale-102"
            style={{ flexGrow: 1 }}
          >
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="w-7 h-7 mt-2 text-center rounded-full bg-yellow-500">
                  <img
                    src={UserIcon}
                    width={35}
                    alt=""
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-[14px]">{review.title}</span>
                </div>
              </div>
              <div className="flex p-1 gap-1 text-orange-500">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
            </div>
            <div>{review.text}</div>
            <div className="flex justify-between">
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
      {!allLoaded && (
        <button
          onClick={loadMoreReviews}
          className="bg-primary text-white px-4 py-2 rounded-full mt-4 transition duration-200 ease-in-out hover:bg-blue-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Reviews;
