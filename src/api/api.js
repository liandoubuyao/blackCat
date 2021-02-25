import http from "../utils/http";
import qs from "qs";
// import { get_loc } from "../local/local";

/**
 * @param request 请求地址
 * @param /api/配置的代理地址
 */

// let request = "http://192.168.1.105:18101"; //开发环境
let request = "http://127.0.0.1:8000"; //开发环境
//let request = "http://172.16.0.80:18101";  //现场主环境
//let request = "http://192.168.4.100:18101";  //现场主环境
// let request = ""; //根据baseurl 自动设置
// let request = get_loc('yb_url');  //需要环境支持
//get请求

export function getListAPI(url, params) {
  return http.get(`${request}` + url, params);
}

// post请求
export function postFormAPI(url, params) {
  return http.post(`${request}` + url, params);
}
//post 流文件请求
export function postSteam(url, params) {
  return http.poststeam(`${request}` + url, qs.stringify(params));
}
// put 请求
export function putSomeAPI(url, params) {
  return http.put(`${request}` + url, params);
}
// delete 请求
export function deleteListAPI(url, params) {
  return http.delete(`${request}` + url, params);
}
