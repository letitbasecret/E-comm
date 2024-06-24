import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
    localStorage.setItem("data", JSON.stringify(result));
  }
  console.log(data);

  async function prodDelete(id) {
    alert(id);
    let result = await fetch("http://127.0.0.1:8000/api/list/+id", {
      method: "delete",
    });
    result = await result.json();
    console.log(result);
  }
  return (
    <div>
      <Header />
      <p>PRODUCTS-LIST</p>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NAME</th>
            <th scope="col">PRICE</th>
            <th scope="col">DESCIPTION</th>
            <th scope="col">IMAGE</th>
            <th scope="col">DELETE</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((index, item) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>@{item.description}</td>
              <td>@{item.image}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    prodDelete(item.id);
                  }}
                >
                  DELETE
                </button>
              </td>
              <td>
                <button className="btn btn-primary">
                  {" "}
                  <Link to={"update/" + item.id}>edit</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
