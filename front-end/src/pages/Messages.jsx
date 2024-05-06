import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logoutbtn from "../components/buttons/Logoutbtn";
import UserNavBar from "../components/navbars/Usernavbar";
import AdminNavBar from "../components/navbars/Adminnavbar";
import axios from "axios";

export default function MessagesPage() {
  const navigate = useNavigate();
  const [navbar, setNavBar] = useState();
  const [userId, setUserId] = useState('')

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      console.log(res.data);
      setUserId(res.data.id)
      if (res.data.status) {
      } else {
        navigate("/");
      }

      if (res.data.isAdmin) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    });
  }, []);

  return (
    <>
      <nav>{navbar ? <AdminNavBar userId={userId}/> : <UserNavBar userId={userId}/>}</nav>
      <h1>This is the messages dashboard page</h1>
    </>
  );
}
