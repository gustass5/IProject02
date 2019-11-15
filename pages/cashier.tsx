import React, { useState } from "react";
import "../styles/output.css";
import { useSubscription, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import OrderColumn from "../components/order-column";

const Cashier = () => {
  const { data } = useSubscription(gql`
    subscription MySubscription {
      orders {
        name
        col
        id
      }
    }
  `);

  const [addOrder] = useMutation(MUTATION);
  const [name, changeName] = useState("");

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  const orders = data.orders.filter(order => order.col === 0);
  const progress = data.orders.filter(order => order.col === 1);
  const ready = data.orders.filter(order => order.col === 2);
  const received = data.orders.filter(order => order.col === 3);
  return (
    <div>
      <input
        placeholder="Enter pizza name..."
        className="border-b shadow p-1 m-2"
        value={name}
        onChange={event => changeName(event.target.value)}
      />
      <button
        className="mx-2"
        onClick={() => {
          if (name !== "") {
            addOrder({ variables: { col: 0, name } });
            changeName("");
          }
        }}
      >
        Add
      </button>
      <div className="flex mx-2">
        <OrderColumn title="Orders" orders={orders} />
        <OrderColumn title="In Progress" orders={progress} />
        <OrderColumn title="Ready To Serve" orders={ready} />
        <OrderColumn title="Received" orders={received} />
      </div>
    </div>
  );
};

const MUTATION = gql`
  mutation ADD($col: Int, $name: String) {
    insert_orders(objects: { name: $name, col: $col }) {
      returning {
        id
      }
    }
  }
`;
// const SerialPort = require("serialport");
// const serialPort = new SerialPort("/dev/ttyACM0", {
//   baudrate: 9600
// });

export default Cashier;
