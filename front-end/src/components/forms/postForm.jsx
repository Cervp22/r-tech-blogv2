import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../styles/postform.css";

export default function postForm(props) {
  const navigate = useNavigate();

  const [userPost, setUserPost] = useState();

  const handleInput = (e) => {
    setUserPost(e.target.value);
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    const username = props.username;
    const userId = props.id;
    try {
      if (userPost.value === "") {
        alert("Please write some text before you submit to post");
      } else {
        const post = await axios({
          method: "post",
          url: "http://localhost:3001/api/posts",
          data: {
            username,
            userId,
            userPost,
          },
        });
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="postdiv">
        <h1 className="posttitle">Post Here..</h1>
        <br />
        <form onSubmit={handleFormSubmit}>
          <textarea
            type="text"
            onChange={handleInput}
            placeholder=" Write Something.."
            className="userPostformta"
            name="userPost"
          />
          <button type="submit" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
