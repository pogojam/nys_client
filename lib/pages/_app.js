import "../lib/styles.css";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-fetch";

const httplink = new HttpLink({
  uri: "http://localhost:4000/api",
  credentials: "include",
});

export const client = new ApolloClient({
  link: httplink,
  cache: new InMemoryCache(),
  fetch,
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
