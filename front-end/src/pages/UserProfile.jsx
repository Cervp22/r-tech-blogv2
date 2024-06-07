import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfilePicForm from "../components/forms/Profilepicformdisplay";
import ProfileInfo from "../components/list/Profileinfo";
import UserPostList from "../components/list/UserPostList";

import AdminNavBar from "../components/navbars/Adminnavbar";
import UserNavBar from "../components/navbars/Usernavbar";
import axios from "axios";

import "../components/styles/userprofile.css";

export default function UserProfile() {
  const navigate = useNavigate();

  const [navbar, setNavBar] = useState();
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState("");
  const [userProfilePic, setUserProfilePic] = useState("");
  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    const fetchProfilePicData = async () => {
      try {
        const response = await axios
          .get(`http://localhost:3001/api/profilepics/user/${userId}`, {
            withCredentials: true,
          })
          .then((res) => {
            setUserProfilePic(res.data.profilePic[0].profileImage);
          });
      } catch (err) {
        console.error("Error fetching posts:");
      }
    };

    fetchProfilePicData();
  }, [userId]);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      setUserData(res.data);
      setUserId(res.data.id);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios
          .get(`http://localhost:3001/api/posts/userpost/${userId}`, {
            withCredentials: true,
          })
          .then((res) => {
            setUserPost(res.data);
          });
      } catch (err) {
        console.error("Error fetching posts:");
      }
    };

    fetchData();
  }, [userId]);

  //converts images to based64 / text for mongodb database
  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setUserProfilePic(reader.result);
    };
    reader.onerror = (error) => {
      console.log("error ", error);
    };
  }

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
          <ProfilePicForm
            convertToBase64={convertToBase64}
            profileImage={userProfilePic}
            userid={userId}
          />
        </div>
        <div className="profileinfo">
          <ProfileInfo userData={userData} />
        </div>
      </div>
      <div id="profilecontainer">
        <div id="profileleftThing"></div>

        <div id="profilecontent">
          <div className="userpostdiv">
            <UserPostList userPost={userPost} />
          </div>
        </div>

        <div id="profilerightThing"></div>
      </div>
    </>
  );
}
