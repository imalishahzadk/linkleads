import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#10277C] border-solid" />
      <div className="text-xl font-semibold">Loading...</div>
    </div>
  );
};

export default Loading;
