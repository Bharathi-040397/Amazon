import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-node-server.herokuapp.com/", // Url to heroku node server
});
export default instance;

