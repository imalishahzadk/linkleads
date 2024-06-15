import React from "react";
import DeleteSVG from "../../assets/deleteIcon.svg";
import EditSVG from "../../assets/editIcon.svg";
import FileSVG from "../../assets/dashboard2.svg";

const ProductCard = ({
  id,
  imageUrl,
  productName,
  price,
  decimalPoint,
  onDelete,
  onEdit,
  borderColor,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  const handleEdit = () => {
    console.log(2332);
    onEdit(id);
  };
  return (
    <div
      className={`${
        borderColor === true
          ? "border border-[#3855B3]"
          : "border border-gray-200"
      } w-80 py-10 px-10 transform rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg overflow-hidden`}
    >
      <img
      className="h-48 w-full object-cover object-center"
      src={imageUrl||FileSVG}
      onError={(e) => { e.target.src = FileSVG; }}
    />
      <div className="p-1 md:p-4">
        <h2 className="mb-2 text-lg font-semibold dark:text-white text-gray-900">
          {productName}
        </h2>
        <p className="mb-2 text-2xl dark:text-gray-300 text-gray-700">
          <sup>$</sup>
          {price}
          <sup>.{decimalPoint}</sup>
        </p>

        <div className="flex items-center justify-center gap-2 md:mt-10">
          {onEdit && (
            <button
              className="shadow-icon p-3 cursor-pointer bg-none border-none"
              onClick={() => handleEdit()}
            >
              <img src={EditSVG} alt="" />
            </button>
          )}
          {onDelete && <button
            className="shadow-icon p-3 cursor-pointer bg-none border-none"
            onClick={() => handleDelete()}
          >
            <img src={DeleteSVG} alt="" />
          </button>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
