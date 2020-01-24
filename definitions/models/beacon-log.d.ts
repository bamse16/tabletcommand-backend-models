/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function BeaconLogModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: import("bson").ObjectId;
    departmentId: string;
    userId: string;
    object: any;
    modified_unix_date: number;
}, {}> & {
    __methods?: unknown;
}>;
export interface BeaconLog extends ItemTypeFromTypeSchemaFunction<typeof BeaconLogModule> {
}
export interface BeaconLogModel extends ModelTypeFromTypeSchemaFunction<BeaconLog> {
}
declare const _default: ReplaceModelReturnType<typeof BeaconLogModule, BeaconLogModel>;
export default _default;
//# sourceMappingURL=beacon-log.d.ts.map