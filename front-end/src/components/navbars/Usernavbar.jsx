import {useNavigate} from "react-router-dom"
import Maintitle from "../headers/Maintitle";
import LogOutBtn from "../buttons/Logoutbtn";
import "../styles/usernavbar.css";

export default function UserNavBar(props) {
  const navigate = useNavigate()
  const {userId} = props

function  goToProfile() {
  navigate(`/profile/${userId}`)
  
}

  return (
    <>
      <nav className="usernav">
        <Maintitle />
        <ul className="usernavlist">
          <li>
            <a href="/home">Home</a>
          </li>
          <li onClick={goToProfile} className="profilelink">
            Profile
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
