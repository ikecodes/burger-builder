import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-5021a.firebaseio.com/",
});

export default instance;
