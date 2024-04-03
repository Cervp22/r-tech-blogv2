import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nopage from "./pages/Error404";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/home"
            element={
              <ProtectedRoutes accessBy="authenticated">
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Register"
            element={
              <ProtectedRoutes accessBy="non-authenticated">
                <Register />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
