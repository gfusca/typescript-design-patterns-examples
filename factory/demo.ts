import {Factory} from "./factory";

let f = new Factory();
const productA = f.createProduct("ProductA");

console.log("product:", productA.getName(), productA.getPrice(), productA.getStock());

const productB = f.createProduct("ProductB");

console.log("product:", productB.getName(), productB.getPrice(), productB.getStock());
