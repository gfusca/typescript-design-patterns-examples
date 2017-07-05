import {ChocolateDecorator, Expresso, MilkDecorator} from "./decorator";
let expresso = new ChocolateDecorator(new MilkDecorator(new Expresso()));

console.log(`your coffeee cost: ${expresso.getCost()}`);
