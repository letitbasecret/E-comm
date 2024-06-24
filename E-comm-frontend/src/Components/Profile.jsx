// import React from 'react'

import { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  useEffect(() => {
    const prodUser = JSON.parse(localStorage.getItem("user-info"));
    console.log("user", prodUser);
    console.log("data", prodUser.data);
    console.log("data", prodUser.data.email);

    if (!prodUser.data.email) {
      navigate("/register");
    }
  }, []);
  const navigate = useNavigate();
  const prodUser = JSON.parse(localStorage.getItem("user-info"));
  console.log(prodUser);
  console.log(prodUser.data);
  console.log(prodUser.data.name);
  // const [user, setUser] = useState({});
  // setUser(prodUser);
  // console.log(user);

  return (
    <div>
      <Header />
      <h1>
        Hello! <span style={{ color: "blue" }}>{prodUser.data.name}</span>
      </h1>
      <p>we hope your have a good time ..</p>
      <div className="change">
        <p>
          change username<button>click</button>
        </p>
        <p>
          change password <button>click</button>
        </p>
      </div>
    </div>
  );
}
