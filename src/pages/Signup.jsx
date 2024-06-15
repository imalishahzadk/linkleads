import React, { useState } from "react";
import AuthWindow from "../components/AuthWindow/AuthWindow";
import { Formik } from "formik";
import AuthForm from "../components/AuthForm/AuthForm";
import ThirdPartyAuth from "../components/ThirdPartyAuth/ThirdPartyAuth";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const SignUpSchema = Yup.object().shape({
  "full name": Yup.string().required("Name is Required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  username: Yup.string().required("Username is Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is required"),
  "confirm password": Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password must be repeated"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("/register", {
        email: values.email,
        username: values.username.replace("linkleads.ai/", ""),
        password: values.password,
        name: values["full name"],
        color: "#000000",
      });
      if (response.status === 201) {
        console.log("Registration successful");
        console.log(response.data.message);
        navigate("/auth");
      } else if (response.status === 400 || response.status === 409) {
        setError(response.data.error);
      } else {
        console.log("Unexpected error occurred");
      }
    } catch (error) {
      console.error("Error registering:", error);
      console.log("An unexpected error occurred");
    }
  };

  return (
    <GoogleOAuthProvider clientId="15058651131-rf316mgjb3pbaqbhbuegqnjtilqkplet.apps.googleusercontent.com">
      <div className="w-[100%] min-h-screen flex flex-col lg:flex-row items-center">
        <AuthWindow />
        <section className="w-[100%] lg:w-[50%] min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF44]">
          <figure className="lg:hidden flex gap-5 items-center mb-10">
            <img src={logo} width={50} className="mx-auto" />
            <figcaption className="text-[#10277C] font-semibold font-serif">
              LINK IN BIO
            </figcaption>
          </figure>
          <h3 className="text-center text-[#141414E5] font-semibold text-xl">
            Registration
          </h3>
          <Formik
            initialValues={{
              "full name": "",
              username: "",
              email: "",
              password: "",
              "confirm password": "",
            }}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              handleBlur,
              touched,
              errors,
            }) => (
              <form
                onSubmit={handleSubmit}
                className="mt-10 w-[90%] md:w-[75%] lg:w-[60%] flex flex-col items-center gap-4"
              >
                <AuthForm
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                />
                <button
                  type="submit"
                  className="bg-[#3855B3] text-white rounded-full w-[100%] py-2 mt-2 hover:bg-[transparent] hover:text-[#3855B3] border border-[#3855B3] transition-all"
                >
                  Register
                </button>
              </form>
            )}
          </Formik>
          <div className="w-[90%] md:w-[75%] lg:w-[60%] gap-4 flex flex-col">
            <ThirdPartyAuth />
            <p className="text-[#828282] text-sm text-center">
              Already have an account?
            </p>
            <button
              onClick={() => navigate("/auth")}
              className="bg-[transparent] border border-[#3855B3] text-[#3855B3] rounded-full w-[100%] py-2 hover:bg-[#3855B3] hover:text-white transition-all"
            >
              Log in
            </button>
          </div>
        </section>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;
