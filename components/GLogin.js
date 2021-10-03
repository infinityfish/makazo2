import React from 'react';
import GoogleLogin from 'react-google-login';
import Cookies from 'js-cookie';
function GLogin() {
  const responseGoogle = (response) => {
    console.log(response.accessToken);
    Cookies.set('userAuthToken', JSON.stringify(response.accessToken), {
      expires: 365,
    });
  };
  return (
    <div>
      <GoogleLogin
        clientId="787959829708-pmrggn7s2qgi4pjc7jnj23tj30n2c34f.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default GLogin;
