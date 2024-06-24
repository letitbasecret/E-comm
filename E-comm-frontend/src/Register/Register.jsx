// import React from 'react'
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    email: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/home");
    }
  }, []);

  const handleChange = (event) => {
    // event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);

    try {
      const result = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application /json",
        },
        body: JSON.stringify(inputs),
      });
      if (result) {
        let data = await result.json();
        localStorage.setItem("user-info", JSON.stringify(data));

        //   setInputs(data);
        console.log(data);
        navigate("/login");
      } else {
        console.log("no data");
      }
    } catch (error) {
      console.log(error);
    } finally {
      alert("Registered successfully");
    }
  };
  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className="col-lg-4 offset-lg-4 m-5">
        <input
          type="text"
          name="name"
          value={inputs.name}
          onChange={handleChange}
          className="form-control m-2"
          placeholder=" Enter your name"
        />
        <input
          type="email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          className="form-control m-2"
          placeholder=" Enter your email"
        />
        <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          className="form-control m-2"
          placeholder=" Enter your password"
        />
        <input type="submit" className="btn btn-dark" />
      </form>
    </div>
  );
}
