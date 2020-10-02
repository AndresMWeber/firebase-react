import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { AuthContext } from "../App";
import { Firebase } from "../utils/firebase";

function Auth() {
  let { isLoggedIn } = useContext(AuthContext);
  
  if (isLoggedIn) {
    return (
      <Nav>
        <Nav.Link onClick={() => Firebase().auth.signOut()}>Log Out</Nav.Link>
      </Nav>
    );
  }

  return <Nav></Nav>;
}

export default Auth;
