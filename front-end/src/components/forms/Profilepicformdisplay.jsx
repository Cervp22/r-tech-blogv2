import "../styles/userprofiledisplay.css";

export default function ProfilePicForm(props) {
  const img = props.photo;
  return (
    <>
      <form>
        <img src={img} className="profileimg" />
        <div>
          <input className="fileinput" type="file" />
          <input className="submitinput" type="submit" />
        </div>
      </form>
    </>
  );
}
