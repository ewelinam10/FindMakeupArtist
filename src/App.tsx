
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import LandingPageContainer from "./components/LandingPage/LandingPageContainer";
import { Router, Route } from "react-router";
import history from "./utils/history";
import MainPage from "./components/ProfilePage/MainPage";
import { useAuth0 } from "./components/Auth/react-auth0-spa";
import Logo from "./components/LandingPage/Logo";

const createApolloClient = (authToken?: string): ApolloClient<any> => {
    let headers: any = {}
    if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`; //jesli to zadziala to powinnam nie podawac userid
    }
    headers['x-hasura-admin-secret'] = '4H7ZEVPrauU5olGW_Wwv6tz6rB4pfdLNINVasHCbtOgiSG2dLWz-Z2wLCOkhqVEd';
    headers['x-hasura-role'] = 'user';
    //headers['x-hasura-user-id'] = 'EWELIN';
    headers['content-type'] = 'application/json';

    return new ApolloClient({
        cache: new InMemoryCache(),
        connectToDevTools: true,
        link: createHttpLink({ headers: headers, uri: 'http://localhost:8080/v1/graphql' })
    });
};



interface appProps {
    idToken?: string;
}

const App = (props: appProps) => {
    const { loading, logout } = useAuth0();
    if (loading) {
        return (<div>Loading...</div>);
    }

    const tekst = 'Na tym właśnie polega JSX'
    const elementSX = <div>{tekst}</div>;


    const client: ApolloClient<any> = createApolloClient(props.idToken);
    return (
        <Router history={history}>
            <Logo />
            <div>
                <ApolloProvider client={client}>

                    <Route exact path='/' component={LandingPageContainer} />
                    <Route path='/callback' component={MainPage} />
                    <Route path='/search' component={MainPage} />
                </ApolloProvider>
            </div>
        </Router>
    );
}

export default App;