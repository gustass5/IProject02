import React from "react";

const Order = props => {
  return (
    <div
      className={`relative flex items-center justify-center flex-col mb-2 m-1 bg-white animate shadow-md ${
        props.order.col === 2
          ? "bg-green-200"
          : props.order.col === 3
          ? "opacity-50"
          : ""
      }`}
    >
      <div
        className="absolute m-1 top-0 right-0 rounded-full h-5 w-5 cursor-pointer hover:bg-gray-600 font-bold flex items-center justify-center text-gray-700 bg-gray-500 ml-auto"
        onClick={() => props.delete(props.order.id)}
      >
        x
      </div>
      <div className="flex py-4 w-full items-center justify-between">
        <div className="flex-1">
          <img className="w-20 mx-auto" src="pizza.png" />
        </div>
        <div className="flex-1 text-center">
          <div className="my-4 text-xl">{props.order.name}</div>
        </div>
      </div>
      <div className="flex w-full justify-between cursor-pointer">
        <div
          className={`flex-1 py-2 text-center ${
            props.order.col === 0
              ? "bg-gray-400 text-gray-300 cursor-not-allowed"
              : " hover:bg-gray-200"
          }`}
          onClick={() => props.moveBack(props.order.id, props.order.col)}
        >
          Back
        </div>
        <div
          className={`flex-1 py-2 text-center ${
            props.order.col === 3
              ? "text-gray-500 cursor-not-allowed"
              : " hover:bg-gray-200"
          }`}
          onClick={() => props.moveNext(props.order.id, props.order.col)}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Order;
