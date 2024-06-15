import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import BackIcon from "../assets/backIcon.svg";
import RightArrow from "../assets/rightArrow.svg";
import YoutubeIcon from "../assets/youtubeIcon.svg";
import AddIcon from "../assets/addItem.svg";
import AddEbook from "../components/AddEbook/AddEbook";
import CategoryItem from "../components/CategoryItem/CategoryItem";
import Loading from "../components/Loading/Loading";
import { GoPlus } from "react-icons/go";
import CategoryModal from "../components/Models/Category";
import axios from "axios";
import { toast } from "react-toastify";

const LeadMagnet = () => {
  const [openCategoryModel, setOpenCategoryModel] = useState(false);
  const [currentStep, setCurrentStep] = useState(2);
  const [productSelected, setProductSelected] = useState(false);
  const [showProductCard, setShowProductCard] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [categories, setCategories] = useState({});
  const [selectedItem, setSelectedItem] = useState(0);
  useEffect(() => {
    console.log("currentstep", currentStep);
  }, [currentStep]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/category/all", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Data received:", response.data);

        if (response.status === 200) {
          console.log(response.data);
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }

      setIsLoading(false);
      setShouldRenderUI(true);
    };

    fetchData();
  }, []);

  const selectCategoryItem = async (item) => {
    setSelectedItem(item);
  };
  const handleBack = () => {
    // Move to the previous step only if the current step is not the first step (step 1)
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);

      // Reset productSelected and showProductCard states if moving back from step 3 to step 2
      if (currentStep === 3) {
        setProductSelected(true);
        setShowProductCard(false);
      }
    }
  };
  const handleContinue = () => {
    if (currentStep == 2 && selectedCategory == 0) {
      toast.error("select a category");
      return;
    }
    if (currentStep == 3 && selectedItem == 0) {
      toast.error("Select an item");
      return;
    }

    // Increment currentStep by one
    console.log("before", currentStep);
    setCurrentStep((prevStep) => prevStep + 1);
    console.log("after", currentStep);
  };

  const handleSelect = (categoryId) => {
    // Move to the next step when a store is selected
    setCurrentStep(2);
    // Set productSelected to true
    setProductSelected(true);
    // Set selected store
    setCategories(categoryId);
  };

  const handleAddProduct = () => {
    // Move to the next step when Add Product button is clicked
    setCurrentStep(3);
    // Set productSelected to false
    setProductSelected(false);
    // Set showProductCard to true
    setShowProductCard(true);
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
                    Select Category
                  </p>
                  <p className="my-4 md:my-9 max-w-xs text-black/60 text-sm md:text-base font-normal leading-6">
                    Select the category first where you want to add the lead
                    magnet.
                  </p>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <p className="text-2xl md:text-4xl font-normal">
                    {/* <p className="text-2xl md:text-4xl font-normal"> */}
                    Select Videos / Ebooks / Links
                  </p>
                  <p className="my-4 md:my-9 max-w-xs text-black/60 text-sm md:text-base font-normal leading-6">
                    {/* <p className="my-4 md:my-9 max-w-xs text-black/60 text-sm md:text-base font-normal leading-6"> */}
                    In the current free version, you can view your existing
                    links/lead magnets and videos and can add maximum 3.
                  </p>
                </>
              )}
            </div>
            <div className="bg-primary h-[50vh]"></div>
          </div>
          {/* Render steps based on the currentStep */}
          {currentStep === 2 &&
            (categories.length == 0 ? (
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Render StoreItem component with the Add Product button */}
                <div className="p-5 w-[70%] flex flex-col items-center justify-center bg-white rounded-xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[413px] md:h-[340px] border border-gray-200">
                  <img src={AddIcon} alt="" />
                  <p className="text-center text-lg md:text-2xl font-medium my-2 md:my-3">
                    No Category created yet
                  </p>
                  <p className="text-center text-sm md:text-base font-normal text-black/50">
                    Simply create your first category.
                  </p>
                  <p className="text-center text-sm md:text-base font-normal text-black/50">
                    Just click on the button.
                  </p>
                  <button
                    className="mt-2 md:mt-4 flex items-center text-white px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-[#3855B3] hover:bg-[#566183da] duration-300"
                    onClick={() => setOpenCategoryModel(true)}
                  >
                    + Add Category
                  </button>
                </div>
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
                <div className="absolute top-[6rem] md:top-[16rem] right-10 md:right-[2rem] lg:right-[4rem] xl:top-[14rem] xl:right-[9rem]">
                  <button
                    className="w-15 h-15"
                    onClick={() => setOpenCategoryModel(true)}
                  >
                    <img src={AddIcon} alt="" />
                  </button>
                </div>
              </>
            ))}

          <CategoryModal
            openCategoryModel={openCategoryModel}
            onClose={() => setOpenCategoryModel(false)}
          />

          {currentStep === 3 && (
            <>
              <div className="mt-14 md:mt-0 absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-5 lg:gap-11">
                <CategoryItem
                  icon={YoutubeIcon}
                  selected={selectedItem == 1}
                  title="Video"
                  onClickHandler={() => selectCategoryItem(1)}
                />
                <CategoryItem
                  icon={YoutubeIcon}
                  selected={selectedItem == 2}
                  title="Ebooks"
                  onClickHandler={() => selectCategoryItem(2)}
                />
                <CategoryItem
                  icon={YoutubeIcon}
                  selected={selectedItem == 3}
                  title="Link"
                  onClickHandler={() => selectCategoryItem(3)}
                />
              </div>
            </>
          )}

          {currentStep === 4 && (
            <div className="absolute inset-0 flex gap-6 my-5">
              {selectedItem == 2 && (
                <AddEbook
                  categoryId={selectedCategory}
                  setCurrentStep={setCurrentStep}
                  currentStep={currentStep}
                />
              )}
              {selectedItem != 2 && "Add page"}
            </div>
          )}

          {/* Render the Back button if productSelected or showProductCard is true */}
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
    </div>
  );
};

export default LeadMagnet;
