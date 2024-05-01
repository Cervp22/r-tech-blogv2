import Maintitle from "../headers/Maintitle";
import LogOutBtn from "../buttons/Logoutbtn";
import "../styles/usernavbar.css";

export default function UserNavBar() {
  return (
    <>
      <nav className="usernav">
        <Maintitle />
        <ul className="usernavlist">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/messages">Messages</a>
          </li>
        </ul>
        <LogOutBtn />
      </nav>
    </>
  );
}