import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Nopage from "./pages/Error404";
import ForgotPassword from "./pages/ForgotPasswordPage";
import "./App.css";
import ResetPassword from "./pages/ResetpasswordPage";
import UserProfile from "./pages/UserProfile";
import MessagesPage from "./pages/Messages";
import AdminPage from "./pages/Adminpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/messages" element={<MessagesPage />}></Route>
          <Route path="/profile/:id" element={<UserProfile />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:id/:token" element={<ResetPassword />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
