import { MongooseModule, UnboxPromise, ModelItemType } from "./helpers";
import { TypedDocument, createSchema, createModel } from "./helpers";
import * as _ from "lodash";

export async function CADStatusMapModule(mongoose: MongooseModule) {

  const Schema = mongoose.Schema;

  const ToStatusIdSchema = createSchema(Schema, {
    statusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    userEnabled: {
      type: Boolean,
    },
  }, {
    _id: false,
  });

  // Using hook instead of default values,
  // so we keep the db value if no value was sent by the API/CAD
  ToStatusIdSchema.pre("save", function(this: TypedDocument<typeof ToStatusIdSchema>, next) {
    const self = this;

    if (_.isUndefined(self.userEnabled) || _.isNull(self.userEnabled)) {
      self.userEnabled = true;
    }

    // tslint:disable-next-line: no-unsafe-any
    return next();
  });

  // Update static items (keep in sync with the lib/cad-status-map/updateDocument!)
  const modelSchema = createSchema(Schema, {
    departmentId: {
      type: String,
      default: "",
      required: true,
      index: true,
    },
    modifiedDate: {
      type: Number,
      default: 0,
      min: 1,
    },
    fromStatusId: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    toStatusIds: {
      type: [ToStatusIdSchema],
      required: true,
    },
  }, {
    collection: "massive_cad_status_map",
  });
  modelSchema.set("autoIndex", false);

  return createModel(mongoose, "CADStatusMap", modelSchema);
}

export default CADStatusMapModule;
export type CADStatusMapModel = UnboxPromise<ReturnType<typeof CADStatusMapModule>>;
export type CADStatusMap = ModelItemType<CADStatusMapModel>;
