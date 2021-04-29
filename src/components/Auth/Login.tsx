import * as React from 'react';
import { useAuth0 } from "../Auth/react-auth0-spa";
const Login = () => {
  const { loading, loginWithRedirect } = useAuth0();
  if (loading) {
    return (<div>Loading...</div>);
  }
  return (
    <React.Fragment>
      <button id="qsLoginBtn" className="btn-margin loginBtn" onClick={() => { loginWithRedirect({}) }} >Zarejestruj się</button>
    </React.Fragment>


  );
};

export default Login;
