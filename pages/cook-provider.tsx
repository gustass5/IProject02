import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "cross-fetch/polyfill";
import Cook from "./cook";

const client = new ApolloClient({
  uri: "https://iproject03.herokuapp.com/v1/graphql"
});

const CookProvider = () => {
  return (
    <ApolloProvider client={client}>
      <Cook />
    </ApolloProvider>
  );
};

export default CookProvider;
