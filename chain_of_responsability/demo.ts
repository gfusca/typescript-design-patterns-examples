import {ExchangeMachine} from "./chain-of-responsability";
let exchangeMachine = new ExchangeMachine();

console.log(`remaining ${exchangeMachine.extractMoney(126)}`);

console.log(`remaining ${exchangeMachine.extractMoney(126.50)}`);
