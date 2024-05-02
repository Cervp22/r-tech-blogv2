import axios from "axios";

const UserLength = () => axios.get("http://localhost:3001/api/totalusers");

export default UserLength;
