import React from "react";
import "../styles/output.css";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Cashier = () => {
  // const { data } = useSubscription(gql`
  //   subscription MySubscription {
  //     orders {
  //       isready
  //       name
  //     }
  //   }
  // `);

  // console.log(data);
  return <div></div>;
};

export default Cashier;
