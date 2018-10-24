/**
 * Created by 刘娟娟 on 2016/7/11.
 */
const API_URL = require('../config').API_URL;
export default {
  findByUser(app, userId, cb) {
    app.$http.get(API_URL + '/dairy/findByUser/' + userId)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 555) {
          console.log(res.data);
        } else if (res.code == 200) {
          cb(res.data);
        }
      }, (err) => {
        console.log(err);
      });
  },
  getZeroTime(app, cb) {
    app.$http.get(API_URL + '/site/zeroTime/')
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 200) {
          cb(res.data);
        }
      }, (err) => {
        console.log(err);
      });
  },
  updateDairy(app, obj, cb) {
    app.$http.post(API_URL + '/dairy/update/', obj)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 555) {
          console.log(res.data);
        } else if (res.code == 200) {
          cb(res.data);
        }
      }, (err) => {
        console.log(err);
      })
  },
  findByDate(app, obj, cb) {
    app.$http.post(API_URL + '/dairy/findByDate/', obj)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 555) {
          console.log(res.data);
        } else if (res.code == 200) {
          cb(res.data);
        }
      }, (err) => {
        console.log(err);
      })
  },
  findTeamAuth(app, obj, cb) {
    app.$http.get(API_URL + '/userVisit/findTeamAuth/' + obj)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 555) {
          console.log(res.data);
        } else if (res.code == 200) {
          cb(res.data);
        }
      }, (err) => {
        console.log(err);
      })
  },
  findUserByTeam(app, obj, cb) {
    app.$http.post(API_URL + "/userVisit/findUserByTeam/", obj)
      .then(res => JSON.parse(res.data))
      .then((res) => {
        if (res.code == 555) {
          console.log(res.data);
        } else if (res.code == 200) {
          cb(res.data);
        }
      }, (err) => {
        console.log(err);
      });
  }
}