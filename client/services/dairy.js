/**
 * Created by 刘娟娟 on 2016/7/8.
 */
const API_URL = require('../config').API_URL;
export default {
  //添加日志
  insert(app, dairyObj, cb) {
    app.$http.post(API_URL + '/dairy/insert/', dairyObj)
      .then(res => JSON.parse(res.data))
      .then((res) => {
      if (res.code == 200) {
        cb(res.data);
      } else if (res.code == 555) {
        console.log(res.data);
      }
    }, (err) => {
      console.log(err);
    });
  },
  //添加的时候看一下今天是否已经添加
  insertDairy(app, userId, cb) {
    app.$http.get(API_URL + '/dairy/isInsert/' + userId)
      .then(res => JSON.parse(res.data))
      .then((res) => {
      if (res.code == 201) {
        cb();
      } else if (res.code == 200) {

      } else if (res.code == 555) {
        console.log(res.data);
      }
    }, (err) => {
      console.log(err);
    })
  },
  getNowTime(app, cb) {
    app.$http.get(API_URL + '/dairy/getNowTime/')
      .then(res => JSON.parse(res.data))
      .then((res) => {
      if (res.code == 200) {
        cb(res.data);
      }
    }, (err) => {
      console.log(err);
    })
  },
  getToken(app, cb) {
    app.$http.get(API_URL + '/img/token')
      .then(res => JSON.parse(res.data))
      .then(res => {
      cb(res.token);
    }, err => {
      console.log(err);
    })
  }
}