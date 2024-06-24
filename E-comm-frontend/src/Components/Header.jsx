import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Header() {
  const navigate = useNavigate();
  const logout = () => {
    alert("are you sure , you want logout?");
    localStorage.removeItem("user-info");
    // window.location.reload();
    navigate("/login");
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link>
            {" "}
            <h1>E-Comm</h1>
          </Link>
        </div>
        {localStorage.getItem("user-info") ? (
          <>
            <div className="home">
              <Link to="/home">Home</Link>
              <Link to="/add">Add</Link>
              <Link to="/update">update</Link>
              <Link to="/show">show</Link>
              <Link to="/search">Search</Link>
            </div>
            <div className="logout">
              {" "}
              <Link to="/logout" onClick={logout}>
                Logout
              </Link>
              <Link to="/profile">Profile</Link>
            </div>
          </>
        ) : (
          <>
            <div className="link">
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
