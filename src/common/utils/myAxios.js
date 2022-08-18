import axios from "axios";

const myAxios = axios.create();

// 添加请求拦截器
myAxios.interceptors.request.use(
  config => {
    config.responseEncoding = "UTF-8";
    config.proxy = {protocol: "http", host: "127.0.0.1", port: 9092};
    const token = localStorage.getItem("token");
    if (token !== null && token !== "") {
      config.headers.authorization = token;
    }
    return config;
  },
  error => {
    console.error("🔴error");
    return Promise.reject(error);
  },
);

// 添加响应拦截器
myAxios.interceptors.response.use(
  response => {
    console.log("🟢请求成功！");
    console.log(response);
    return response;
  },
  error => {
    switch (error.response.status) {
      case 403:
        console.warn("🔴登录已过期！");
        localStorage.removeItem("token");
        window.location.assign("/login");
        break;
      case 404:
        //window.location.assign("/not-found");
        break;
      default:
        console.error("🔴响应错误！");
        break;
    }
    return Promise.reject(error);
  },
);

export default myAxios;
