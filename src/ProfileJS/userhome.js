import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

export default function UserHome({ userData }) {
  // const [userdata, setUserdata] = useState("");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // const userUpdate = () => {
  //       window.location.href = "./user-update";
  // };

  const logOut = (event) => {
    axios.get(`http://localhost:5000/api/logout`)
      .then(result => {
        window.sessionStorage.clear();
        window.localStorage.clear();
        window.location.href = "/";
       
      })
    }
window.addEventListener("storage", logOut);

    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            <h3>Welcome {userData.name} </h3>
            {/* Name<h1>{userData.name}</h1>
            Email <h1>{userData.email}</h1> */}
            <br />

            <button onClick={logOut} className="btn btn-primary">
              Log Out
            </button>&nbsp; &nbsp;

            {/* <button type="submit" className="btn btn-primary" onClick={() => navigate("/user-update/"+`${userData.user._id}`)}>
              Update
            </button> */}
          </div>

        </div>
      </div>
    );
  }
