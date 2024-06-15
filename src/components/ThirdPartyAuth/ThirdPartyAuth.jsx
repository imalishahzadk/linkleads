import React, { useRef } from "react";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";

const ThirdPartyAuth = () => {
  const navigate = useNavigate();
  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      try {
        const response = await axios.post(`/auth/google`, {
          user: codeResponse,
        });
        console.log(response.data);
        navigate("/dashboard");
      } catch (error) {
        console.log("Login Error:", error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
    scope: ["openid"],
  });

  const responseFacebook = async (codeResponse) => {
    console.log(codeResponse);
    try {
      const response = await axios.post(`/auth/facebook`, {
        user: codeResponse,
      });
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log("Login Error:", error);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin();
  };

  const handleFacebookLogin = () => {
    document.querySelector(".metro").click();
  };

  const googleLogOut = () => {
    googleLogout();
  };

  return (
    <>
      <article className="flex w-[100%] items-center gap-5 mt-2">
        <p className="w-[100%] bg-[#E6E9FA] py-[0.1px]" />
        <p className="text-[#828282]">OR</p>
        <p className="w-[100%] bg-[#E6E9FA] py-[0.1px]" />
      </article>
      <div className="flex gap-2 w-[100%]">
        <button
          onClick={handleGoogleLogin}
          className="bg-[transparent] text-[#3855B3] hover:bg-[#3855B3] hover:text-white transition-all rounded-full w-[100%] py-2 border border-[#3855B3] flex gap-2 justify-center w-1/2"
        >
          <img src={google} alt="Google" />
          <p>Google</p>
        </button>
        <FacebookLogin
          appId="341479311910261"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="hidden"
          textButton="Facebook"
        />
        <button
          onClick={handleFacebookLogin}
          className="bg-[transparent] text-[#3855B3] hover:bg-[#3855B3] hover:text-white transition-all rounded-full w-[100%] py-2 border border-[#3855B3] flex gap-2 justify-center w-1/2"
        >
          <img
            src={facebook}
            alt="Facebook"
            style={{ width: "22px", height: "22px" }}
          />
          <p>Facebook</p>
        </button>
      </div>
    </>
  );
};

export default ThirdPartyAuth;
