declare type ParsedMap = Record<string, string | boolean>;
declare type LaunchArgumentsType = {
    value<T extends object = ParsedMap>(): T;
};
export declare const LaunchArguments: LaunchArgumentsType;
export {};
