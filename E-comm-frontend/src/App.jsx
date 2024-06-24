// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Add from "./Components/Add";
import Update from "./Components/Update";
import Show from "./Components/Show";
import Search from "./Components/Search";
import Register from "./Register/Register";
import Login from "./Register/Login";
import Header from "./Components/Header";
import NoPage from "./Register/NoPage";
import Profile from "./Components/Profile";

// import Header from "./Components/Header";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />{" "}
          <Route path="/update/:id" element={<Update />} />{" "}
          <Route path="/show" element={<Show />} />{" "}
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Routes>{" "}
      </BrowserRouter>{" "}
    </>
  );
}

export default App;
