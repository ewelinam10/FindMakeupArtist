import * as ReactDOM from 'react-dom';
import './styles/allStyles.scss';
import { Auth0Provider } from "@auth0/auth0-react";
import App from './App';
import React from 'react';



ReactDOM.render(
    <Auth0Provider
        domain="findmakeupartist.eu.auth0.com"
        clientId="MwIqCMFuLIMxsjblEPZiC7FyWXHnxB46"
        redirectUri={'http://localhost:3000/callback'}
    >
        <App />
    </Auth0Provider>, document.getElementById("root"));



//ReactDOM.render(mainRoutes, document.getElementById("root"));
