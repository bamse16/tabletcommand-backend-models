/// <reference types="mongoose" />
import { MongooseModule } from "../../helpers";
export declare enum ArcGISOfflineStatus {
    Unknown = "unknown",
    Completed = "completed",
    Partial = "partial",
    Processing = "processing",
    Failed = "failed"
}
export default function EsriMapModule(mongoose: MongooseModule): import("mongoose").Schema<any> & {
    _interface: import("../../helpers").MongooseInterface<{
        mapLayers: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    layerId: {
                        type: StringConstructor;
                        default: string;
                    };
                    itemId: {
                        type: StringConstructor;
                        default: string;
                    };
                    title: {
                        type: StringConstructor;
                        default: string;
                    };
                    layerType: {
                        type: StringConstructor;
                        default: string;
                    };
                    url: {
                        type: StringConstructor;
                        default: string;
                    };
                    visibility: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    opacity: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        baseMap: {
            type: import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    baseMapLayers: {
                        type: (import("mongoose").Schema<any> & {
                            _interface: import("../../helpers").MongooseInterface<{
                                layerId: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                itemId: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                title: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                layerType: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                url: {
                                    type: StringConstructor;
                                    default: string;
                                };
                                visibility: {
                                    type: BooleanConstructor;
                                    default: boolean;
                                };
                                opacity: {
                                    type: NumberConstructor;
                                    default: number;
                                };
                            }>;
                            _methods: unknown;
                        })[];
                        default: never[];
                    };
                    title: {
                        type: StringConstructor;
                        default: string;
                    };
                }>;
                _methods: unknown;
            };
        };
        offline: {
            type: (import("mongoose").Schema<any> & {
                _interface: import("../../helpers").MongooseInterface<{
                    download: {
                        type: BooleanConstructor;
                        default: boolean;
                    };
                    status: {
                        type: typeof ArcGISOfflineStatus;
                        default: ArcGISOfflineStatus;
                    };
                    id: {
                        type: StringConstructor;
                        default: string;
                    };
                    title: {
                        type: StringConstructor;
                        default: string;
                    };
                    url: {
                        type: StringConstructor;
                        default: string;
                    };
                    access: {
                        type: StringConstructor;
                        default: string;
                    };
                    owner: {
                        type: StringConstructor;
                        default: string;
                    };
                    type: {
                        type: StringConstructor;
                        default: string;
                    };
                    modified: {
                        type: NumberConstructor;
                        default: number;
                    };
                }>;
                _methods: unknown;
            })[];
            default: never[];
        };
        tags: {
            type: StringConstructor[];
            default: never[];
        };
        id: {
            type: StringConstructor;
            default: string;
        };
        title: {
            type: StringConstructor;
            default: string;
        };
        url: {
            type: StringConstructor;
            default: string;
        };
        access: {
            type: StringConstructor;
            default: string;
        };
        owner: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        modified: {
            type: NumberConstructor;
            default: number;
        };
    }>;
    _methods: unknown;
};
//# sourceMappingURL=esri-map.d.ts.map