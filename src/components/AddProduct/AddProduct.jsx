import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditSVG from "../../assets/editIcon.svg";
import DeleteSVG from "../../assets/deleteIcon.svg";
import ProductCard from "../ProductCard/ProductCard";
import Button from "../Button/Button";
import axios from "axios";

const AddProduct = ({ storeId, setCurrentStep, currentStep, product }) => {
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    description: "",
    price: "",
    image: null,
    previewProduct: null,
    imageName: "",
    store_id: storeId,
  });
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    if (product) {
      setFormData({ ...product, image: null });
      setImageUrl(product.image);
    }
  },[]);

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
      imageName: file.name,
    });
    console.log(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const uploadProduct = async (e) => {
    e.preventDefault();

    try {

      if(!formData.id)
        if (formData.image)
          await axios.post("/product", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        else {
          toast.success("Select an image!");
          return;
        }
      else{
        await axios.post(`/product/${formData.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        navigate(0);
      }

      toast.success("Product created!");
      setFormData({
        title: "",
        description: "",
        price: "",
        image: null,
        previewProduct: null,
        imageName: "",
        store_id: 0,
      });
      setImageUrl(null);
    } catch (error) {
      console.error("Error uploading category:", error);
      if (error.response.status === 400) {
        toast.error(error.response.data.error);
      }
    }
  };

  const handleDeleteProduct = (index) => {};

  const handleCancel = () => {
    setFormData({
      title: "",
      description: "",
      price: "",
      image: null,
    });
    setCurrentStep(currentStep - 1);
  };
  return (
    <div className="lg:mx-20 w-full">
      <form onSubmit={uploadProduct}>
        <div className="border rounded-lg border-gray-200 bg-white p-3 lg:px-32">
          <p className="my-5 text-2xl font-normal text-black">
            Add New Product
          </p>
          <p className="block text-black/70">Title</p>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={handleFormChange}
            className="mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
          <div className="mt-5 relative">
            <p className="text-black/70">Description</p>
            <div className="relative mt-3">
              <input
                id="description"
                type="text"
                value={formData.description}
                placeholder="Short Description Here"
                onChange={handleFormChange}
                className="pl-2 pr-8 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              />
            </div>
          </div>
          <p className="text-black/70 mt-5">Price</p>
          <div className="flex items-center gap-2 md:gap-20">
            <input
              id="price"
              type="text"
              value={formData.price}
              placeholder="$$$"
              onChange={handleFormChange}
              className="px-2 block rounded-md border sm:w-60 h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
            />

            <div className="flex items-center flex-col">
              <label htmlFor="imageUpload" className="font-normal my-1 sm:mt-5">
                Upload Image
              </label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <label
                htmlFor="imageUpload"
                className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium bg-transparent border-2 border-gray-300 rounded-3xl sm:mt-0 sm:w-auto sm:text-sm hover:bg-gray-100 hover:shadow-md cursor-pointer"
              >
                {formData.imageName || "Upload Image"}{" "}
                {/* Display the image name if available */}
              </label>
            </div>
          </div>
          {/* preview created product */}
          <p className="text-black/70 mt-5">Preview</p>
          <div className="border flex justify-center items-center flex-col md:flex-row gap-2 border-gray-200 rounded-md my-3 py-5">
            <ProductCard
              imageUrl={imageUrl}
              productName={formData.title}
              price={formData.price.toString().split(".")[0] || "00"}
              decimalPoint={formData.price.toString().split(".")[1] || "00"}
            />
          </div>

          <div className="flex justify-between">
            <div className="underline text-[#3855B3] flex flex-col leading-8">
              <Link to="#">View Landing Page</Link>
              <Link to="/customize-product-lead-magnet">View Landing Editor</Link>
              <Link to="#">Email Editor</Link>
            </div>
            <div className="flex items-center gap-3 mt-20 mb-20">
              <Button
                text="Cancel"
                className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-normal text-xs text-black bg-white"
                onClick={handleCancel}
              />
              <Button
                text="Save"
                type="submit"
                className="flex items-center gap-1 border border-gray-300 px-3 md:px-6 py-2 rounded-full font-normal text-xs text-white bg-primary hover:bg-[#3855b3da] duration-300"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
