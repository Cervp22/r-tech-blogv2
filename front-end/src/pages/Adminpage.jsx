import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserList from "../components/list/Userlist";
import UserNavBar from "../components/navbars/Usernavbar";
import AdminNavBar from "../components/navbars/Adminnavbar";
import Table from "../components/table/table"


import axios from "axios";

export default function AdminPage(props) {
  const navigate = useNavigate();
  const [navbar, setNavBar] = useState();
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('')
  const [totalUsers, setTotalUsers] = useState('')

  
  axios.defaults.withCredentials = true;

  //validating token
  useEffect(() => {
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      setUserId(res.data.id)
      if (res.data.isAdmin) {
      } else {
        navigate("/");
      }
      if (res.data.isAdmin) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
    });
  });

  const getUserData = async () => {
    axios.defaults.withCredentials = true;
    const response = axios.get("http://localhost:3001/api/users");

    const { data } = await response;
    setUsers(data);
  };


  useEffect(()=>{
    axios.get('http://localhost:3001/api/totalusers').then((res)=>{
          setTotalUsers(res.data)
    })})



  return (
    <>
      <nav>{navbar ? <AdminNavBar userId={userId} /> : <UserNavBar userId={userId}/>}</nav>
      <Table totalUsers={totalUsers}/>
      <div>
        <button onClick={getUserData}>Get Users</button>
        <div>
          <UserList users={users} />
        </div>
      </div>
    </>
  );
}
