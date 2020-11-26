"use strict";

module.exports = (Users) => {
  const app = require("../../server/server");

  Users.observe("before save", function (context, next) {
    return next();
  });

  Users.login = (userName, userPassword, cb) => {
    Users.findOne({
      where: { name: userName, password: userPassword },
    })
      .then((res) => {
        console.log(res);
        cb(null, res);
      })
      .catch((e) => {
        console.log("no user");
      });
  };

  Users.register = (req, db) => {};

  Users.beforeRemote("find", function (context, modelInstance, next) {
    return next();
  });

  Users.beforeRemote("create", function (context, modelInstance, next) {
    return next();
  });
};
