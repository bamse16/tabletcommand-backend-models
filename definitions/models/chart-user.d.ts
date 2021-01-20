/// <reference types="mongoose" />
import { MongooseModule, ItemTypeFromTypeSchemaFunction, ModelTypeFromTypeSchemaFunction, ReplaceModelReturnType } from "../helpers";
export declare function ChartUserModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document<any> & Record<string, unknown> & {
    _id: import("bson").ObjectId;
    date: number;
    departmentId: string;
    count: number;
    items: string[];
}> & {
    __methods?: unknown;
}>;
export interface ChartUser extends ItemTypeFromTypeSchemaFunction<typeof ChartUserModule> {
}
export interface ChartUserModel extends ModelTypeFromTypeSchemaFunction<ChartUser> {
}
declare const _default: ReplaceModelReturnType<typeof ChartUserModule, ChartUserModel>;
export default _default;
//# sourceMappingURL=chart-user.d.ts.map