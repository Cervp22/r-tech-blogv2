import { useState } from "react";
import axios from "axios";

import "../styles/postform.css"


export default function postForm(props) {
  
  const [userPost, setUserPost] = useState();



  const handleInput = (e) => {
    setUserPost(e.target.value);
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    const username = props.username;
    const userId = props.id;
    try{
       const post =  await axios({
        method: "post",
        url: 'http://localhost:3001/api/post',
        data:{
            username,
            userId,
            userPost
        },
       })

    }catch(err){
        console.log(err)
    }
  }

  return (
    <>
      <div className="postdiv" >
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}