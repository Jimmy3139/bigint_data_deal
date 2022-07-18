import "jquery";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "bootstrap";
import { getMemberOperateRecord, articleDetail, getDevice, getVersion } from "../api/index";


const hello = "Hello World";
$("#app").append(`<div class="test">${hello}</div>`);



const JSONbig = require('json-bigint');
async function getMemberOperateRecordData() {
  const roomData = await getMemberOperateRecord();
  console.log('start1');
  console.log(JSONbig.stringify(roomData.data.result.list));


  for (let index = 0; index < roomData.data.result.list.length; index++) {
    console.log(`順序 ${index} : `, roomData.data.result.list[index]);
    $("#tableData").append(`
    <tr class='tr-style'>
      <td>${roomData.data.result.list[index].itemId.toString()}</td>
      <td>${roomData.data.result.list[index].type}</td>
      <td>${roomData.data.result.list[index].typeName}</td>
      <td>${roomData.data.result.list[index].memo}</td>
    </tr>
    `);

  }

}

async function articleDetailData() {
  const num = BigInt(1536610476597706752);
  const roomData = await articleDetail(num.toString());
  console.log('start2');
  console.log(roomData);

}

async function getDeviceInfo() {
  const roomData = await getDevice();
  console.log('start2');
  console.log(roomData);

}

async function getVersionInfo() {
  const roomData = await getVersion();
  console.log('start3');
  console.log("roomData : ", roomData);

}


getMemberOperateRecordData();
articleDetailData();

//getDeviceInfo()
//getVersionInfo()

