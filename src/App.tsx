import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import LandingPageContainer from "./components/LandingPage/LandingPageContainer";
import { Router, Route } from "react-router";
import history from "./utils/history";
import RegisterAuth0 from "./components/RegisterPage/RegisterAuth0";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: "http://localhost:8080/v1/graphql",
        headers: {
            'content-type': 'application/json'
        }

    }),
});

const App = () => {
    return (
        <Router history={history}>
            <div>
                <ApolloProvider client={client}>
                    <Route exact path='/' component={LandingPageContainer} />
                    <Route path='/register' component={RegisterAuth0} />
                </ApolloProvider>
            </div>
        </Router>
    );
}

export default App;