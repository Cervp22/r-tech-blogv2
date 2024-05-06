import React from "react";
import {useNavigate} from "react-router-dom"
import Maintitle from "../headers/Maintitle";
import LogOutBtn from "../buttons/Logoutbtn";
import "../styles/adminnavbar.css";

export default function AdminNavBar(props) {
  const navigate = useNavigate()
  const {userId} = props

function  goToProfile() {
  navigate(`/profile/${userId}`)
  
}

  return (
    <div className="admindiv">
      <nav className="adminnav">
        <Maintitle />
        <ul className="adminnavlist">
          <li>
            <a href="/home">Home</a>
          </li>
          <li onClick={goToProfile} className="profilelink">
            Profile
          </li>
          <li>
            <a href="/messages">Messages</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
        </ul>
        <LogOutBtn />
      </nav>
    </div>
  );
}
