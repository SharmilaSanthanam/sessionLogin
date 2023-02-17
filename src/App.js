import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./SessionCss/App.css";
import "./SessionCss/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./SessionJs/login";
import SignUp from "./SessionJs/signup";
import Home from "./SessionJs/home";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
<Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <Home /> : <Login />}
          />
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      </Router>
  )
}
export default App;