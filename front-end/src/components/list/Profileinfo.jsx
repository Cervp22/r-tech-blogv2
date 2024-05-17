import "../styles/userprofileinfo.css";

function ProfileInfo(props) {
  const data = props.userData;
  return (
    <ul className="userinfolist">
      <li>Username:{data.username}</li>
      <li>Friends:</li>
      <li>Post:</li>
    </ul>
  );
}

export default ProfileInfo;
