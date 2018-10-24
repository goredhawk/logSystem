/**
 * Created by 刘娟娟 on 2016/7/13.
 */
const API_URL = require('../config').API_URL;
export default {
  findUserById(app, userId, cb) {
    app.$http.get(API_URL + '/user/findById/' + userId)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 200) {
          cb(res);
        } else if (res.code == 555) {
          console.log(res.data)
        }
      }, (err) => {
        console.log(err);
      })
  },

  findDairyByUser(app, data, cb) {
    app.$http.post(API_URL + '/dairy/findByUser/', data)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 200) {
          cb(res);
        } else if (res.code == 555) {
          console.log(res.data)
        }
      }, (err) => {
        console.log(err);
      })
  }
}