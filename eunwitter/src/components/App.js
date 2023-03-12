import React, { useState } from "react";
import AppRouter from "./Router";
import { auth } from "../fbase";

function App() {
  console.log(auth.currentUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn}/>
    <footer>&copy; {new Date().getFullYear()} Eunwitter</footer>
    </>
  );
}

export default App;
