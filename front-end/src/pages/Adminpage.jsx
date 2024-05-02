import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../components/list/Userlist";
import UserNavBar from "../components/navbars/Usernavbar";
import AdminNavBar from "../components/navbars/Adminnavbar";

import axios from "axios";

export default function AdminPage(props) {
  const navigate = useNavigate();
  const [navbar, setNavBar] = useState();
  const [users, setUsers] = useState([]);

  //validating token
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
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

  const getUserData = async () => {
    axios.defaults.withCredentials = true;
    const response = axios.get("http://localhost:3001/api/users");

    const { data } = await response;
    setUsers(data);
  };
  return (
    <>
      <nav>{navbar ? <AdminNavBar /> : <UserNavBar />}</nav>
      <div>
        <h1>This is the Admin Page!!</h1>
      </div>
      <div>
        <button onClick={getUserData}>Get Users</button>
        <div>
          <UserList users={users} />
        </div>
      </div>
    </>
  );
}
