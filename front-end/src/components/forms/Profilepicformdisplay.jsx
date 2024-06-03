import "../styles/userprofiledisplay.css";

export default function ProfilePicForm(props) {
  return (
    <>
      <form>
        <img src={props.profileImage} className="profileimg" />
        <div>
          <input
            className="fileinput"
            type="file"
            accept="image/*"
            onChange={props.convertToBase64}
          />
          <input className="submitinput" type="submit" />
        </div>
      </form>
    </>
  );
}
