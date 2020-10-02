import React, { createContext, useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import { auth } from "firebase";

export const AuthContext = createContext(null);

function App() {
  let [user, setUser] = useState(null);
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unregisterAuthObserver = auth().onAuthStateChanged((currentUser) => {
      console.log("AUTH STATE CHANGE:", currentUser);
      if (currentUser) {
        if (user !== currentUser) {
          console.log('new user is updated, updating.')
          setUser(currentUser);
          setIsLoggedIn(true);
        }
      } else {
        setUser(undefined);
        setIsLoggedIn(false);
      }
    });
    return () => unregisterAuthObserver();
  });

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <Header />
        <Home />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
