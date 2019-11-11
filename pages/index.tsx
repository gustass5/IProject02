import React from "react";
import "../styles/output.css";
import Link from "next/link";

const Home = () => {
  // useEffect(() => {
  //   async function getDate() {
  //     const res = await fetch("/api/date");
  //     const newDate = await res.json();
  //     setDate(newDate);
  //   }
  //   getDate();
  // }, []);

  return (
    <div className="flex">
      <Link href="/cashier">
        <div className="flex flex-1 h-screen bg-blue-500 justify-center items-center text-4xl cursor-pointer hover:bg-blue-400 hover:text-white">
          Cashier
        </div>
      </Link>
      <Link href="/cook">
        <div className="flex flex-1 h-screen bg-green-500 justify-center items-center text-4xl cursor-pointer hover:bg-green-400 hover:text-white">
          Cook
        </div>
      </Link>
    </div>
  );
};

export default Home;
