import React from "react";

const Popup = ({ onClose }) => {
  // Function to handle image upload
  const handleUploadImage = () => {
    // Implement image upload functionality here
    // This function will be called when the user uploads an image
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Upload Image</h2>
        {/* Add input field for image upload */}
        <input type="file" onChange={handleUploadImage} />
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
