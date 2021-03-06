"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateModule = void 0;
const uuid = require("uuid");
const helpers_1 = require("../helpers");
async function TemplateModule(mongoose) {
    const { Schema, Types } = mongoose;
    const ChecklistOption = helpers_1.createSchema(Schema, {
        name: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
        id: {
            type: String,
            default: "",
        },
    }, {
        _id: false,
    });
    const GroupOption = helpers_1.createSchema(Schema, {
        name: {
            type: String,
            default: "",
        },
        position: {
            type: Number,
            default: 0,
        },
    }, {
        _id: false,
    });
    const modelSchema = helpers_1.createSchema(Schema, {
        _id: {
            type: Types.ObjectId,
            auto: true,
        },
        position: {
            type: Number,
            default: 1,
        },
        userId: String,
        uuid: {
            type: String,
            default: uuid.v4,
        },
        isMandatory: {
            type: Boolean,
            default: false,
        },
        modified_date: {
            type: String,
        },
        modified_unix_date: {
            type: Number,
            default: helpers_1.retrieveCurrentUnixTime,
        },
        departmentId: {
            type: String,
            required: true,
            index: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        name: {
            type: String,
            required: true
        },
        checklist: {
            type: [ChecklistOption],
            default: [],
        },
        group: {
            type: [GroupOption],
            default: []
        },
        agencyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Agency",
            default: null,
        },
    }, {
        collection: "massive_template",
    });
    modelSchema.set("autoIndex", false);
    modelSchema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform(doc, ret) {
            strictSchema(doc.schema, ret);
            ret.id = ret._id;
        },
    });
    modelSchema.virtual("id").get(function () {
        // tslint:disable-next-line: no-unsafe-any
        return this._id.toString();
    });
    function strictSchema(schema, ret) {
        Object.keys(ret).forEach(function (element) {
            // Don't complain about the virtuals
            if (element === "id") {
                return;
            }
            const pathSchema = schema;
            if (pathSchema.paths[element] === undefined) {
                // console.log("backend-models.cad-incident: undefined schema.paths[element]:", element, pathSchema.paths[element]);
                delete ret[element];
            }
        });
    }
    // modelSchema.plugin(mongooseLeanVirtuals);
    return helpers_1.createModel(mongoose, "Template", modelSchema);
}
exports.TemplateModule = TemplateModule;
exports.default = TemplateModule;
//# sourceMappingURL=template.js.map