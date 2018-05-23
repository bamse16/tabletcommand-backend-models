"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");

var modelSchema = new Schema({
  uuid: {
    type: String,
    index: true,
    default: uuid.v4
  },
  departmentId: {
    type: String,
    default: "",
    required: true,
    index: true
  },
  modifiedDate: {
    type: Number,
    default: 0,
    min: 1
  },
  vehicleId: {
    type: String,
    default: "",
    required: true,
    minlength: 1
  },
  radioName: {
    type: String,
    default: "",
    required: true,
    minlength: 1
  },
  stationCode: {
    type: String,
    default: ""
  },
  stationName: {
    type: String,
    default: ""
  }
}, {
  collection: "massive_cad_vehicle"
});
modelSchema.set("autoIndex", false);

module.exports = mongoose.model("CADVehicle", modelSchema);
