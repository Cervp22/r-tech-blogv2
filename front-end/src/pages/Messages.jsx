import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import FriendRequestList from "../components/list/friendrequestlist";
import ChatRoom from "../components/buttons/chatroomcomp";
import UserNavBar from "../components/navbars/Usernavbar";
import AdminNavBar from "../components/navbars/Adminnavbar";
import FriendRequestListbtn from "../components/buttons/friendrequestcomp";
import axios from "axios";

const socket = io("http://localhost:3001");

export default function MessagesPage() {
  const navigate = useNavigate();
  const [navbar, setNavBar] = useState();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    //console.log(socket);
  }, []);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      console.log(res.data);
      setUserName(res.data.username);
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

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
    } else {
      alert("#");
    }
  };

  return (
    <>
      <nav>
        {navbar ? (
          <AdminNavBar userId={userId} />
        ) : (
          <UserNavBar userId={userId} />
        )}
      </nav>
      <FriendRequestListbtn friendrequestlist={<FriendRequestList />} />
      <ChatRoom />
    </>
  );
}
