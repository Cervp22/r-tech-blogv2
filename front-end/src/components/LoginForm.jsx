import { useEffect, useState } from "react";
import axios from "axios";

export default function LoginForm(props) {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Login";
  });

  const handleInput = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/login",
        JSON.stringify(login),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response) {
        console.log("User is logged in!");
      } else {
        console.log("Login failed!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div style={{ height: "80vh" }}>
        <h1>Login</h1>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={handleInput}
            className="password"
            placeholder="Password.."
            name="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
