import { useNavigate } from "react-router-dom";
export default function ForgotPasswordBtn(props) {
  const navigate = useNavigate();

  function forgotPassword() {
    navigate("/forgotpassword");
  }
  return (
    <div>
      <button onClick={forgotPassword}>Forgot Password</button>
    </div>
  );
}
