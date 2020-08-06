import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import LandingPageContainer from "./components/LandingPage/LandingPageContainer";
import { Router, Route } from "react-router";
import history from "./utils/history";
import MainPage from "./components/ProfilePage/MainPage";
import { useAuth0 } from "./components/Auth/react-auth0-spa";

const client = new ApolloClient({
    cache: new InMemoryCache(),

    link: new HttpLink({
        uri: "http://localhost:8080/v1/graphql",
        headers: {
            'content-type': 'application/json'
        }
    }),
    connectToDevTools: true
});

interface appProps {
    idToken?: string;
}

const App = (props: appProps) => {
    const { loading, logout } = useAuth0();
    if (loading) {
        return (<div>Loading...</div>);
    }
    return (
        <Router history={history}>
            <div>
                <ApolloProvider client={client}>
                    <Route exact path='/' component={LandingPageContainer} />
                    <Route path='/callback' component={MainPage} />
                </ApolloProvider>
            </div>
        </Router>
    );
}

export default App;