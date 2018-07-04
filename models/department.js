"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var uuid = require("uuid");

// Update user.js too
var Agency = new Schema({
  code: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  }
});

var EsriToken = new Schema({
  access_token: {
    type: String,
    default: ""
  },
  refresh_token: {
    type: String,
    default: ""
  },
  username: {
    type: String,
    default: ""
  },
  ssl: {
    type: Boolean,
    default: true
  },
  expires_in: {
    type: Number,
    default: 1800
  }
}, {
  _id: false
});

var IncidentType = new Schema({
  name: {
    type: String,
    default: "Any"
  },
  value: {
    type: String,
    default: "any"
  }
}, {
  _id: false
});

var modelSchema = new Schema({
  _id: {
    type: Schema.ObjectId,
    auto: true
  },
  uuid: {
    type: String,
    default: uuid.v4
  },

  department: {
    type: String,
    default: ""
  },
  fdid: {
    type: String,
    default: ""
  },
  city: {
    type: String,
    default: ""
  },
  state: {
    type: String,
    default: ""
  },
  contact_name: {
    type: String,
    default: ""
  },
  contact_phone: {
    type: String,
    default: ""
  },
  contact_email: {
    type: String,
    default: ""
  },
  modified_unix_date: {
    type: Number,
    default: new Date().valueOf() / 1000.0
  },

  active: {
    type: Boolean,
    default: false
  },
  pager_number: {
    type: String,
    default: ""
  },
  apikey: {
    type: String,
    default: ""
  },
  cadEmailUsername: {
    type: String,
    default: ""
  },

  // CAD Features
  cadMonitorEnabled: {
    type: Boolean,
    default: false
  },
  cadMonitorMinutes: {
    type: Number,
    default: 30
  },
  cadBidirectionalEnabled: {
    type: Boolean,
    default: false
  },
  heartbeatEnabled: {
    type: Boolean,
    default: false
  },
  heartbeatMinutes: {
    type: Number,
    default: 5
  },
  pushEnabled: {
    type: Boolean,
    default: true
  },
  userContributionEnabled: {
    type: Boolean,
    default: false
  },

  // RTS
  rtsEnabled: {
    type: Boolean,
    default: true
  },
  rtsChannelPrefix: {
    type: String,
    default: ""
  },
  rtsAuthKey: {
    type: String,
    default: ""
  },
  esriTokenDateExpiry: {
    type: Number,
    default: 0
  },
  esriToken: {
    type: EsriToken
  },

  // Custom Button
  customWebUrl: {
    type: String,
    default: ""
  },
  customWebName: {
    type: String,
    default: ""
  },

  // Incident Type APN
  incidentTypes: {
    type: [IncidentType]
  },

  agencies: {
    type: [Agency],
    default: []
  },

  // Signup
  signupKey: {
    type: String,
    default: ""
  },
  signupDomains: {
    type: [String],
    default: []
  }
}, {
  collection: "massive_admin"
});
modelSchema.set("autoIndex", false);

modelSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    ret.id = ret._id;
  }
});

modelSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

module.exports = mongoose.model("Department", modelSchema);
