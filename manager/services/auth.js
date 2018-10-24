/**
 * Created by 刘娟娟 on 2016/7/13.
 */
const API_URL = require('../config').API_URL;
export default {
  findVisits(app, userId, cb) {
    app.$http.get(API_URL + '/userVisit/findVisits/' + userId)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 200) {
          cb(res.data);
        } else if (res.code == 555) {
          console.log(res.data)
        }
      }, (err) => {
        console.log(err);
      })
  },
  find(app, userId, cb) {
    app.$http.get(API_URL + '/user/findById/' + userId)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 200) {
          cb(res.data);
        }
        else if (res.code == 555) {
          console.log(res.data)
        }
      }, (err) => {
        console.log(err);
      })
  },
  findTeamUser(app, cb) {
    app.$http.get(API_URL + '/user/teamUser/')
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 200) {
          cb(res.data);
        } else if (res.code == 555) {
          console.log(res.data)
        }
      }, (err) => {
        console.log(err);
      })
  },
  save(app, obj) {
    app.$http.post(API_URL + '/userVisit/insert/', obj)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 200) {
          alert('保存成功！')
        } else if (res.code == 555) {
          console.log(res.data)
        }
      }, (err) => {
        console.log(err)
      })
  },
  checkAll(app, teamId, cb) {
    app.$http.get(API_URL + '/user/findUserIdByTeam/' + teamId)
      .then(res => JSON.parse(res.data))
      .then(res => {
        if (res.code == 200) {
          cb(res.data);
        } else if (res.code == 555) {
          console.log(res.data)
        }
      }, err => {
        console.log(err)
      })
  }
}