import { Navigate } from "react-router-dom";
import axios from "axios";

//setting withcredentials to true for all request
const ProtectedRoute = ({ children, accessBy }) => {
  const authCall = axios
    .post("http://localhost:3001/api/validateToken", {
      withCredentials: true,
    })

  if (authCall) {
    console.log("frontend has communication with endpoint!");
  } else {
    console.log("move to the login page!");
  }

  return <></>;
};

export default ProtectedRoute;
