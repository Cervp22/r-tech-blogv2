import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logoutbtn from "../components/buttons/Logoutbtn";
import UserNavBar from "../components/navbars/Usernavbar";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      console.log(res.data);
      if (res.data.status) {
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <nav>
        <UserNavBar />
      </nav>
      <div style={{ height: "80vh" }}>
        <Logoutbtn />

        <h1>This is your home Page!</h1>
      </div>
    </>
  );
}
