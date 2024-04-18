import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      if (res.data.status) {
      } else {
        navigate("/");
      }
      console.log(res);
    });
  }, []);

  return (
    <>
      <div style={{ height: "80vh" }}>
        <h1>This is your home Page!</h1>
      </div>
    </>
  );
}
