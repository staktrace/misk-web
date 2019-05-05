import { color, Environment } from "../utilities";
export declare const defaultEnvironment = Environment.PRODUCTION;
export declare const defaultEnvironmentIndicatorsVisible: Environment[];
export declare const environmentColorMap: {
    [x: string]: color;
    default: color;
};
export declare const environmentToColor: (environment: Environment) => color;
