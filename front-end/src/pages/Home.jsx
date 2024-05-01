import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeHeader from "../components/headers/Welcomeheader";
import PostForm from "../components/forms/postForm";
import UserNavBar from "../components/navbars/Usernavbar";
import AdminNavBar from "../components/navbars/Adminnavbar";

import axios from "axios";

export default function Home() {
  const navigate = useNavigate();
  const [navbar, setNavBar] = useState();
  const [userName, setUserName] = useState('')

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      console.log(res.data);
      if (res.data.status) {
      } else {
        navigate("/");
      }

      setUserName(res.data.username)

      if (res.data.isAdmin) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    });
  }, []);

  return (
    <>
      <nav>{navbar ? <AdminNavBar /> : <UserNavBar />}</nav>
      <PostForm username={userName} />
      <div style={{ height: "80vh" }}>
        <WelcomeHeader />
        <h1>This is your home Page!</h1>
      </div>
    </>
  );
}
