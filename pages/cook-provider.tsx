import React from "react";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import "cross-fetch/polyfill";
import { ApolloClient } from "apollo-boost";
import Cook from "./cook";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://iproject03.herokuapp.com/v1/graphql",
  credentials: "same-origin"
});

const wsLink = new WebSocketLink({
  uri: `wss://iproject03.herokuapp.com/v1/graphql`,
  options: {
    reconnect: true
  }
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({ link: link, cache });

const CookProvider = () => {
  return (
    <ApolloProvider client={client}>
      <Cook />
    </ApolloProvider>
  );
};

export default CookProvider;
