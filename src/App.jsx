import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import React from "react";


export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn ? <Dashboard /> : <Login setLoggedIn={setLoggedIn}/>;
}
