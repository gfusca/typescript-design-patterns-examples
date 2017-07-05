import {Configuration} from "./singleton";

const key = "version", value = "0.1";

let config1 = Configuration.getInstance();

config1.set(key, value);

let config2 = Configuration.getInstance();


if (config2.get(key) == value) {
    console.log("singleton works");
} else {
    console.log("something evil has happened!");
}