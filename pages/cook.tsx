import React from "react";
import "../styles/output.css";
import { useSubscription } from "@apollo/react-hooks";
import gql from "graphql-tag";
import OrderColumn from "../components/order-column";

const Cook = () => {
  const { data } = useSubscription(gql`
    subscription MySubscription {
      orders {
        name
        col
        id
      }
    }
  `);

  if (data === undefined) {
    return <div>Loading...</div>;
  }
  const orders = data.orders.filter(order => order.col === 0);
  const progress = data.orders.filter(order => order.col === 1);
  const ready = data.orders.filter(order => order.col === 2);
  const received = data.orders.filter(order => order.col === 3);

  return (
    <div className="flex mx-2">
      <OrderColumn title="Orders" orders={orders} />
      <OrderColumn title="In Progress" orders={progress} />
      <OrderColumn title="Ready To Serve" orders={ready} />
      <OrderColumn title="Received" orders={received} />
    </div>
  );
};

export default Cook;
