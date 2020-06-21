import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import React, { useContext } from "react";
// import ApolloClient from "apollo-boost";
// import { useAuth0 } from "../react-auth0-spa";
import { Auth0Context } from "./Auth0Provider";
// import ApolloProvider from "react-apollo";

export const AuthorizedApolloProvider: React.FC = ({ children }) => {
  const { user, getTokenSilently } = useContext(Auth0Context);
  console.log("user: ", user);

  const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
  });

  const authLink = setContext(async () => {
    const token = await getTokenSilently();
    console.log("token: ", token);
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
