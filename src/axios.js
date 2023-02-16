import axios from "axios";

const instance = axios.create({
     baseURL: "https://sessionlogin.onrender.com", 
});

export default instance;
