import RegisterForm from "../components/forms/RegisterForm";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


import LoginHomebtn from '../components/buttons/Loginhomeroutebtn'

export default function Register() {

  const navigate = useNavigate()

  useEffect(()=>{
    axios.defaults.withCredentials = true;
    axios.get("http://localhost:3001/api/validateToken").then((res) => {
      if (res.data.status) {
        navigate("/home");
      } 

    });
  
  
  },[0])
  
  return (
    <>
      <RegisterForm />

      <div style={{ height: "80vh" }}>
        <h1>This is your Register Page!</h1>
      </div>
    </>
  );
}
