import React from "react";
import "../styles/output.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Cook = () => {
  const { data } = useQuery(gql`
    {
      orders {
        isready
        name
        id
      }
    }
  `);
  console.log(data);
  return (
    <div className="flex">
      <div className="flex-1 h-screen bg-green-500">
        <button>Button</button>
      </div>
      <div className="flex-1 h-screen bg-blue-500"></div>
      <div className="flex-1 h-screen bg-red-500"></div>
      <div className="flex-1 h-screen bg-orange-500"></div>
    </div>
  );
};

export default Cook;
