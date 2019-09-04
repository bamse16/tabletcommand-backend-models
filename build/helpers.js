"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createSchemaDefinition(c) {
    return c;
}
exports.createSchemaDefinition = createSchemaDefinition;
function createSchema(schemaCtor, p, o, methods) {
    const schema = new schemaCtor(p, o);
    if (methods) {
        schema.methods = methods;
    }
    return schema;
}
exports.createSchema = createSchema;
function createModel(mongoose, name, schema, collection, skipInit) {
    if (mongoose.models[name]) {
        return mongoose.model(name);
    }
    else {
        return mongoose.model(name, schema);
    }
}
exports.createModel = createModel;
function retrieveCurrentUnixTime() {
    return Date.now() / 1000;
}
exports.retrieveCurrentUnixTime = retrieveCurrentUnixTime;
function conditions(items, c) {
    return c;
}
exports.conditions = conditions;
//# sourceMappingURL=helpers.js.map