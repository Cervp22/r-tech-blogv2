import { useEffect } from "react";
import axios from "axios";



export default function AdminPage() {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <div style={{ height: "80vh" }}>
        <h1>This is the Admin Page!!</h1>
      </div>
    </>
  );
}
