import React from "react";
import "../styles/output.css";
import "../styles/transition.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex">
      <Link href="/cashier-provider">
        <div className="flex flex-1 h-screen bg-gray-100 justify-center items-center text-4xl cursor-pointer hover:bg-gray-700 hover:text-white">
          Cashier
        </div>
      </Link>
      <Link href="/cook-provider">
        <div className="flex flex-1 h-screen bg-gray-100 justify-center items-center text-4xl cursor-pointer hover:bg-gray-700 hover:text-white">
          Cook
        </div>
      </Link>
    </div>
  );
};

export default Home;
