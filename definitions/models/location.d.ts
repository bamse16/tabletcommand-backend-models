/// <reference types="mongoose" />
import { ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, MongooseModule, ReplaceModelReturnType, retrieveCurrentUnixTime } from "../helpers";
export declare function LocationModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    departmentId: string;
    userId: string;
    uuid: string;
    username: string;
    device_type: string;
    active: boolean;
    modified_unix_date: number;
    version: number;
    session: string;
    esriId: number;
    location: {
        longitude: number;
        latitude: number;
    };
} & {
    propagateToObject<T>(this: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "get" | "set" | "removeListener" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: boolean;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                };
                uuid: {
                    type: StringConstructor;
                    default: import("uuid/interfaces").v4;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                };
                device_type: {
                    type: StringConstructor;
                    required: boolean;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: boolean;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: boolean;
                        default: number;
                    };
                };
            }>;
        };
    }, dbItem: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "get" | "set" | "removeListener" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: boolean;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                };
                uuid: {
                    type: StringConstructor;
                    default: import("uuid/interfaces").v4;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                };
                device_type: {
                    type: StringConstructor;
                    required: boolean;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: boolean;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: boolean;
                        default: number;
                    };
                };
            }>;
        };
    }, callback: (doc: Record<string, unknown> & {
        _id: import("bson").ObjectId;
        departmentId: string;
        userId: string;
        uuid: string;
        username: string;
        device_type: string;
        active: boolean;
        modified_unix_date: number;
        version: number;
        session: string;
        esriId: number;
        location: {
            longitude: number;
            latitude: number;
        };
    } & Pick<import("mongoose").Document, "get" | "set" | "removeListener" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
        _id: import("bson").ObjectId;
    } & {
        schema: import("mongoose").Schema<any> & {
            _interface: import("../helpers").MongooseInterface<{
                _id: {
                    type: import("mongoose").Types.ObjectIdConstructor;
                    auto: boolean;
                };
                departmentId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                    index: true;
                };
                userId: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                };
                uuid: {
                    type: StringConstructor;
                    default: import("uuid/interfaces").v4;
                };
                username: {
                    type: StringConstructor;
                    default: string;
                    required: boolean;
                };
                device_type: {
                    type: StringConstructor;
                    required: boolean;
                };
                active: {
                    type: BooleanConstructor;
                    default: boolean;
                };
                modified_unix_date: {
                    type: NumberConstructor;
                    default: typeof retrieveCurrentUnixTime;
                };
                version: {
                    type: NumberConstructor;
                    default: number;
                };
                session: {
                    type: StringConstructor;
                    default: string;
                };
                esriId: {
                    type: NumberConstructor;
                    default: number;
                };
                location: {
                    longitude: {
                        type: NumberConstructor;
                        required: boolean;
                        default: number;
                    };
                    latitude: {
                        type: NumberConstructor;
                        required: boolean;
                        default: number;
                    };
                };
            }>;
        };
    }) => T): T;
}, {}> & {
    __methods?: {
        propagateToObject<T>(this: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
        } & Pick<import("mongoose").Document, "get" | "set" | "removeListener" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    _id: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        auto: boolean;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        index: true;
                    };
                    userId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: import("uuid/interfaces").v4;
                    };
                    username: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                    };
                    device_type: {
                        type: StringConstructor;
                        required: boolean;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modified_unix_date: {
                        type: NumberConstructor;
                        default: typeof retrieveCurrentUnixTime;
                    };
                    version: {
                        type: NumberConstructor;
                        default: number;
                    };
                    session: {
                        type: StringConstructor;
                        default: string;
                    };
                    esriId: {
                        type: NumberConstructor;
                        default: number;
                    };
                    location: {
                        longitude: {
                            type: NumberConstructor;
                            required: boolean;
                            default: number;
                        };
                        latitude: {
                            type: NumberConstructor;
                            required: boolean;
                            default: number;
                        };
                    };
                }>;
            };
        }, dbItem: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
        } & Pick<import("mongoose").Document, "get" | "set" | "removeListener" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    _id: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        auto: boolean;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        index: true;
                    };
                    userId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: import("uuid/interfaces").v4;
                    };
                    username: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                    };
                    device_type: {
                        type: StringConstructor;
                        required: boolean;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modified_unix_date: {
                        type: NumberConstructor;
                        default: typeof retrieveCurrentUnixTime;
                    };
                    version: {
                        type: NumberConstructor;
                        default: number;
                    };
                    session: {
                        type: StringConstructor;
                        default: string;
                    };
                    esriId: {
                        type: NumberConstructor;
                        default: number;
                    };
                    location: {
                        longitude: {
                            type: NumberConstructor;
                            required: boolean;
                            default: number;
                        };
                        latitude: {
                            type: NumberConstructor;
                            required: boolean;
                            default: number;
                        };
                    };
                }>;
            };
        }, callback: (doc: Record<string, unknown> & {
            _id: import("bson").ObjectId;
            departmentId: string;
            userId: string;
            uuid: string;
            username: string;
            device_type: string;
            active: boolean;
            modified_unix_date: number;
            version: number;
            session: string;
            esriId: number;
            location: {
                longitude: number;
                latitude: number;
            };
        } & Pick<import("mongoose").Document, "get" | "set" | "removeListener" | "increment" | "model" | "$isDeleted" | "remove" | "deleteOne" | "save" | "__v" | "$isDefault" | "$session" | "depopulate" | "equals" | "execPopulate" | "isDirectSelected" | "init" | "inspect" | "invalidate" | "isDirectModified" | "isInit" | "isModified" | "isSelected" | "markModified" | "modifiedPaths" | "populate" | "populated" | "overwrite" | "toJSON" | "toObject" | "toString" | "unmarkModified" | "replaceOne" | "update" | "updateOne" | "validate" | "validateSync" | "errors" | "isNew" | "schema" | "$locals" | "id" | "addListener" | "on" | "once" | "off" | "removeAllListeners" | "setMaxListeners" | "getMaxListeners" | "listeners" | "rawListeners" | "emit" | "listenerCount" | "prependListener" | "prependOnceListener" | "eventNames" | "collection" | "db"> & {
            _id: import("bson").ObjectId;
        } & {
            schema: import("mongoose").Schema<any> & {
                _interface: import("../helpers").MongooseInterface<{
                    _id: {
                        type: import("mongoose").Types.ObjectIdConstructor;
                        auto: boolean;
                    };
                    departmentId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                        index: true;
                    };
                    userId: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                    };
                    uuid: {
                        type: StringConstructor;
                        default: import("uuid/interfaces").v4;
                    };
                    username: {
                        type: StringConstructor;
                        default: string;
                        required: boolean;
                    };
                    device_type: {
                        type: StringConstructor;
                        required: boolean;
                    };
                    active: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    modified_unix_date: {
                        type: NumberConstructor;
                        default: typeof retrieveCurrentUnixTime;
                    };
                    version: {
                        type: NumberConstructor;
                        default: number;
                    };
                    session: {
                        type: StringConstructor;
                        default: string;
                    };
                    esriId: {
                        type: NumberConstructor;
                        default: number;
                    };
                    location: {
                        longitude: {
                            type: NumberConstructor;
                            required: boolean;
                            default: number;
                        };
                        latitude: {
                            type: NumberConstructor;
                            required: boolean;
                            default: number;
                        };
                    };
                }>;
            };
        }) => T): T;
    } | undefined;
}>;
export interface Location extends ItemTypeFromTypeSchemaFunction<typeof LocationModule> {
}
export interface LocationModel extends ModelTypeFromTypeSchemaFunction<Location> {
}
declare const _default: ReplaceModelReturnType<typeof LocationModule, LocationModel>;
export default _default;
//# sourceMappingURL=location.d.ts.map