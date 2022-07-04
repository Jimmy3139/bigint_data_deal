import request from "./request";

//[GET] 查詢會員操作紀錄
export function getMemberOperateRecord() {
  return request({
    method: "GET",
    url: "/Member/GetMemberOperateRecord",
  });
}

//[GET] 取得文章內容
export function articleDetail(id) {
  return request({
    method: "GET",
    url: `/Article/Detail?articleId=${id}`
  });
}

