import React, { useEffect, useState } from "react";
import CloseSVG from "../../assets/close.svg";
import DeleteSVG from "../../assets/deleteIcon.svg";
import EditSVG from "../../assets/editIcon.svg";
import Button from "../Button/Button";
import { FaAngleDown } from "react-icons/fa";
import LinkImg from "../../assets/linkImg.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewLinkModel = ({ openLinkModel, onClose }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Instagram");
  const [url, setUrl] = useState("");
  const [manageLinksOpen, setManageLinksOpen] = useState(false);
  const [selectedBasicLink, setSelectedBasicLink] = useState("Instagram");
  const [isOthersSelected, setIsOthersSelected] = useState(false);
  const basic_link_types = ["Instagram", "Facebook"]

  const [id, setId] = useState(null);
  const [manageBasicLinkOpen, setManageBasicLinkOpen] = useState(false);
  const [basic_links, setBasicLinks] = useState([]);

  const handleDeleteBasicLink = async (basic_linkId) => {
    try {
      await axios.delete(`/basic-link/${basic_linkId}`);
      setBasicLinks(
        basic_links.filter((basic_link) => basic_link.id !== basic_linkId)
      );
    } catch (error) {
      console.error("Error deleting basic_link:", error.message);
    }
  };
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncated = text.slice(0, maxLength - 5); // reserve space for the ellipsis
    return `${truncated}...`;
  };
  const handleEditBasicLink = async (basic_linkId) => {
    setManageBasicLinkOpen(false);
    const basic_link = basic_links.find(
      (basic_link) => basic_link.id === basic_linkId
    );
    setId(basic_link.id);
    setTitle(basic_link.title);
    console.log(basic_link.url)
    setUrl(basic_link.url);
    if(basic_link_types.includes(basic_link.title))
    setSelectedBasicLink(basic_link.title)
  else{
      setIsOthersSelected(true);
      setSelectedBasicLink("Others")

  }
    const elem = document.getElementById("basic_link_title");
    elem.value = basic_link.title;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/basic-link/all", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Data received:", response.data);

        if (response.status === 200) {
          console.log(response.data);
          setBasicLinks(response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [manageLinksOpen]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title, event.target.value);
  };

  const handleBasicLinkChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedBasicLink(selectedValue);
    if (selectedValue === "Others") {
      setIsOthersSelected(true);
    } else {
      setIsOthersSelected(false);
      setTitle(selectedValue);
    }
  };
  const uploadBasicLink = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("url", url);

      if (!id)
        await axios.post("/basic-link", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      else
        await axios.post(`/basic-link/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

      setTitle("");
      setId(null);
      navigate(0);
      const elem = document.getElementById("basic_link_title");
      elem.value = "";
    } catch (error) {
      console.error("Error uploading basic_link:", error);
    }
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <>
      {/* Add New Link Modal */}
      <div className={`fixed inset-0 z-50 ${openLinkModel ? "" : "hidden"}`}>
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
              <div>
                <div className="p-3 md:p-5 sm:mt-0 sm:text-left">
                  <h3 className="text-lg font-medium text-gray-900">
                    Create a Link
                  </h3>
                </div>
                <div className="h-1 border-b border-b-[#D9D9D9]" />
                <div className="absolute top-0 right-0 pt-4 pr-4">
                  <button onClick={onClose}>
                    <img src={CloseSVG} alt="Close" />
                  </button>
                </div>
              </div>
              <div className="mt-5 p-3 md:p-5">
                <label
                  htmlFor="basic_link_title"
                  className="block font-semibold text-black/70"
                >
                  Title
                </label>
                <input
                  id="basic_link_title"
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Title"
                  className={`mt-1 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm ${
                    isOthersSelected ? "" : "bg-gray-200 cursor-not-allowed"
                  }`}
                  disabled={!isOthersSelected}
                />
                <div className="mt-5 relative">
                  <label
                    htmlFor="basic-link"
                    className="font-semibold text-black/70"
                  >
                    Basic Link *
                  </label>
                  <div className="relative mt-3">
                    <select
                      id="basic-link"
                      value={selectedBasicLink}
                      onChange={handleBasicLinkChange}
                      className="pl-2 pr-8 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                    >
                      <option value="Instagram">Instagram</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Twitter">Twitter</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Dribble">Dribble</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="url"
                      className="font-semibold text-black/70"
                    >
                      Link
                    </label>
                    <p className="text-[#B2B2B2]">
                      Example: https://portfolio.com
                    </p>
                  </div>
                  <input
                    id="url"
                    type="text"
                    value={url}
                    onChange={handleUrlChange}
                    className="mt-3 px-2 block w-full rounded-md border h-10 border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
                  />
                </div>
              </div>
              <p className="font-semibold text-black/70 mx-5">Preview</p>
              <div className="mt-5 mx-5 border-2 border-[#E5E7EB] py-8 flex justify-center rounded-xl">
                <div className="py-6 px-9 sm:px-14 rounded-3xl flex items-center gap-5 border border-[#28439D]">
                  <div>
                    <img src={LinkImg} alt="" />
                  </div>
                  <div>
                    <p className="my-2">{title || selectedBasicLink}</p>
                    <p className="text-gray-400">
                      {url || "https://example.com"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 px-4 py-3 bg-gray-50 sm:px-6 flex items-center gap-3 flex-row-reverse">
              <Button
                text="Save"
                onClick={() => {
                  onClose();
                  uploadBasicLink();
                  setManageLinksOpen(false);
                }}
                className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-3xl sm:mt-0 sm:w-auto sm:text-sm hover:bg-[#3855b3da] duration-300"
              />
              <Button
                text="Manage Link"
                onClick={() => setManageLinksOpen(true)}
                className="mt-3 w-full inline-flex justify-center px-4 py-2 text-sm font-medium bg-transparent border-2 border-gray-300 rounded-3xl sm:mt-0 sm:w-auto sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Manage Links Open Modal */}
      {manageLinksOpen && (
        <div className="fixed md:top-36 right-[3%] md:right-[14%] z-50 md:w-[400px]">
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
                    Manage Links
                  </h3>
                  <div className="absolute top-0 right-0 pt-5 pr-4">
                    <button onClick={() => setManageLinksOpen(false)}>
                      <img src={CloseSVG} alt="Close" />
                    </button>
                  </div>
                </div>
                <div className="h-1 border-b border-b-[#D9D9D9]" />
                <div className="p-5">My Links</div>
                {basic_links.map((link) => (
                  <div className="mx-5 py-6 px-8 my-2 rounded-3xl flex items-center justify-between border border-[#28439D]">
                    <div className="flex items-center gap-3">
                      <img src={LinkImg} alt="" />
                      <div>
                        <p className="my-2">{link.title}</p>
                        <p className="text-gray-400">{truncateText(link.url,20)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="shadow-icon p-2 cursor-pointer bg-none border-none"
                        onClick={() => handleEditBasicLink(link.id)}
                      >
                        <img src={EditSVG} alt="" />
                      </button>
                      <button
                        className="shadow-icon p-2 cursor-pointer bg-none border-none"
                        onClick={() => handleDeleteBasicLink(link.id)}
                      >
                        <img src={DeleteSVG} alt="" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-4 bg-gray-50">
                <Button
                  text="+ Add New Link"
                  onClick={() => setManageLinksOpen(true)}
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

export default NewLinkModel;
