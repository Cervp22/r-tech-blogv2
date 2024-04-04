import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RegisterForm(props) {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Register";
  });

  const handleInput = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        JSON.stringify(register),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response) {
        console.log("Registration successful!");
        return navigate("/login");
      } else {
        console.log("Registration failed!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div style={{ height: "80vh" }}>
        <h1>Register</h1>
        <br />
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="userName">UserName:</label>
          <input
            type="text"
            onChange={handleInput}
            placeholder="Username.."
            className="username"
            name="username"
          />
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            onChange={handleInput}
            placeholder="fullname.."
            className="fullname"
            name="fullname"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            onChange={handleInput}
            placeholder="email.."
            className="email"
            name="email"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={handleInput}
            className="password"
            placeholder="Password.."
            name="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
