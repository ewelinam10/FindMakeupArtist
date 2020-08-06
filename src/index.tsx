import * as ReactDOM from 'react-dom';
import './styles/allStyles.scss';
import { Auth0Provider } from "./components/Auth/react-auth0-spa";

import React from 'react';
import { AUTH_CONFIG } from './components/Auth/auth0-variables';



ReactDOM.render(<Auth0Provider client_id={AUTH_CONFIG.clientId} domain={AUTH_CONFIG.domain} redirect_uri={AUTH_CONFIG.callbackUrl} />, document.getElementById("root"));




//ReactDOM.render(mainRoutes, document.getElementById("root"));
