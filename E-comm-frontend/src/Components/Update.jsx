// import React from 'react'

import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getData(id);
  }, []);
  async function getData(id) {
    alert(id);
    let result = await fetch("/" + id);
    result = await result.json();
    setData(result);
  }
  console.log(data);
  useEffect(() => {
    const prodUser = JSON.parse(localStorage.getItem("user-info"));
    console.log(prodUser);
    console.log(prodUser.data);
    if (!prodUser.data.email) {
      navigate("/register");
    }
  }, []);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event, id) => {
    event.preventDefault();
    alert(id);
    try {
      const result = await fetch(
        "http://127.0.0.1:8000/api/update/" + id + "?_method=PUT",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
            Accept: "application /json",
          },
          body: JSON.stringify(inputs),
        }
      );
      if (result) {
        let data = await result.json();
        // localStorage.setItem("user-info", JSON.stringify(data));

        //   setInputs(data);
        console.log(data);
        navigate("/login");
      } else {
        console.log("no data");
      }
    } catch (error) {
      console.log(error);
    } finally {
      alert("updated successfully");
    }
  };
  return (
    <div>
      <Header />
      <form className="col-lg-4 offset-lg-4 m-5">
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          className="form-control m-2"
          placeholder=" Enter your name"
          defaultValue={data.name}
        />
        <input
          type="text"
          name="price"
          value={inputs.price || ""}
          onChange={handleChange}
          className="form-control m-2"
          placeholder=" Enter price"
          defaultValue={data.price}
        />
        <input
          type="text"
          name="description"
          value={inputs.description || ""}
          onChange={handleChange}
          className="form-control m-2"
          placeholder="description"
          defaultValue={data.description}
        />
        <input
          type="file"
          name="image"
          value={inputs.image || ""}
          onChange={handleChange}
          className="form-control m-2"
          //   placeholder=" Enter your name"
          defaultValue={data.image}
        />

        <input
          type="submit"
          onClick={() => {
            handleSubmit(data.id);
          }}
          className="btn btn-dark"
        />
      </form>
    </div>
  );
}
