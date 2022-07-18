import axios from "axios";

// const cors = 'https://cors-anywhere.herokuapp.com/';
const API_BASE_URL = "https://localhost:54134/api/v1";
// 創建axios實例
const request = axios.create({
  baseURL: API_BASE_URL, // api的base_url
  // withCredentials: true, // 跨域請求時是否發送cookies
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1NDc0MjE0NTUwMzE5OTIzMjAiLCJuYmYiOjE2NTgxMTQxMzgsImV4cCI6MTY1ODExNTkzOCwiaWF0IjoxNjU4MTE0MTM4LCJpc3MiOiJab25lIiwiYXVkIjoiQVBQIn0.PQwc4NmM8ecGed2tYeifbJo4iWD6n22JamtWb-baU8I",

  },
  transformResponse: [function (data) {
    try {
      // 如果转换成功则返回转换的数据结果
      return jsonBig.parse(data)
    } catch (err) {
      // 如果转换失败，则包装为统一数据格式并返回
      return {
        data
      }
    }
  }]

});

// 請求攔截器
request.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    // 處理請求錯誤
    console.log(error); // 用於調試
    return Promise.reject(error);
  }
);

// 響應攔截器
request.interceptors.response.use(
  (response) => {

    let JSONbig = require('json-bigint');
    //const newRes = JSONbig.stringify(response);
    const newData = response.data.data;
    response = { ...response, data: JSONbig.parse(newData) }

    console.log(response);
    return response;
  },
  (error) => {
    console.log("error：" + error);
    return Promise.reject(error);
  }
);

export default request;
