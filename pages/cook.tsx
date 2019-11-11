import React from "react";
import "../styles/output.css";

const Cook = () => {
  return (
    <div className="flex">
      <div className="flex-1 h-screen bg-green-500">Col</div>
      <div className="flex-1 h-screen bg-blue-500">Col</div>
      <div className="flex-1 h-screen bg-red-500">Col</div>
      <div className="flex-1 h-screen bg-orange-500">Col</div>
    </div>
  );
};

export default Cook;
