import React, { useState, useEffect } from "react";
import BackIcon from "assets/backIcon.svg";
import YoutubeIcon from "assets/youtubeIcon.svg";
import AddIcon from "assets/addItem.svg";
import Loading from "components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import Button from "components/Button/Button";
import RightArrow from "assets/rightArrow.svg";
import AddEbook from "components/AddEbook/AddEbook";
import EbookItems from "components/EbookItems/EbookItems";
import CategoryItem from "components/CategoryItem/CategoryItem";
import CategoryModal from "components/Models/Category";
import axios from "axios";
import { toast } from "react-toastify";
import BookSVG from "assets/book.svg";
import BookIMG from "assets/ebook-landing.png";
import EbookMiniLanding from "components/EbookMiniLanding/EbookMiniLanding";

const TimePopup = ({
  timer,
  setTimer,
  data,
  currentStep,
  setCurrentStep,
  totalPrice,
}) => {
  const navigate = useNavigate();
  
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);

  const handleCardNumberChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 4) {
      const newCardNumber = [...cardNumber];
      newCardNumber[index] = value;
      setCardNumber(newCardNumber);

      // Automatically focus next input
      if (value.length === 4 && index < 3) {
        document.getElementById(`card-number-${index + 1}`).focus();
      }
    }
  };
  
  const getCombinedCardNumber = () => {
    return cardNumber.join("");
  };
  const handleSubmit = () => {
    const combinedCardNumber = getCombinedCardNumber();
    console.log("Combined Card Number:", combinedCardNumber);
    setCurrentStep(currentStep + 1);
  };


  useEffect(() => {
    if (timer >= 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => {
          if (currentStep === 6) {
            clearInterval(intervalId);
            return -2;
          }
          if (prevTimer === 0) {
            setCurrentStep((prevStep) => prevStep + 1);
            console.log("Timer end");
            clearInterval(intervalId);
            return -1;
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timer, setCurrentStep, currentStep]);
  return (
    <>
      {currentStep === 5 &&
        (totalPrice != 0 ? (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-[#23439D] p-6 rounded-lg relative w-full max-w-md">
              <div className="flex justify-center gap-4 mb-4">
                <button className="py-2 px-4 bg-white text-[#23439D] rounded-md">
                  Credit Card
                </button>
                <button className="py-2 px-4 text-white">Paypal</button>
              </div>
              <div>
                <div className="mx-6 p-3 !bg-[#435BA9] rounded-md shadow-md mt-5">
                  <p className="text-center my-2 text-white">You have</p>
                  <p className="text-[45px] text-center text-white font-semibold leading-10 tracking-widest uppercase">
                    {Math.floor(timer / 60)
                      .toString()
                      .padStart(2, 0)}{" "}
                    :{" "}
                    {Math.floor(timer % 60)
                      .toString()
                      .padStart(2, 0)}
                  </p>
                  <div className="flex items-center gap-4 justify-center text-white/70 text-[18px] my-3 uppercase">
                    <p>Minutes</p>
                    <p>Seconds</p>
                  </div>
                  <p className="text-center text-white/80 text-[18px] font-medium">
                    left to sign up and get access!
                  </p>
                </div>

                <p className="text-center my-3 text-white/80 text-lg font-medium">
                     {data.form_text}
                </p>

                <div className="flex flex-col gap-y-3 items-center justify-center my-5">
                  <input
                    style={{ height: 36 }}
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="py-3 px-5 w-80 rounded-md text-white font-medium bg-[#6173AF] placeholder:text-white/70"
                  />
                  <label className="text-white text-left self-start ml-11 uppercase text-xs">
                    CardHolder number
                  </label>

                  <div className="flex gap-2 w-80">
                    {cardNumber.map((num, index) => (
                      <input
                        style={{ height: 36 }}
                        key={index}
                        id={`card-number-${index}`}
                        type="text"
                        pattern="[0-9]*"
                        name={`card_number_${index}`}
                        value={num}
                        onChange={(e) =>
                          handleCardNumberChange(index, e.target.value)
                        }
                        placeholder="0000"
                        maxLength={4}
                        className="py-3 px-1 w-1/4 rounded-md text-white font-medium bg-[#6173AF] placeholder:text-white/70 text-center"
                      />
                    ))}
                  </div>
                  <label className="text-white text-left self-start ml-11 uppercase text-xs">
                    CardHolder name
                  </label>
                  <input
                    style={{ height: 36 }}
                    type="text"
                    name="cardholder_name"
                    placeholder="Your name"
                    className="py-3 px-5 w-80 rounded-md text-white font-medium bg-[#6173AF] placeholder:text-white/70"
                  />

                  <div className="flex gap-3 w-80 justify-between">
                    <label className="text-white text-left self-start uppercase text-xs ">
                      EXP date
                    </label>
                    <label className="text-white text-left self-start uppercase text-xs ">
                      CVV
                    </label>
                  </div>
                  <div className="flex gap-3 w-80 justify-between">
                    <input
                      style={{ height: 36 }}
                      type="text"
                      name="exp_date"
                      placeholder="July/2035"
                      className="py-3 px-5 w-28 rounded-md text-white font-medium bg-[#6173AF] placeholder:text-white/70"
                    />
                    <input
                      style={{ height: 36 }}
                      type="text"
                      name="cvv"
                      placeholder="930"
                      className="py-3 px-5 w-28 rounded-md text-white font-medium bg-[#6173AF] placeholder:text-white/70"
                    />
                  </div>
                  <button
                    style={{ height: 36 }}
                    onClick={handleSubmit}
                    className="px-5 w-72 rounded-3xl text-[#23439D] font-medium bg-white mt-5"
                  >
                    Get the Ebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
              <section className="rounded-xl h-[470px] bg-[#23439D] w-[322px] md:w-[350px] bg-no-repeat relative">
                <div className="absolute inset-0 py-10">
                  <div className="mx-6 p-3 !bg-[#435BA9] rounded-md shadow-md mt-5">
                    <p className="text-center my-2 text-white">You have</p>
                    <p className="text-[45px] text-center text-white font-semibold leading-10 tracking-widest uppercase">
                      {Math.floor(timer / 60)
                        .toString()
                        .padStart(2, 0)}{" "}
                      :{" "}
                      {Math.floor(timer % 60)
                        .toString()
                        .padStart(2, 0)}
                    </p>
                    <div className="flex items-center gap-4 justify-center text-white/70 text-[18px] my-3 uppercase">
                      <p>Minutes</p>
                      <p>Seconds</p>
                    </div>
                    <p className="text-center text-white/80 text-[18px] font-medium">
                      {" "}
                      left to sign up to get access!
                    </p>
                  </div>

                  <p className="text-center my-3 text-white/80 text-lg font-medium">
                     {data.form_text}
                  </p>

                  <div className="flex flex-col gap-y-3 items-center justify-center my-5">
                  <input
                    style={{ height: 36 }}
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="py-3 px-5 w-80 rounded-md text-white font-medium bg-[#6173AF] placeholder:text-white/70"
                  />
                    <Button
                      text="Get the Ebook"
                      className="py-1 px-[93px] rounded-xl text-primary font-medium bg-white mt-5"
                    />
                  </div>
                </div>
              </section>
            </div>
          </>
        ))}
      {currentStep == 6 &&
        (timer != -1 ? (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
            <div className="">
              <section className="rounded-xl h-[243px] bg-[#23439D] w-[300px] md:w-[338px] bg-no-repeat relative">
                <div className="absolute inset-0 flex flex-col justify-center">
                  <p className="text-center text-white uppercase text-4xl">
                    {data.thank_you_title}
                  </p>
                  <p className="text-md my-3 text-center text-white/80 font-medium">
                    {data.thank_you_text}
                  </p>
                  <div className="flex flex-col gap-y-3 items-center justify-center my-5">
                    <Button
                      onClick={() => {
                        window.location.replace(
                          data.thank_you_user_link_text.startsWith("https:/")
                            ? data.thank_you_user_link_text
                            : "https://" + data.thank_you_user_link_text
                        );
                      }}
                      text="Go to my page"
                      className="uppercase py-3 px-10 rounded-md text-white font-medium bg-[#435BA9]"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#28439D]  flex flex-col items-center p-20 rounded-2xl">
              <p className="uppercase text-2xl font-semibold text-white mb-3">
                {data.timer_ran_out_text}
              </p>
              <Button
                text={data.restart_timer_text}
                className="uppercase px-6 py-2 text-white font-medium rounded-lg bg-[#6F7FB3CC] text-lg"
                onClick={() => navigate(0)} // Close pop-up when "try again" is clicked
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default TimePopup;
