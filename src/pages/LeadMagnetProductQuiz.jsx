import React, { useState, useEffect } from "react";
import BackIcon from "../assets/backIcon.svg";
import YoutubeIcon from "../assets/youtubeIcon.svg";
import AddIcon from "../assets/addItem.svg";
import Loading from "../components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import RightArrow from "../assets/rightArrow.svg";
import AddEbook from "../components/AddEbook/AddEbook";
import ProductItems from "components/ProductItems/ProductItems";
import CategoryItem from "../components/CategoryItem/CategoryItem";
import CategoryModal from "../components/Models/Category";
import axios from "axios";
import { toast } from "react-toastify";
import BookSVG from "../assets/book.svg";
import BookIMG from "../assets/ebook-landing.png";
import EbookMiniLanding from "../components/EbookMiniLanding/EbookMiniLanding";
import TimePopup from "components/LeadMagnetQuizTimer/LeadMagnetQuizTimer";

const Store = () => {
  const { username } = useParams();
  const [currentStep, setCurrentStep] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [categories, setCategories] = useState([]);
  const [ebooks, setEbooks] = useState([]);
  const [selectedebooks, setSelectedEbooks] = useState([]);
  const [data, setData] = useState({});
  const [timer, setTimer] = useState(-2);

  useEffect(() => {}, [currentStep]);
  const filteredEbooks = ebooks.filter(
    (product) => product.store_id === selectedCategory
  );
  const totalPrice = selectedebooks.reduce(
    (sum, product) => sum + product.price,
    0
  );
  useEffect(() => {
    const fetchEbooks = async () => {
      try {
        const response = await axios.get("/product/all?username=" + username, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setEbooks(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/store/all?username=" + username, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchLandingData = async () => {
      try {
        const response = await axios.get(
          "/lead-magnet/get-product-landing-page?username=" + username,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchData = async () => {
      await Promise.all([fetchCategories(), fetchEbooks(), fetchLandingData()]);

      setIsLoading(false);
      setShouldRenderUI(true);
    };

    fetchData();
  }, []);

  useEffect(() => {}, []);

  const handleGetAccess = async () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setTimer(parseInt(data.timer_duration));
  };

  const handleBack = () => {
    if (currentStep > 2) {
      setCurrentStep((prevStep) => prevStep - 1);
      setSelectedEbooks([]);
    }
  };
  const handleContinue = () => {
    if (currentStep == 2 && selectedCategory == 0) {
      toast.error("select a category");
      return;
    }
    if (currentStep == 3 && selectedebooks.length == 0) {
      toast.error("Select an item" + selectedebooks);
      return;
    }

    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleEbookSelect = (ebookId) => {
    setSelectedEbooks((prevSelected) => {
      const isSelected = prevSelected.some((product) => product.id === ebookId);

      if (isSelected) {
        return prevSelected.filter((product) => product.id !== ebookId);
      } else {
        const ebookToAdd = ebooks.find((product) => product.id === ebookId);
        return [...prevSelected, ebookToAdd];
      }
    });
  };

  return (
    <div className=" relative">
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <div>
          {/* divs for bg */}
          <div className="flex flex-col">
            <div className="flex flex-col items-start justify-start px-5 py-2 md:p-12 lg:p-16 xl:p-24 bg-white h-[50vh]">
              {/* Conditionally render based on the currentStep */}
              {currentStep === 2 && (
                <>
                  <p className="text-2xl md:text-4xl font-normal">
                    Select Store
                  </p>
                  <p className="my-4 md:my-9 max-w-xs text-black/60 text-sm md:text-base font-normal leading-6">
                    Select the store first where you want to add the lead
                    magnet.
                  </p>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <p className="text-2xl md:text-4xl font-normal">
                    {/* <p className="text-2xl md:text-4xl font-normal"> */}
                    Select product
                  </p>
                  <p
                    className="my-4 md:my-9 max-w-4xl text-black/60 text-sm md:text-base font-normal leading-6"
                    style={{ zIndex: 9999 }}
                  >
                    {/* <p className="my-4 md:my-9 max-w-xs text-black/60 text-sm md:text-base font-normal leading-6"> */}
                    Choose from{" "}
                    {
                      categories.find(
                        (category) => category.id === selectedCategory
                      ).title
                    }{" "}
                    Products. Select and continue to view mini landing page with
                    details and registration. Then enter your email to receive
                    it for free.
                    <br></br>
                    <input
                      type="checkbox"
                      name="has_timer"
                      id=""
                      className="mt-2"
                      onChange={(e) => {
                        const isChecked = e.target.checked;
                        if (isChecked) {
                          const filteredEbooks = ebooks.filter(
                            (product) => product.store_id === selectedCategory
                          );
                          setSelectedEbooks(filteredEbooks);
                        } else {
                          setSelectedEbooks([]);
                        }
                      }}
                    />
                    Get All the Selected Ebooks?
                  </p>
                </>
              )}
              {currentStep >= 4 && (
                <>
                  <p className="text-2xl md:text-4xl font-normal">
                    product Mini Landing Page
                  </p>
                </>
              )}

              {currentStep >= 4 && (
                <div className="absolute ml-20 mr-20 inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
                  {selectedebooks.map((product) => {
                return (
                  <EbookMiniLanding
                  data={data}
                  icon={BookIMG}
                  onClickHandler={() => handleGetAccess()}
                />
                );
              })}
                 
                </div>
              )}
            </div>
            <div className="bg-primary h-[50vh]"></div>
          </div>
          {/* Render steps based on the currentStep */}
          {currentStep === 2 &&
            (categories.length == 0 ? (
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
                No category
              </div>
            ) : (
              <>
                <div className="mt-14 md:mt-0 absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-5 xl:gap-11">
                  {categories.map((category, index) => (
                    <CategoryItem
                      selected={selectedCategory == category.id}
                      icon={category.image}
                      title={category.title}
                      onClickHandler={() => setSelectedCategory(category.id)}
                    />
                  ))}
                </div>
              </>
            ))}

          {currentStep === 3 && (
            <div className="absolute ml-20 mr-20 inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
              {filteredEbooks.map((product) => {
                const isSelected = selectedebooks.some(
                  (ebookt) => ebookt.id === product.id
                );
                return (
                  <ProductItems
                    selected={isSelected}
                    key={product.id}
                    icon={product.image || BookSVG}
                    title={product.title}
                    price={product.price}
                    onClickHandler={() => {
                      handleEbookSelect(product.id);
                    }}
                  />
                );
              })}
            </div>
          )}

          <div className="absolute bottom-4 md:bottom-16 right-10 md:right-20 flex gap-3">
            {currentStep <= 3 && (
              <>
                <Button
                  onClick={handleBack}
                  text="Back"
                  src={BackIcon}
                  className="mt-2 md:mt-4 flex flex-row-reverse items-center text-white px-3 md:px-10 py-2 rounded-full font-medium text-sm md:text-xs bg-[#3855B3] hover:bg-[#3855b3da] duration-300"
                />
                <Button
                  onClick={handleContinue}
                  text="Continue"
                  src={RightArrow}
                  className="mt-2 md:mt-4 flex items-center text-black px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-white"
                />
              </>
            )}
          </div>
        </div>
      )}

      <TimePopup
        timer={timer}
        setTimer={setTimer}
        data={data}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        totalPrice={totalPrice}
      ></TimePopup>
    </div>
  );
};

export default Store;
