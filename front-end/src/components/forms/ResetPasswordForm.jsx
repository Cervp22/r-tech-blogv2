import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


export default function ResetPasswordForm(props) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");


  const { id, token } = useParams();

  useEffect(() => {
    document.title = "Forget Password";
  });

  const handleInput = (e) => {
    setPassword(e.target.value);
  };
  axios.defaults.withCredentials = true;

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const response = axios({
        method: "post",
        url: `http://localhost:3001/api/resetPassword/${id}/${token}`,
        data: {
          password,
          id,
          token,
        },
      });

      if (response) {
        console.log("Response is good");
        navigate("/");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div style={{ height: "80vh" }}>
        <h1>Please enter your new Password</h1>
        <br />
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">New Password:</label>
          <input
            type="password"
            onChange={handleInput}
            placeholder="Password.."
            className="password"
            name="password"
          />
          <button type="submit">Submit</button>
        </form>
        <br />
      </div>
    </>
  );
}
