import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AdminPage() {
  const navigate = useNavigate();
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      console.log(res.data);
      if (res.data.isAdmin) {
      } else {
        navigate("/");
      }
    });
  });

  return (
    <>
      <div style={{ height: "80vh" }}>
        <h1>This is the Admin Page!!</h1>
      </div>
    </>
  );
}
