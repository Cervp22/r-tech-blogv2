import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeHeader from "../components/headers/Welcomeheader";
import PostForm from "../components/forms/postForm";
import UserNavBar from "../components/navbars/Usernavbar";
import AdminNavBar from "../components/navbars/Adminnavbar";
import GloblaPostList from "../components/list/GlobalPostList";

import "../components/styles/homepage.css";
import axios from "axios";

export default function Home(props) {
  const navigate = useNavigate();
  const [navbar, setNavBar] = useState();
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [UsersPost, setUserPost] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      console.log(res);
      if (res.data.status) {
      } else {
        navigate("/");
      }

      setUserName(res.data.username);
      setUserId(res.data.id);

      if (res.data.isAdmin) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/api/posts").then((res) => {
      setUserPost(res.data);
    });
  }, []);

  return (
    <>
      <nav>
        {navbar ? (
          <AdminNavBar userId={userId} />
        ) : (
          <UserNavBar userId={userId} />
        )}
      </nav>

      <div>
        <WelcomeHeader username={userName} />
      </div>
      <div className="postformdiv">
        <PostForm username={userName} id={userId} />
      </div>
      <div>
        <GloblaPostList usersPost={UsersPost} />
      </div>
    </>
  );
}
