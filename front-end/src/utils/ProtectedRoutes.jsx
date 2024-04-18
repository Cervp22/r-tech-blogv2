import { Navigate } from "react-router-dom";

//setting withcredentials to true for all request
const ProtectedRoute = ({ children }) => {
  const response = fetch("http://localhost:3001/api/validateToken", {
    method: "POST",
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
  });
};

export default ProtectedRoute;
