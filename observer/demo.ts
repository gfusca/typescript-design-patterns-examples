import {Newspaper, Subscriber} from "./newspaper";
import {Auctioneer, Bidder} from "./bid";

console.log("Newspaper example...");
let newspaper = new Newspaper();
const subscriber = new Subscriber("Gabriel");

newspaper.attach(subscriber);
newspaper.addNews({title: "Aliens exist!", body: "asdasldkasld 1l2k3 1l2k3 ñ123ñ12j3123l123"});


console.log("Bid example...");
let auctioneer = new Auctioneer();
let bidders = [new Bidder("gabriel", auctioneer), new Bidder("carlos", auctioneer)];

const rounds = 10;

for (let i = 0; i < rounds; ++i) {
    bidders[0].makeBid(Math.random()*100*i);
    bidders[1].makeBid(Math.random()*100*i);
}

auctioneer.closeSell();



