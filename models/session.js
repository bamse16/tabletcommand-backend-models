"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");

var modelSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4
  },
  nick: String,
  email: String,
  user: String,
  active: {
    type: Boolean,
    default: false
  },
  token: {
    type: String,
    default: uuid.v4
  },
  source: {
    type: String,
    default: "" // Options: browser, ipad, iphone, android
  },
  departmentId: {
    type: String,
    default: "",
    required: true,
    index: true
  },
  why: {
    type: String,
    default: "password"
  },
  when: String,
  ended: String,
  userAgent: {
    type: String,
    default: ""
  },
  remoteAddress: {
    type: String,
    default: ""
  }
}, {
  collection: "sys_login"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("Session", modelSchema);
