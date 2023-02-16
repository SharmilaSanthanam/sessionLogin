import React, { useEffect, useState } from "react";
import UserUpdate from "./userUpdate";
import { useParams } from "react-router-dom";

import UserHome from "./userhome";

export default function UserDetails({data}) {
  const [userData, setUserData] = useState("");
  const [update, setUpdate] = useState(false);
  const { _id } = useParams();

  useEffect(() => {
    fetch(`https://sessionlogin.onrender.com/api/${_id}`, {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // userData: window.localStorage.getItem(data.user._id),
        token: window.sessionStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        // if (data.data.userType == "Admin") {
        //   setAdmin(true);
        // }

        setUserData(data.data);

        // if (data.data == "token expired") {
        //   alert("Token expired login again");
        //   window.localStorage.clear();
        //   // window.sessionStorage.clear();
        //   window.location.href = "/";
        // }
      });
  }, []);

  return <UserHome userData={userData} />;
}
