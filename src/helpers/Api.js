import axios from "axios";
// import config from "../config/index";

const laptop = "biplab"
// const laptop = "papun"
let Api = null;

if (laptop === "papun") {
    const apiUrl = "http://192.168.29.162:5555/api/"
    Api = axios.create({ baseURL: apiUrl });
}
else {
    const apiUrl = "http://localhost:5555/api/"
    Api = axios.create({ baseURL: apiUrl });
}

export default Api;
