import React, { useContext } from "react";
import { AuthContext } from "../App";

function Auth() {
  let { isLoggedIn, user } = useContext(AuthContext);
  return <h1>Welcome {isLoggedIn && user ? user.email : "newbie"}!</h1>;
}

export default Auth;
