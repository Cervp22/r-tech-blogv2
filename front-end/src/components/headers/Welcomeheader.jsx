

export default function WelcomeHeader(props) {


  return (
    <div className="welcomeheaderdiv">
      <h1 className="Welcomeheader">Welcome, {props.username}</h1>
    </div>
  );
}
