import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../components/navbars/Adminnavbar";
import UserNavBar from "../components/navbars/Usernavbar";
import axios from "axios";

export default function UserProfile() {
  const navigate = useNavigate();

  const [navbar, setNavBar] = useState();
  const [userId, setUserId] = useState('')

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      setUserId(res.data.id)
      if (res.data.isAdmin) {
      } else {
        navigate("/");
      }
      if (res.data.isAdmin) {
        setNavBar(true);
      } else {
        setNavBar(false);
        navigate("/login");
      }
    });
  });
  return (
    <>
      <nav>{navbar ? <AdminNavBar userId={userId}/> : <UserNavBar userId={userId} />}</nav>
      <div>
        <h1>This is the User Profile Page</h1>
      </div>
    </>
  );
}
