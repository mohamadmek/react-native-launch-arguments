import { NativeModules } from "react-native";
const raw = NativeModules.LaunchArguments.value;
const parsed = {};
for (const k in raw) {
    const rawValue = raw[k];
    try {
        parsed[k] = JSON.parse(rawValue);
    }
    catch {
        parsed[k] = rawValue;
    }
}
export const LaunchArguments = {
    value() {
        return parsed;
    },
};
