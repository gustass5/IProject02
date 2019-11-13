import React from "react";
import "../styles/output.css";
import { useSubscription, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Cashier = () => {
  const { data } = useSubscription(gql`
    subscription MySubscription {
      orders {
        isready
        name
      }
    }
  `);

  const [addOrder, data02] = useMutation(MUTATION);
  console.log(data);
  return (
    <div>
      <button
        onClick={() => {
          addOrder({ variables: { isready: false, name: "Pizza" } });
        }}
      >
        ASDSAD
      </button>
      <div>
        {data !== undefined &&
          data.orders.map((order, index) => <div>{order.name}</div>)}
      </div>
    </div>
  );
};

const MUTATION = gql`
  mutation MyMutation($isready: Boolean, $name: String) {
    insert_orders(objects: { isready: $isready, name: $name }) {
      returning {
        id
      }
    }
  }
`;

export default Cashier;
