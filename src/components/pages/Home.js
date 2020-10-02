import React, { useContext } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { auth } from "firebase";
import Welcome from "../Welcome";
import { AuthContext } from "../../App";
import { Firebase } from "../../utils/firebase";

function Home() {
  let { isLoggedIn } = useContext(AuthContext);
  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/profile",
    signInOptions: [
      auth.GoogleAuthProvider.PROVIDER_ID,
      auth.FacebookAuthProvider.PROVIDER_ID,
    ],
  };
  
  return (
    <Jumbotron fluid>
      <Container>
        <Welcome />
        <p>React Context is amazing!</p>
        {!isLoggedIn && (
          <div>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={Firebase().auth}
            />
          </div>
        )}
      </Container>
    </Jumbotron>
  );
}

export default Home;
