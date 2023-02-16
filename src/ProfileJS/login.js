import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    if (!email || !password) {
      return alert("Please fill out all the fields");

    } else {
      e.preventDefault();

      console.log(email, password);
     
      fetch(`https://sessionlogin.onrender.com/api/login`, {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
    
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          console.log(data.status);
          console.log(data.user.email);
          console.log(data.userSession.id);
          if (data.status === "Ok") {
            alert("login successful");
            // window.localStorage.setItem("token", data.data);
            // window.localStorage.setItem("loggedIn", true);

            sessionStorage.setItem("sessionId", data.userSession.id);
            sessionStorage.setItem("userId", data.user._id);

            localStorage.setItem("sessionId", data.userSession.id);
            window.localStorage.setItem("loggedIn", true);

            if (localStorage.getItem(data.userSession.id) && localStorage.getItem(true)) {
              // navigate("http:localhost:3000/userDetails/" + `${data.user._id}`)
              // window.location.href = "/userDetails";
            }
            else {
              window.location.href = "/";
            }

          } else {
            alert("Please enter correct details", `${data}`);
          }
        });
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="./sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
