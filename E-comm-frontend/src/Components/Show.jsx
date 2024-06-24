// import React from 'react'

import { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Show() {
  useEffect(() => {
    const prodUser = JSON.parse(localStorage.getItem("user-info"));
    console.log(prodUser);
    console.log(prodUser.data);
    if (!prodUser.data.email) {
      navigate("/register");
    }
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="product">
        <div className="prodImage"></div>
        <div className="prodDetails">
          <h1>Product Name</h1>
          <p>Product price</p>
          <p>Product Description</p>
        </div>
      </div>
    </div>
  );
}
