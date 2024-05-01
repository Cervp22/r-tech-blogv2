import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logoutbtn from "../components/buttons/Logoutbtn";
import UserNavBar from "../components/navbars/Usernavbar";
import AdminNavBar from "../components/navbars/Adminnavbar";

import axios from "axios";

export default function AdminPage() {
  const navigate = useNavigate();
  const [navbar, setNavBar] = useState();
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      console.log(res.data);
      if (res.data.isAdmin) {
      } else {
        navigate("/");
      }

      if (res.data.isAdmin) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    });
  });

  return (
    <>
      <nav>{navbar ? <AdminNavBar /> : <UserNavBar />}</nav>
      <div style={{ height: "80vh" }}>
        <h1>This is the Admin Page!!</h1>
      </div>
    </>
  );
}