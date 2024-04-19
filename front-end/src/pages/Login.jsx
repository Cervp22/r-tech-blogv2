import { useEffect } from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import ForgotPasswordBtn from '../components/buttons/ForgotPassword'

import RegisterBtn from "../components/buttons/Registerbtn";
import LoginForm from "../components/forms/LoginForm";


export default function Login() {

const navigate = useNavigate()


useEffect(()=>{
  axios.defaults.withCredentials = true;
  axios.get("http://localhost:3001/api/validateToken").then((res) => {
    if (res.data.status) {
      navigate("/home");
    } 

  });


},[])


  return (
    <>
      <LoginForm />
      <RegisterBtn/>
      <ForgotPasswordBtn/>
      <div style={{ height: "80vh" }}>
        <h1>This is your Login Page!</h1>
      </div>
    </>
  );
}
