export class Auctioneer implements Observable {
    observers: Observer[] = [];
    bestBid: number = null;
    bidder: string = null;
    receiveBid(bid: number, bidder: string = "anonymous") {
        if (bid > this.bestBid) {
            this.bestBid = bid;
            this.bidder = bidder;
            this.notify({bidder: bidder, bid: bid});
        }
    }

    closeSell() {
        console.log(`selled for ${this.bestBid} to ${this.bidder}`);
    }

    notify(event: any) {
        this.observers.map((o) => o.update(event));
    }

    attach(observer: Observer) {
        throw new Error("Method not implemented.");
    }

    detach(observer: Observer) {
        throw new Error("Method not implemented.");
    }
}

export class Bidder implements Observer {
    private name: string;
    private auctioneer: Auctioneer;

    constructor(name: string, auctioneer: Auctioneer) {
        this.auctioneer = auctioneer;
        this.name = name;
    }

    makeBid(bid: number) {
        console.log(this.name, "made bid for:", bid);
        this.auctioneer.receiveBid(bid, this.name);
    }

    update(event: any) {
        console.log(`Oh! Someone has made a bid: ${JSON.stringify(event)}`);
    }
}