import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Route, Router } from "react-router-dom";

import './styles/App.css';

import { Auth0Provider } from "./components/Auth/react-auth0-spa";
import history from "./utils/history";
import { AUTH_CONFIG } from './components/Auth/auth0-variables';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import UsersExampleList from './components/UserExample';

const onRedirectCallback = (appState: any) => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const mainRoutes = (
  <Router history={history}>
    <Route path="/" render={props => (
      <Auth0Provider
        domain={AUTH_CONFIG.domain}
        client_id={AUTH_CONFIG.clientId}
        redirect_uri={AUTH_CONFIG.callbackUrl}
        onRedirectCallback={onRedirectCallback} />
    )} />
  </Router>
);


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:8080/v1/graphql",
    headers: {
      'content-type': 'application/json'
    }

  }),
});



const App = () => (
  <ApolloProvider client={client}>
    <UsersExampleList></UsersExampleList>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));



//ReactDOM.render(mainRoutes, document.getElementById("root"));
