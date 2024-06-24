// import React from 'react'

import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [input, setInput] = useState([]);
  useEffect(() => {
    const prodUser = JSON.parse(localStorage.getItem("user-info"));
    console.log(prodUser);
    console.log(prodUser.data);
    if (!prodUser.data.email) {
      navigate("/register");
    }
  }, []);
  const navigate = useNavigate();
  async function search(key, length) {
    if (length > 1) {
      let result = await fetch("" + key);
      result = await result.json();
      setInput(result);
      console.log(input);
    }
  }

  return (
    <div>
      <Header />
      <form>
        <input
          type="text"
          placeholder="search Product"
          value={input.product}
          onChange={(e) => search(e.target.value)}
        />
      </form>
      {input.length > 0 ? (
        <table>
          <thead>
            <th>#</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>DESCRIPTION</th>
            <th>IMAGE</th>
          </thead>
          <tbody>
            {input.map((index, item) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>sumsung</td>
                <td>20000</td>
                <td>very good phone</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </div>
  );
}
