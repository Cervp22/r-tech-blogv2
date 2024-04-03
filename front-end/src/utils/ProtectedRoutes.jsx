import { Navigate } from "react-router-dom";

//setting withcredentials to true for all request
const ProtectedRoute = ({ children, accessBy }) => {
  const authCall = fetch("http://localhost:3001/api/validateToken", {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    },
  });

  if (authCall.ok) {
    return children;
  } else {
    <Navigate to="/login" />;
  }

  return <></>;
};

export default ProtectedRoute;
