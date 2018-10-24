/**
 * Created by 刘娟娟 on 2016/7/18.
 */
const API_URL = require('../config').API_URL;
export default {
  me(app, userId, cb) {
    app.$http.get(API_URL + '/user/clientFindById/' + userId)
      .then(res => JSON.parse(res.data))
      .then(res => {
        if (res.code == 200) {
          cb(res.data);
        } else if (res.code == 555) {
          console.log(res.data);
        }
      }, (err) => {
        console.log(err);
      })
  }
}