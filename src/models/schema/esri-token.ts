import {
  createSchema,
  MongooseModule,
} from "../../helpers";

export default function EsriTokenModule(mongoose: MongooseModule) {
  const Schema = mongoose.Schema;

  const EsriToken = createSchema(Schema, {
    access_token: {
      type: String,
      default: "",
    },
    refresh_token: {
      type: String,
      default: "",
    },
    username: {
      type: String,
      default: "",
    },
    ssl: {
      type: Boolean,
      default: true,
    },
    expires_in: {
      type: Number,
      default: 1800,
    },
  }, {
    _id: false,
  });

  return EsriToken;
}
