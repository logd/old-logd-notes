import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import React, { useContext } from "react";
import { Auth0Context } from "./Auth0Provider";

export const AuthorizedApolloProvider: React.FC = ({ children }) => {
  const { getTokenSilently } = useContext(Auth0Context);

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });

  const authLink = setContext(async () => {
    const token = await getTokenSilently();
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;
