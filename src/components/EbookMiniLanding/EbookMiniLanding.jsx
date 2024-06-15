import React, { useState } from "react";
import Button from "../Button/Button";
import BGIMG from "../../assets/bgimg.jpeg";

const CategoryItem = ({ data, onClickHandler }) => {

  const handleSelect = () => {
    onClickHandler();
  };


  return (
    <section
      style={{
        background:
          data.background.type === "Image"
            ? `url(${
                data.imagePath || BGIMG
              }) no-repeat center/cover`
            : data.background.type === "SingleColor"
            ? data.background.color
            : data.background.type === "GradientColor"
            ? `linear-gradient(to right, ${data.background.gradient_1}, ${data.background.gradient_2})`
            : undefined,
      }}
      className="rounded-xl h-[440px] w-[285px] relative"
    >
      <div className="absolute inset-0 flex flex-col justify-between">
        <div>
          <p
            style={{ color: data.accent_color }}
            className="text-center mt-10 my-5"
          >
            {data.description}
          </p>
          <p
            style={{ color: data.accent_color }}
            className="text-4xl text-center font-semibold leading-10 tracking-widest uppercase"
          >
            {data.title}
          </p>
          <div className="flex items-center justify-center mt-10">
            {/* <img src={DiscountSVG} alt="" /> */}
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Button
          onClick={handleSelect}
            text={data.cta_text}
            className={`uppercase py-3 px-14 rounded-md font-medium bg-[${data.accent_color}]`}
            style={{
              color: data.background.color,
              backgroundColor: data.accent_color,
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CategoryItem;
