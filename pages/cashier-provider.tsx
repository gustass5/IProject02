import React from "react";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { split } from "apollo-link";
import { getMainDefinition } from "apollo-utilities";

import "cross-fetch/polyfill";
import Cashier from "./cashier";
import { ApolloClient } from "apollo-boost";

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: "https://iproject03.herokuapp.com/v1/graphql",
  credentials: "same-origin"
});

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `wss://iproject03.herokuapp.com/v1/graphql`,
      options: {
        reconnect: true
      }
    })
  : null;

const link = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

const client = new ApolloClient({ link: link, cache });

const CashierProvider = () => {
  return (
    <ApolloProvider client={client}>
      <Cashier />
    </ApolloProvider>
  );
};

export default CashierProvider;
