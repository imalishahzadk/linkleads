import React, { useState, useEffect } from "react";
import CloseSVG from "../../assets/close.svg";
import CategorySVG from "../../assets/categoryIcon.svg";
import DeleteSVG from "../../assets/deleteIcon.svg";
import EditSVG from "../../assets/editIcon.svg";
import Button from "../Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CategoryModal = ({ openCategoryModel, onClose }) => {
  const navigate = useNavigate();
  const [id, setId] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [manageCategoryOpen, setManageCategoryOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(`/category/${categoryId}`);
      setCategories(
        categories.filter((category) => category.id !== categoryId)
      );
    } catch (error) {
      console.error("Error deleting category:", error.message);
    }
  };
  const handleEditCategory = async (categoryId) => {
    setManageCategoryOpen(false);
    const category = categories.find((category) => category.id === categoryId);
    setId(category.id);
    setTitle(category.title);
    setImageSrc(category.image);
    const elem = document.getElementById("categorytitle");
    elem.value = category.title;
  };

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
    };

    fetchData();
  }, [manageCategoryOpen]);

  const uploadCategory = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      if (!imageSrc) formData.append("image", image);

      if (!id)
        await axios.post("/category", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      else
        await axios.post(`/category/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

      setTitle("");
      setId(null);
      setImage(null);
      setImageSrc(null);
      navigate(0);
      const elem = document.getElementById("categorytitle");
      elem.value = "";
    } catch (error) {
      console.error("Error uploading category:", error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    setImageSrc(null);
  };

  const openFilePicker = () => {
    const elem = document.getElementById("filepicker");
    elem.click();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 ${openCategoryModel ? "" : "hidden"}`}
      >
        <div className="flex items-center justify-center min-h-screen px-4 pt-6 pb-4 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div>
              {/* <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4"> */}
              <div>
                {/* <div className="sm:flex sm:items-start"> */}
                <div className="p-3 md:p-5 sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-medium text-gray-900">
                    Create a Category
                  </h3>
                </div>
                <div className="h-1 border-b border-b-[#D9D9D9]" />
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button
                    onClick={() => {
                      onClose();
                      setManageCategoryOpen(false);
                    }}
                  >
                    <img src={CloseSVG} alt="Close" />
                  </button>
                </div>
              </div>
              <div className="mt-5 p-3 md:p-5">
                <label
                  htmlFor="categorytitle"
                  className="block font-semibold text-black/70"
                >
                  Title
                </label>
                <input
                  id="categorytitle"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div className="mt-5 p-3 md:p-5">
                <label
                  htmlFor="filepicker"
                  className="block font-semibold text-black/70"
                >
                  Upload File
                </label>
                <div className="flex items-center gap-5 mt-3">
                  <button
                    type="button"
                    onClick={openFilePicker}
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium bg-transparent border-2 border-gray-300 rounded-3xl sm:mt-0 sm:w-auto sm:text-sm hover:bg-gray-100 hover:shadow-md"
                  >
                    {image ? "Change" : "Upload"} file
                  </button>
                  <p className="italic text-sm text-[#B2B2B2]">
                    {image ? image.name : "No File Chosen"}
                  </p>
                  <input
                    id="filepicker"
                    type="file"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
              </div>
              <p className="font-semibold text-black/70 mx-5 mt-2">Preview</p>
              <div className="mt-3 mx-3 border-2 border-[#E5E7EB] py-8 flex justify-center rounded-xl">
                <div className="category-preview">
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="Preview" />
                  ) : (
                    <img src={CategorySVG} alt="Preview" />
                  )}
                  <p>{title}</p>
                </div>
              </div>
            </div>
            <div className="mt-5 px-4 py-3 bg-gray-50 sm:px-6 flex items-center gap-3 flex-row-reverse">
              <Button
                text="Save"
                onClick={() => {
                  onClose();
                  uploadCategory();
                  setManageCategoryOpen(false);
                }}
                className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-3xl sm:mt-0 sm:w-auto sm:text-sm hover:bg-[#3855b3da] duration-300"
              ></Button>
              <Button
                text="Manage Category"
                onClick={() => setManageCategoryOpen(true)}
                className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium bg-transparent border-2 border-gray-300 rounded-3xl sm:mt-0 sm:w-auto sm:text-sm"
              ></Button>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Category Modal */}
      {manageCategoryOpen && (
        <div className="fixed md:top-32 right-[14%] md:right-[14%] z-50 md:w-[400px]">
          <div className="flex items-center justify-center min-h-screen">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div>
                <div className="sm:flex sm:items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 p-5">
                    Manage Category
                  </h3>
                  <div className="absolute top-0 right-0 pt-5 pr-4">
                    <button onClick={() => setManageCategoryOpen(false)}>
                      <img src={CloseSVG} alt="Close" />
                    </button>
                  </div>
                </div>
                <div className="h-1 border-b border-b-[#D9D9D9]" />
                <div className="p-5">My Category</div>
                <div className="mt-2 px-auto flex gap-3 rounded-xl px-5">
                  <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex flex-col items-center justify-center border-2 border-primary px-3 py-3 rounded-xl"
                      >
                        <img
                          src={category.image+'?'+Math.random()}
                          alt={category.id}
                          style={{ height: "40px" }}
                        />
                        <p className="mt-4">{category.title}</p>
                        <div className="flex items-center gap-3 text-xl my-3">
                          <button
                            className="shadow-icon p-3 cursor-pointer bg-none border-none"
                            onClick={() => handleEditCategory(category.id)}
                          >
                            <img src={EditSVG} alt="" />
                          </button>
                          <button
                            className="shadow-icon p-3 cursor-pointer bg-none border-none"
                            onClick={() => handleDeleteCategory(category.id)}
                          >
                            <img src={DeleteSVG} alt="" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-4 py-4 bg-gray-50">
                <Button
                  text="+ Add New Category"
                  onClick={() => setManageCategoryOpen(true)}
                  className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-3xl sm:mt-0 sm:w-auto sm:text-sm"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryModal;
