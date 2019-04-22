/// <reference types="mongoose" />
import { MongooseModule } from "../types";
export declare function CADAgency(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: {
        code: string;
        name: string;
        domain: string;
    };
    _methods: {};
};
