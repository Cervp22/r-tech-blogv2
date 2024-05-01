import { useState } from "react";
import axios from "axios";



export default function postForm(props) {
  
  const [userPost, setUserPost] = useState();



  const handleInput = (e) => {
    setUserPost(e.target.value);
  };

  async function handleFormSubmit(event) {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    const username = props.username;
    try{
       const post =  await axios({
        method: "post",
        url: 'http://localhost:3001/api/post',
        data:{
            username,
            userPost
        },
       })

    }catch(err){
        console.log(err)
    }
  }

  return (
    <>
      <div style={{ height: "80vh" }}>
        <h1>Write Something..</h1>
        <br />
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            onChange={handleInput}
            placeholder="Write Something.."
            className="userPost"
            name="userPost"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}