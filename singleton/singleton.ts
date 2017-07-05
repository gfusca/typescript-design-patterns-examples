export class Configuration {
    private static instance: Configuration;

    private config = {};

    private constructor() {
        this.config["name"] = "singleton";
    }

    public get(key: string) {
        return this.config[key];
    }

    public set(key: string, value: string) {
        this.config[key] = value;
    }

    public static getInstance() {
        if (!Configuration.instance)
            Configuration.instance = new Configuration();
        return Configuration.instance;
    };
}
