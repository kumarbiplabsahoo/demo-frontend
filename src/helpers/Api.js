import axios from "axios";
// import config from "../config/index";

// const laptop = "server"
const laptop = "local"
let Api = null;

if (laptop === "server") {
    const apiUrl = "http://192.168.29.162:5555/api/"
    Api = axios.create({ baseURL: apiUrl });
}
else {
    const apiUrl = "http://localhost:5555/api/"
    Api = axios.create({ baseURL: apiUrl });
}

export default Api;
