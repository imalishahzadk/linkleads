import React, { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import BackIcon from "../assets/backIcon.svg";
import YoutubeIcon from "../assets/youtubeIcon.svg";
import StoreItem from "../components/StoreItem/StoreItem";
import AmazonIcon from "../assets/amazon.svg";
import AddIcon from "../assets/addItem.svg";
import AddProduct from "../components/AddProduct/AddProduct";
import Loading from "../components/Loading/Loading";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";
import CategoryItem from "../components/CategoryItem/CategoryItem";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import NewStoreModel from "../components/Models/NewStore";

const Store = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [openStoreModel, setOpenStoreModel] = useState(false);
  const [productSelected, setProductSelected] = useState(false);
  const [showProductCard, setShowProductCard] = useState(false);
  const [selectedStore, setSelectedStore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRenderUI, setShouldRenderUI] = useState(false);
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setselectedProduct] = useState(null);
  const navigate = useNavigate();
  

  const handleEdit = async (id) => {
    console.log(id)
    const product = products.find(
      (products) => products.id === id
    );
    console.log(product)
    setselectedProduct(product)
    
    // Move to the next step when Add Product button is clicked
    setCurrentStep(3);
    // Set productSelected to false
    setProductSelected(false);
    // Set showProductCard to true
    setShowProductCard(true); 

  };

  const handleDelete= async (id) => {
    try {
      await axios.delete(`/product/${id}`);
      setProducts(
        products.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.error("Error deleting basic_link:", error.message);
    }
  };

  useEffect(() => {
    // Simulate initial loading time
    const initialLoadingTimeout = setTimeout(() => {
      setIsLoading(false);
      setShouldRenderUI(true);
    }, 1000);
    // Cleanup function to clear timeout
    const fetchData = async () => {
      try {
        const response = await axios.get("/store/all", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Data received:", response.data);

        if (response.status === 200) {
          console.log(response.data);
          setStores(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    return () => clearTimeout(initialLoadingTimeout);
  }, []);

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

  const loadProducts = async (storeId) => {
    try {
      const response = await axios.get("/product/all", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Data received:", response.data);

      if (response.status === 200) {
        const filteredProducts = response.data.filter(
          (product) => product.store_id === storeId
        );
        console.log(filteredProducts);
        setProducts(filteredProducts);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
    setShouldRenderUI(true);
  };

  const handleSelect = (storeId) => {
    setIsLoading(true);
    setShouldRenderUI(false);
    loadProducts(storeId);
    // Move to the next step when a store is selected
    setCurrentStep(2);
    // Set productSelected to true
    setProductSelected(true);
    // Set selected store
    setSelectedStore(storeId);
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
    <>
      {isLoading && <Loading />}
      {shouldRenderUI && (
        <div className="relative">
          {/* divs for bg */}
          {currentStep !== 3 && (
            <div className="flex flex-col">
              <div className="flex flex-col items-start justify-start px-5 py-2 md:p-20 bg-white h-[60vh]">
                {/* Conditionally render based on the currentStep */}
                {currentStep === 1 && (
                  <>
                    <p className="text-2xl md:text-3xl ml-11 font-normal">
                      Select Store
                    </p>
                    <p className="my-2 md:my-3 ml-12 max-w-xs text-black/60 text-sm md:text-base font-normal leading-2">
                      Select the store first where you want to add the product.
                    </p>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <p className="text-2xl md:text-4xl font-normal">
                      Current Products
                    </p>
                    <p className="my-4 md:my-9 max-w-xs text-black/60 text-sm md:text-base font-normal leading-6">
                      In the current free version, you can view your existing
                      products and can add maximum 3 products.{" "}
                    </p>
                  </>
                )}
              </div>
              <div className="bg-primary h-[50vh]"></div>
            </div>
          )}

          {/* Render steps based on the currentStep */}
          {currentStep === 1 &&
            (stores.length === 0 ? (
              <></>
            ) : (
              <div className="absolute ml-20 mr-20 mt-12 inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
                {stores.map((store) => (
                  <StoreItem
                    icon={store.image+'?'+Math.random()}
                    title={store.title}
                    onClickHandler={() => handleSelect(store.id)}
                  />
                ))}
              </div>
            ))}

          {currentStep === 1 &&
            (stores.length === 0 ? (
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Render StoreItem component with the Add Product button */}
                <div>
                  <div className="p-5 w-[70%] flex flex-col items-center justify-center bg-white rounded-xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[413px] md:h-[413px] border border-gray-200">
                    <img src={AddIcon} alt="" />
                    <p className="text-center text-lg md:text-2xl font-medium my-2 md:my-3">
                      No Store created yet
                    </p>
                    <p className="text-center text-sm md:text-base font-normal text-black/50">
                      Simply create your first Store.
                    </p>
                    <p className="text-center text-sm md:text-base font-normal text-black/50">
                      Just click on the button.
                    </p>
                    <button
                      onClick={() => setOpenStoreModel(true)}
                      className="mt-2 md:mt-4 flex items-center text-white px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-[#3855B3] hover:bg-[#3855b3da] duration-300"
                    >
                      + Add Store
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            ))}

          <NewStoreModel
            openStoreModel={openStoreModel}
            onClose={() => setOpenStoreModel(false)}
          />

          {currentStep === 2 &&
            (products.length == 0 ? (
              <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6">
                {/* Render StoreItem component with the Add Product button */}
                <div>
                  <div className="p-5 w-[70%] flex flex-col items-center justify-center bg-white rounded-xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[413px] md:h-[413px] border border-gray-200">
                    <img src={AddIcon} alt="" />
                    <p className="text-center text-lg md:text-2xl font-medium my-2 md:my-3">
                      No Products created yet
                    </p>
                    <p className="text-center text-sm md:text-base font-normal text-black/50">
                      Simply create your first product.
                    </p>
                    <p className="text-center text-sm md:text-base font-normal text-black/50">
                      Just click on the button.
                    </p>
                    <button
                      onClick={handleAddProduct}
                      className="mt-2 md:mt-4 flex items-center text-white px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-[#3855B3] hover:bg-[#3855b3da] duration-300"
                    >
                      + Add Product
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-14 md:mt-0 absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-5 xl:gap-11">
                  {products.map((product, index) => (
                    <div key={index}>
                      <ProductCard
                        id={product.id}
                        imageUrl={product.image+'?'+Math.random()}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                        productName={product.title}
                        price={product.price.toString().split(".")[0] || "00"}
                        decimalPoint={
                          product.price.toString().split(".")[1] || "00"
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute top-[6rem] md:top-[16rem] right-10 md:right-[2rem] lg:right-[4rem] xl:top-[14rem] xl:right-[9rem]">
                  <button className="w-15 h-15" onClick={handleAddProduct}>
                  <img src={AddIcon} alt="" />
                  </button>
                </div>
              </>
            ))}

          {currentStep === 3 && (
            <div className="absolute inset-0 flex gap-6">
              <AddProduct
                product={selectedProduct}
                storeId={selectedStore}
                setCurrentStep={setCurrentStep}
                currentStep={currentStep}
              />
            </div>
          )}

          {/* Render the Back button if productSelected or showProductCard is true */}
          <div className="absolute bottom-4 md:bottom-16 right-4 md:right-16 flex gap-3">
            {currentStep > 1 && (productSelected || showProductCard) && (
              <Button
                onClick={handleBack}
                text="Back"
                src={BackIcon}
                className="mt-2 md:mt-4 flex flex-row-reverse items-center text-white px-3 md:px-10 py-2 rounded-full font-normal text-sm md:text-xs bg-[#3855B3] hover:bg-[#3855b3da] duration-300"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Store;
