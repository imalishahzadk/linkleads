import React from "react";
import whitelogo from "../../assets/whitelogo.svg";
import phones from "../../assets/phones.svg";
import bullets from "../../assets/bullets.svg";

const AuthWindow = () => {
  return (
    <section className="hidden lg:flex bg-[#10277C] min-h-screen p-10 flex-col justify-between w-[50%]">
      <figure className="flex gap-4 text-white w-fit">
        <img src={whitelogo} width={20} className="mx-auto" />
        <figcaption className="text-white font-semibold font-serif">
          LINK IN BIO
        </figcaption>
      </figure>
      <article className="flex flex-col gap-10">
        <div className="relative">
          <img src="Back.svg" alt="" className="absolute right-1/2 transform translate-x-1/2 w-44" />
          {/* <img className="image-behind" src="Back.svg" alt="" /> */}
          <img src={phones} className="w-[40%] mx-auto translate-y-10" />
        </div>
        <div>
          <h3 className="text-center text-white font-semibold text-xl">
            Welcome aboard my friend
          </h3>
          <p className="text-center text-white font-light mt-2">
            just a couple of clicks and we start
          </p>
        </div>
        <img src={bullets} className="w-[10%] mx-auto" />
      </article>
      <p className="h-20">&nbsp;</p>
    </section>
  );
};

export default AuthWindow;
