import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ProfileCss/App.css";
import "./ProfileCss/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./ProfileJS/login";
import SignUp from "./ProfileJS/signup";
import UserDetails from "./ProfileJS/userdetails";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (

      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
 
  )
}

export default App;