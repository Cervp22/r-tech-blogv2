import { useEffect } from "react";
import axios from "axios";
import "../styles/userprofiledisplay.css";

export default function ProfilePicForm(props) {
  const { profileImage, userid, convertToBase64 } = props;

  async function handleFormSubmit(event) {
    event.preventDefault();
    axios.defaults.withCredentials = true;

    //any image that is 2400 x 1000 will not work callback of entity too large !
    try {
      const profilePicPost = await axios({
        method: "post",
        url: `http://localhost:3001/api/profilepics/${userid}`,
        data: {
          userid,
          profileImage,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <img
          src={profileImage}
          className="profileimg"
        />
        <div>
          <input
            className="fileinput"
            type="file"
            accept="image/*"
            onChange={convertToBase64}
          />
          <input className="submitinput" type="submit" />
        </div>
      </form>
    </>
  );
}
