"use strict";

const assert = require("chai").assert;

const m = require("..");
const url = process.env.NODE_MONGO_URL || "mongodb://127.0.0.1/incident-test";

describe("ChecklistItem", function() {
  let models, mongoose;
  let testItem;
  beforeEach(async function() {
    const c = await m.connect(url);
    models = c.models;
    mongoose = c.mongoose;

    const mock = require("./mock")({
      mongoose
    });
    testItem = mock.checklistItem;
  });
  afterEach(function() {
    mongoose.disconnect();
  });

  it("is saved", function(done) {
    var item = new models.ChecklistItem(testItem);
    item.save(function(err, sut) {
      assert.isNull(err, "Should not err");

      assert.isNotNull(item._id);
      assert.equal(item._id, sut.id);
      assert.equal(testItem.position, sut.position);
      assert.equal(testItem.active, sut.active);
      assert.equal(testItem.name, sut.name);
      assert.equal(testItem.userId, sut.userId);
      assert.equal(testItem.departmentId, sut.departmentId);
      assert.equal(testItem.isMandatory, sut.isMandatory);
      assert.equal(testItem.agencyId, sut.agencyId);
      assert.equal(testItem.api_checklist_id, sut.api_checklist_id);
      assert.equal(testItem.checklist_uuid, sut.checklist_uuid);
      assert.equal(testItem.agencyId, sut.agencyId);
      const expectedDate = new Date().valueOf() / 1000.0;
      const timeDelta = expectedDate - sut.modified_unix_date;
      assert.isTrue(timeDelta < 1);
      return done();
    });
  });
});
