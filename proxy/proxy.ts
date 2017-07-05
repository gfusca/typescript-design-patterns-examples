interface Payment {
    amount(money: number): number;
}

export class Money implements Payment {
    amount(money: number) {
        console.log(`Getting ${money} of money`);
        return money;
    }
}

export class Check {
    cost = 0.02;
    amount(money: number) {
        console.log(`Converting ${money} of funds into money`);
        return new Money().amount(money - this.cost * money);
    }
}