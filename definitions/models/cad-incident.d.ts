/// <reference types="mongoose" />
/// <reference types="bson" />
import { MongooseModule, UnboxPromise, ModelItemType } from "./helpers";
export declare function CADIncidentModule(mongoose: MongooseModule): Promise<import("mongoose").Model<import("mongoose").Document & {
    _id: {
        type: {
            prototype: {} | {
                [x: string]: {} | any | {}[];
            } | {}[];
            cacheHexString?: undefined;
            createFromHexString: {};
            createFromTime: {};
            isValid: {};
            generate: {};
        };
        auto: never;
    };
    uuid: string;
    departmentId: string;
    AgencyID: string;
    IncidentNumber: string;
    TransactionID: string;
    AgencyIncidentCallTypeDescription: string;
    AgencyIncidentCallType: string;
    AgencyIncidentCallSubTypeDescription: string;
    AgencyIncidentCallSubType: string;
    AgencyIncidentPriorityDescription: string;
    PulsePointIncidentCallType: string;
    PulsePointDeterminantCode: string;
    AlarmLevel: string;
    CommandName: string;
    FireMap: string;
    TBMap: string;
    MapPages: string;
    TacticalChannel: string;
    TacticalAltChannel: string;
    CommandChannel: string;
    EntryDateTime: string;
    ClosedDateTime: string;
    CallReceivedDateTime: string;
    DispatchDateTime: string;
    IncidentLastUpdate: string;
    EnrouteDateTime: string;
    OnSceneDateTime: string;
    modified_date: string;
    modified_unix_date: number;
    start_unix_date: number;
    closed_unix_date: number;
    queued_at: number;
    scheduled_at: number;
    StreetName: string;
    StreetSuffix: string;
    Predirectional: string;
    Postdirectional: string;
    CityOrLocality: string;
    StateOrProvince: string;
    StateOfProvince: string;
    CommonPlaceName: string;
    CrossStreet1: string;
    CrossStreet2: string;
    StreetNumber: string;
    Building: string;
    Floor: string;
    Suite: string;
    City: string;
    County: string;
    PostalCode: string;
    CrossStreetName: string;
    LocationComment: string;
    full_address: string;
    address: string;
    cross_streets: string;
    PriorIncidentChanged: boolean;
    PriorIncident: {
        Address: string;
        Comment: {
            Comment: string;
            CommentSource: string;
            CommentDateTime: string;
        }[];
        IncidentDateTime: string;
        IncidentNumber: string;
        Jurisdiction: string;
        Problem: string;
        Suite: string;
    }[];
    CallerNumber: string;
    tag: string;
    Latitude: string;
    Longitude: string;
    Comment: {
        Comment: string;
        CommentSource: string;
        CommentDateTime: string;
    }[];
    units: {
        UnitID: string;
        UnitDispatchNumber: string;
        TimeDispatched: string;
        TimeEnroute: string;
        TimeArrived: string;
        TimeStaged: string;
        TimeCleared: string;
        TimeAtHospital: string;
        TimePatient: string;
        TimeTransport: string;
        TimeTransporting: string;
        PersonnelCount: number;
        Personnel: {
            PersonnelID: string;
            PersonnelName: string;
            PersonnelRank: string;
            PersonnelWorkCode: string;
            PersonnelNote: string;
        }[];
    }[];
    preference_location: string;
    admin_note: string;
    Interface: string;
    InterfaceVersion: string;
    CADSimulator: string;
    notificationType: {
        name: string;
        value: string;
    }[];
    notifiedUnits: string[];
    ReportNumber: string[];
    AgencyDeterminantCode: string;
    AgencyIncidentCategory: string;
    CFMap: string;
    CallSource: string;
    CaseNumber: string;
    CrossRefDataOwnerAgyID1: string;
    CrossRefDataSubmitterAgyID1: string;
    CrossRefEventCategory1: string;
    CrossRefEventNum1: string;
    EventLevel: string;
    EventNumber: string;
    FirstDueStation: string;
    MedicalAgencyIncidentType: string;
    MedicalEventCode: string;
    PopulationDensity: string;
    Priority: string;
    WorkstationID: string;
    LatitudeDegree: string;
    LatitudeMinute: string;
    LatitudeSecond: string;
    LongitudeDegree: string;
    LongitudeMinute: string;
    LongitudeSecond: string;
    Location: string;
    LocationType: string;
    OrigLocation: string;
    Jurisdiction: string;
}, {}>>;
export default CADIncidentModule;
export declare type CADIncidentModel = UnboxPromise<ReturnType<typeof CADIncidentModule>>;
export declare type CADIncident = ModelItemType<CADIncidentModel>;
