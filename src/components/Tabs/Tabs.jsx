import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import BGIMG from "../../assets/bgimg.jpeg";
import DiscountSVG from "../../assets/discount.svg";
import Loading from "components/Loading/Loading";
import axios from "axios";

const Tabs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [data, setData] = useState({
    accent_color: "#000000",
    text_color: "",
    imagePath: "",
    image: undefined,
    background_id: "",
    template_id: "",
    popup_template_id: "",
    popup_image_1_id: "",
    popup_image_1: "",
    cta_text: "Get access!",
    form_text: "Sign up to get access!",
    description: "Description",
    title: "Title",
    thank_you_title: "Thank you!",
    thank_you_text: "It is on the way to your mailbox, go check!",
    thank_you_user_link_text: "https://linkleads.ai",
    has_timer: true,
    timer_ran_out_text: "Timer ran out",
    restart_timer_text: "Try again",
    redirecting_text: "You will be redirected to my home page...",
    timer_duration: 30,
    include_name: false,
    allow_restart_timer: true,
    email: "",
    background: {
      type: "Image",
      color: "#F8F5FF",
      gradient_1: "#06b6d4",
      gradient_2: "#3b82f6",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/lead-magnet/get-ebook-landing-page", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Data received:", response.data);

        if (response.status === 200) {
          console.log(response.data);
          setData(response.data);
          setIsLoading(false);
          setShouldRenderUI(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();

      // Append JSON data fields to formData
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "image" && key != "background") {
          formData.append(key, value);
        } else if ((key === "background"))
          formData.append(key, JSON.stringify(value));
      });
      console.log(data.image)
      // Append image to formData
      formData.append("image", data.image);

      const response = await axios.post(
        "lead-magnet/ebook-landing-page",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  console.log(data);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file.name);
    setData({ ...data, image: file, imagePath: URL.createObjectURL(file) });
  };

  const openFilePicker = () => {
    const elem = document.getElementById("filepicker");
    elem.click();
  };

  const handleBackgroundOptionChange = (event) => {
    const value = event.target.value;
    setData({ ...data, background: { ...data.background, type: value } });
  };

  const [openTab, setOpenTab] = useState("Landing page");
  return (
    <>
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <>
          <div className="my-3 font-sans flex items-center justify-center overflow-hidden">
            <div className="p-8">
              {/* buttons */}
              <div className="mb-4 flex space-x-3 sm:space-x-4 p-1 bg-gray-200 rounded-3xl">
                <button
                  onClick={() => setOpenTab("Landing page")}
                  className={`flex-1 py-2 px-4 !rounded-3xl transition-all duration-300 ${
                    openTab === "Landing page" ? "bg-white !rounded-3xl" : ""
                  } md:w-1/2 lg:w-1/4 xl:w-1/5`}
                >
                  Landing page
                </button>
                <button
                  onClick={() => setOpenTab("Timer page")}
                  className={`flex-1 py-2 px-4 !rounded-3xl transition-all duration-300 ${
                    openTab === "Timer page" ? "bg-white !rounded-3xl" : ""
                  } md:w-1/2 lg:w-1/4 xl:w-1/5`}
                >
                  Timer page
                </button>
                <button
                  onClick={() => setOpenTab("Thank You page")}
                  className={`flex-1 py-2 px-4 !rounded-3xl transition-all duration-300 ${
                    openTab === "Thank You page" ? "bg-white !rounded-3xl" : ""
                  } md:w-1/2 lg:w-1/4 xl:w-1/5`}
                >
                  Thank You page
                </button>
                <button
                  onClick={() => setOpenTab("Time's Up page")}
                  className={`flex-1 py-2 px-4 !rounded-3xl transition-all duration-300 ${
                    openTab === "Time's Up page" ? "bg-white !rounded-3xl" : ""
                  } md:w-1/2 lg:w-1/4 xl:w-1/5`}
                >
                  Time's Up page
                </button>
              </div>
              {/* landing page content */}
              <div
                className={`${
                  openTab === "Landing page" ? "flex flex-col" : "hidden"
                } transition-all duration-300 bg-white p-4 rounded-lg lg:w-[50vw]`}
              >
                <p className="block text-black/70">Title</p>
                <input
                  id="title"
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                  type="text"
                  placeholder="Deep Blue Home"
                  className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                />
                <p className="block text-black/70 mt-5">Description</p>
                <input
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  placeholder="In-depth guides or reports that provide valuable information on a specific topic relevant to the target audience."
                  className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                />
                <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between">
                  <div className="">
                    <p className="block text-black/70 mt-5">Call to action</p>
                    <input
                      type="text"
                      onChange={(e) =>
                        setData({ ...data, cta_text: e.target.value })
                      }
                      placeholder="Get Access!"
                      className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <p className="block text-black/70 mt-5 mb-2">
                      Choose image for Landing page
                    </p>
                    <input
                      id="filepicker"
                      type="file"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={openFilePicker}
                      className="my-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium bg-transparent border-2 border-gray-300 rounded-3xl sm:mt-0 sm:w-auto sm:text-sm hover:bg-gray-100 hover:shadow-md"
                    >
                      Choose File
                    </button>
                    <p className="block text-black/70">
                      Do you want a timer running?
                    </p>
                    <input
                      type="checkbox"
                      name="has_timer"
                      id=""
                      className="mt-2"
                      onChange={(e) =>
                        setData({ ...data, has_timer: e.target.checked })
                      }
                    />
                    <p className="block text-black/70 mt-2">
                      Background Preferences
                    </p>
                    <div className="max-w-lg mx-auto mt-5">
                      <div className="flex items-center mb-4">
                        <input
                          id="SingleColor"
                          type="radio"
                          name="colorOption"
                          value="SingleColor"
                          className="h-4 w-4 border-gray-300"
                          onChange={handleBackgroundOptionChange}
                        />
                        <label
                          htmlFor="SingleColor"
                          className="text-sm text-gray-400 ml-2 block"
                        >
                          Single Color
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="image"
                          type="radio"
                          name="colorOption"
                          value="Image"
                          defaultChecked
                          className="h-4 w-4 border-gray-300"
                          onChange={handleBackgroundOptionChange}
                        />
                        <label
                          htmlFor="image"
                          className="text-sm font-medium text-gray-400 ml-2 block"
                        >
                          Image
                        </label>
                      </div>
                      <div className="flex items-center mb-4">
                        <input
                          id="GradientColor"
                          type="radio"
                          name="colorOption"
                          value="GradientColor"
                          className="h-4 w-4 border-gray-300"
                          onChange={handleBackgroundOptionChange}
                        />
                        <label
                          htmlFor="GradientColor"
                          className="text-sm font-medium text-gray-400 ml-2 block"
                        >
                          Gradient Color
                        </label>
                      </div>
                    </div>
                    {data.background.type == "GradientColor" && (
                      <div>
                        <p className="block text-black/70 mt-2">
                          Choose Gradient Color
                        </p>
                        <div className="h-6 w-6 overflow-hidden rounded-full inline-flex items-center relative mr-5">
                          <input
                            onChange={(e) =>
                              setData({
                                ...data,
                                background: {
                                  ...data.background,
                                  gradient_1: e.target.value,
                                },
                              })
                            }
                            type="color"
                            defaultValue="#e2e8f5"
                            className="absolute h-16 w-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden border-none m-0 p-0 cursor-pointer"
                          />
                        </div>
                        <div className="h-6 w-6 overflow-hidden rounded-full inline-flex items-center relative">
                          <input
                            onChange={(e) =>
                              setData({
                                ...data,
                                background: {
                                  ...data.background,
                                  gradient_2: e.target.value,
                                },
                              })
                            }
                            type="color"
                            defaultValue="#194761"
                            className="absolute h-16 w-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden border-none m-0 p-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="block text-black/70 mt-2">
                        Choose Background Color
                      </p>
                      <div className="h-6 w-6 overflow-hidden rounded-full inline-flex items-center relative">
                        <input
                          onChange={(e) =>
                            setData({
                              ...data,
                              background: {
                                ...data.background,
                                color: e.target.value,
                              },
                            })
                          }
                          type="color"
                          defaultValue={data.background.color}
                          className="absolute h-16 w-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden border-none m-0 p-0 cursor-pointer"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="block text-black/70 mt-2">
                        Choose accent color
                      </p>
                      <div className="h-6 w-6 overflow-hidden rounded-full inline-flex items-center relative">
                        <input
                          onChange={(e) =>
                            setData({ ...data, accent_color: e.target.value })
                          }
                          type="color"
                          defaultValue={data.accent_color}
                          className="absolute h-16 w-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden border-none m-0 p-0 cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="p-3 border border-gray-300 rounded-xl">
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
                  </div>
                </div>
                {/* buttons */}
                <div className="flex justify-end gap-2 my-5">
                  <div>
                    <Button
                      text="Cancel"
                      className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs"
                    />
                  </div>
                  <div>
                    <Button
                      onClick={handleSubmit}
                      text="Save Changes"
                      className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
                    />
                  </div>
                </div>
              </div>

              {/* timer page content */}
              <div
                className={`${
                  openTab === "Timer page" ? "flex flex-col" : "hidden"
                } transition-all duration-300 bg-white rounded-lg lg:w-[50vw] overflow-hidden`}
              >
                <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between">
                  <div className="relative px-5">
                    <p className="block font-medium text-black/70 mb-2">
                      After Form Submission?
                    </p>
                    <div className="flex items-center mb-2">
                      <input
                        id="redirectImmediately"
                        type="radio"
                        name="redirectOption"
                        value="redirectImmediately"
                        className="h-4 w-4 border-gray-300"
                      />
                      <label
                        htmlFor="redirectImmediately"
                        className="text-sm text-gray-400 ml-2 block"
                      >
                        Redirect immediately
                      </label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        id="viaLink"
                        type="radio"
                        name="redirectOption"
                        value="viaLink"
                        className="h-4 w-4 border-gray-300"
                        defaultChecked
                      />
                      <label
                        htmlFor="viaLink"
                        className="text-sm font-medium text-gray-400 ml-2 block"
                      >
                        Send the link via email
                      </label>
                    </div>

                    <p className="block font-medium text-black/70 mb-2 mt-5">
                      Choose Template
                    </p>
                    <div className="flex items-center mb-2">
                      <input
                        id="Template1"
                        type="radio"
                        name="template"
                        value="Template1"
                        className="h-4 w-4 border-gray-300"
                      />
                      <label
                        htmlFor="Template1"
                        className="text-sm text-gray-400 ml-2 block"
                      >
                        Template1
                      </label>
                    </div>
                    <div className="flex items-center mb-4">
                      <input
                        id="default"
                        type="radio"
                        name="template"
                        value="default"
                        className="h-4 w-4 border-gray-300"
                      />
                      <label
                        htmlFor="default"
                        className="text-sm font-medium text-gray-400 ml-2 block"
                      >
                        Default
                      </label>
                    </div>
                    <p className="block font-medium text-black/70 mb-2 mt-5">
                      Form Title
                    </p>
                    <input
                      onChange={(e) =>
                        setData({ ...data, form_text: e.target.value })
                      }
                      value={data.form_text}
                      type="text"
                      placeholder="Sign up to get access."
                      className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <p className="block font-medium text-black/70 mb-2 mt-4">
                      Timer Duration (seconds)
                    </p>
                    <input
                      type="number"
                      placeholder="30"
                      min={30}
                      max={1000}
                      value={data.timer_duration}
                      onChange={(e) =>
                        setData({ ...data, timer_duration: e.target.value })
                      }
                      onBlur={(e) =>
                        setData({
                          ...data,
                          timer_duration:
                            e.target.value > 30 ? (e.target.value<300?e.target.value:300) : 30,
                        })
                      }
                      className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <p className="block font-medium text-black/70 mb-2 mt-4">
                      Include name
                    </p>
                    <input
                      onChange={(e) =>
                        setData({ ...data, include_name: e.target.checked })
                      }
                      value={data.include_name}
                      type="checkbox"
                      name=""
                      id=""
                    />
                  </div>
                  {/* right side */}
                  <div className="p-3 border border-gray-300 rounded-xl mr-8 mt-2">
                    <section className="rounded-xl h-[395px] bg-[#23439D] w-[322px] md:w-[350px] bg-no-repeat relative">
                      <div className="absolute inset-0">
                        <div className="mx-6 p-3 !bg-[#435BA9] rounded-md shadow-md mt-5">
                          <p className="text-center my-2 text-white">
                            You have
                          </p>
                          <p className="text-[45px] text-center text-white font-semibold leading-10 tracking-widest uppercase">
                            {Math.floor(data.timer_duration / 60)
                              .toString()
                              .padStart(2, 0)}{" "}
                            :{" "}
                            {Math.floor(data.timer_duration % 60)
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
                            type="email"
                            name=""
                            placeholder="example@gmail.com"
                            className="py-3 px-5 w-72 rounded-md text-white font-medium bg-[#6173AF] placeholder:text-white/70"
                          />
                          <Button
                            text="Get the Ebook"
                            className="py-3 px-[93px] rounded-md text-white font-medium bg-[#6173AF]"
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="flex justify-end gap-2 my-5 mr-8">
                  <div>
                    <Button
                      text="Cancel"
                      className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs"
                    />
                  </div>
                  <div>
                    <Button
                      onClick={handleSubmit}
                      text="Save Changes"
                      className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
                    />
                  </div>
                </div>
              </div>

              {/* thank you page content */}
              <div
                className={`${
                  openTab === "Thank You page" ? "flex flex-col" : "hidden"
                } transition-all duration-300 bg-white p-4 rounded-lg lg:w-[50vw]`}
              >
                <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between">
                  <div className="relative">
                    <p className="block font-medium text-black/70 mb-2 mt-5">
                      Title
                    </p>
                    <input
                      onChange={(e) =>
                        setData({ ...data, thank_you_title: e.target.value })
                      }
                      type="text"
                      placeholder="Thank You!"
                      className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <p className="block font-medium text-black/70 mb-2 mt-4">
                      Description
                    </p>
                    <input
                      onChange={(e) =>
                        setData({ ...data, thank_you_text: e.target.value })
                      }
                      type="text"
                      placeholder="It is on the way to your mailbox, go check!"
                      className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <p className="block font-medium text-black/70 mb-2 mt-4">
                      Link to your page
                    </p>
                    {}

                    <input
                      onChange={(e) =>
                        setData({
                          ...data,
                          thank_you_user_link_text: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="www.linkleads.ai/username"
                      className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                  </div>
                  {/* right side */}
                  <div className="p-3 border border-gray-300 rounded-xl">
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
                            text="Go to my page"
                            className="uppercase py-3 px-10 rounded-md text-white font-medium bg-[#435BA9]"
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                  {/* <div>
              <img src={ThankYouSVG} alt="" />
            </div> */}
                </div>
                <div className="flex justify-end gap-2 my-5">
                  <div>
                    <Button
                      text="Cancel"
                      className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs"
                    />
                  </div>
                  <div>
                    <Button
                      onClick={handleSubmit}
                      text="Save Changes"
                      className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
                    />
                  </div>
                </div>
              </div>

              {/* time's up page content */}
              <div
                className={`${
                  openTab === "Time's Up page" ? "flex flex-col" : "hidden"
                } transition-all duration-300 bg-white p-4 rounded-lg lg:w-[50vw]`}
              >
                <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center justify-between">
                  <div className="relative">
                    <p className="block font-medium text-black/70 mb-2 mt-5">
                      Title
                    </p>
                    <input
                      onChange={(e) =>
                        setData({ ...data, timer_ran_out_text: e.target.value })
                      }
                      type="text"
                      placeholder="Out of time!"
                      className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <p className="block font-medium text-black/70 mb-2 mt-4">
                      Restart Button
                    </p>

                    <input
                      onChange={(e) =>
                        setData({ ...data, restart_timer_text: e.target.value })
                      }
                      type="text"
                      placeholder="Try again"
                      className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    />
                    <p className="block font-medium text-black/70 mb-2 mt-4">
                      Allow user to restart timer
                    </p>

                    <input
                      type="checkbox"
                      name=""
                      id=""
                      onChange={(e) =>
                        setData({
                          ...data,
                          allow_restart_timer: e.target.checked,
                        })
                      }
                    />
                  </div>
                  <div className="p-3 rounded-2xl border border-gray-200">
                    <div className="bg-[#28439D] p-20 rounded-2xl max-w-xs flex flex-col justify-center">
                      <p className="uppercase text-2xl font-semibold text-white mb-3 text-wrap text-center">
                        {data.timer_ran_out_text}
                      </p>
                      <Button
                        text={data.restart_timer_text}
                        className="uppercase px-6 py-2 text-white font-medium rounded-lg bg-[#6F7FB3CC] text-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 my-5">
                  <div>
                    <Button
                      text="Cancel"
                      className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs"
                    />
                  </div>
                  <div>
                    <Button
                      onClick={handleSubmit}
                      text="Save Changes"
                      className="border border-gray-300 px-3 md:px-6 py-2 rounded-full font-bold text-xs bg-primary text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Tabs;
