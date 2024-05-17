import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfilePicForm from "../components/forms/Profilepicformdisplay";
import ProfileInfo from "../components/list/Profileinfo";
import UserPostList from "../components/list/UserPostList";

import AdminNavBar from "../components/navbars/Adminnavbar";
import UserNavBar from "../components/navbars/Usernavbar";
import photo from "../images/lospatojosv2_like_icon.jpg";
import axios from "axios";

import "../components/styles/userprofile.css";

export default function UserProfile() {
  const navigate = useNavigate();

  const [navbar, setNavBar] = useState();
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState("");
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      setUserData(res.data);
      setUserId(res.data.id);
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
  }, []);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(`http://localhost:3001/api/posts`).then((res) => {
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
      <div className="parentdiv">
        <div className="profilepicdiv">
          <ProfilePicForm photo={photo} />
        </div>
        <div className="profileinfo">
          <ProfileInfo userData={userData} />
        </div>
      </div>
      <div className="userpostdiv">
        <UserPostList userPost={userPost} userId={userId} />
      </div>
    </>
  );
}
