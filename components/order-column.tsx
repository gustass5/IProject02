import React from "react";
import Order from "./order";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const OrderColumn = props => {
  const [moveOrder] = useMutation(MUTATION_UPDATE);

  const moveNext = (id: number, col: number) => {
    if (col === 3) {
      return;
    }
    col += 1;
    moveOrder({ variables: { id, col } });
  };

  const moveBack = (id: number, col: number) => {
    if (col === 0) {
      return;
    }
    col -= 1;
    moveOrder({ variables: { id, col } });
  };

  return (
    <div className="flex-1 h-screen bg-gray-100">
      <div className="w-full text-center text-4xl border-b truncate">
        {props.title}
      </div>
      {props.orders.map(order => (
        <Order
          order={order}
          moveNext={(id: number, col: number) => moveNext(id, col)}
          moveBack={(id: number, col: number) => moveBack(id, col)}
        />
      ))}
    </div>
  );
};

const MUTATION_UPDATE = gql`
  mutation Move($id: Int, $col: Int) {
    update_orders(where: { id: { _eq: $id } }, _set: { col: $col }) {
      returning {
        id
        col
      }
    }
  }
`;

export default OrderColumn;
