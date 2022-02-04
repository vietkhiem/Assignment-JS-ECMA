import axios from "axios";

const instance = axios.create({
    baseURL: "https://61f7bb5539431d0017eaf9aa.mockapi.io/posts",
});

export default instance;