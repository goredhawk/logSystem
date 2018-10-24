/**
 * Created by 刘娟娟 on 2016/7/13.
 */
const API_URL = require('../config').API_URL;
export default {
  login(app, obj, cb) {
    app.$http.post(API_URL + '/user/managerLogin', obj)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        console.log(res);
        if (res.code == 501 || res.code == 404) {
          alert('登录不成功，请检查用户名与密码是否匹配')
        } else if (res.code == 555 || res.code == 888) {
          console.log(res.data);
        } else if (res.code == 200) {
          console.log('989898');
          cb(res.data);
        }
      }, (err) => {
        console.log(err);
      })
  }
}