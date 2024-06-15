import React, { useState, useEffect } from "react";
import AuthWindow from "../components/AuthWindow/AuthWindow";
import { Formik } from "formik";
import AuthForm from "../components/AuthForm/AuthForm";
import ThirdPartyAuth from "../components/ThirdPartyAuth/ThirdPartyAuth";
import * as Yup from "yup";
import { useNavigate, useSearchParams } from "react-router-dom";
import logo from "../assets/logo.png";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { toast } from "react-toastify";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long.")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "/login",
        {
          email_or_username: values.email,
          password: values.password,
        },
        {
          validateStatus: function (status) {
            return status >= 200 && status < 500;
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        navigate("/dashboard");
      } else if (response.status === 400 || response.status === 401) {
        console.log(response.data.error);
        setError(response.data.error);
      } else {
        setError("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An unexpected error occurred");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = searchParams.get("token");
        if (token) {
          const response = await axios.post(
            `https://api.linkleads.ai/verify/${token}`,
            {
              validateStatus: function (status) {
                return status >= 200 && status < 500;
              },
            }
          );
          if (response.status === 200) {
            const data = response.data;
            toast.success(response.data);
          } else {
          }
        }
      } catch (error) {
        console.error("Error logging in:", error);
        toast.success(error.data.error);
      }
    };

    fetchData();
  }, []);

  return (
    <GoogleOAuthProvider clientId="196601129757-ml62h5tdg52c1h9tlmacalcd83b6vl7b.apps.googleusercontent.com">
      <div className="w-[100%] min-h-screen flex items-center">
        <AuthWindow />
        <section className="w-[100%] lg:w-[50%] min-h-screen flex flex-col items-center justify-center bg-[#FFFFFF44]">
          <figure className="lg:hidden flex gap-5 items-center mb-10">
            <img src={logo} width={50} className="mx-auto" />
            <figcaption className="text-[#10277C] font-semibold font-serif">
              LINK IN BIO
            </figcaption>
          </figure>
          <h3 className="text-center text-[#141414E5] font-semibold text-xl">
            Welcome
          </h3>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
            validateOnChange={true}
            validateOnBlur={true}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
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
                {error && <p className="text-red-500">{error}</p>}
                <p className="ml-auto text-sm text-[#6F74DD]">
                  Forgot password?
                </p>
                <button
                  type="submit"
                  className="bg-[#3855B3] text-white rounded-full w-[100%] py-2 mt-2 hover:bg-white hover:text-[#3855B3] transition-all border border-[#3855B3]"
                >
                  Log in
                </button>
              </form>
            )}
          </Formik>
          <div className="w-[90%] md:w-[75%] lg:w-[60%] gap-4 flex flex-col">
            <ThirdPartyAuth />
            <p className="text-[#828282] text-sm text-center">
              Have no account yet?
            </p>
            <button
              onClick={() => navigate("/auth/signup")}
              className="bg-[transparent] border border-[#3855B3] text-[#3855B3] hover:bg-[#3855B3] hover:text-white transition-all rounded-full w-[100%] py-2"
            >
              Registration
            </button>
          </div>
        </section>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
