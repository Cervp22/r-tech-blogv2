import { useEffect, useState } from "react";
import axios from "axios";
import ForgotPasswordNot from "../notifications/forgotpasswordNot";

export default function ForgotPasswordForm(props) {
  const [forgotPassword, setforgotPassword] = useState({
    email: "",
  });

  const [checkEmail, setCheckEmail] = useState('')

  useEffect(() => {
    document.title = "Forgot Password";
  });

  const handleInput = (e) => {
    setforgotPassword({
      ...forgotPassword,
      [e.target.name]: e.target.value,
    });
  };

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
  
      const response = await axios.post(
        "http://localhost:3001/api/resetPassword",
        JSON.stringify(forgotPassword),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if(response){
        console.log('response is good')
        setCheckEmail('Check Your Email for password reset from losPatojos')
      }else{
        console.log('bad email or user doesnt e')
        setCheckEmail('Email does Not Exist!')
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
     <div style={{ height: "80vh" }}>
        <h1>Please enter your email</h1>
        <br />
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            onChange={handleInput}
            placeholder="Email.."
            className="email"
            name="email"
          />
          <button type="submit">Submit</button>
        </form>
        <br />
        {checkEmail}
      </div>
    </>
  );
}
