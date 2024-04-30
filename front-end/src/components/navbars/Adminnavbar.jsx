import React from "react";
import Maintitle from "../headers/Maintitle";
import LogOutBtn from "../buttons/Logoutbtn";
import "../styles/adminnavbar.css";

export default function AdminNavBar() {
  return (
    <div className="admindiv">
      <nav className="adminnav">
        <Maintitle />
        <ul className="adminnavlist">
          <li>
            <a href="/home">Home</a>
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
