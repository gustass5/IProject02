import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "cross-fetch/polyfill";
import Cashier from "./cashier";

const client = new ApolloClient({
  uri: "https://iproject03.herokuapp.com/v1/graphql"
});

const CashierProvider = () => {
  return (
    <ApolloProvider client={client}>
      <Cashier />
    </ApolloProvider>
  );
};

export default CashierProvider;
