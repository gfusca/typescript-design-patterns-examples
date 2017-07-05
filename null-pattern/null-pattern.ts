class NullMoneyExchange implements Exchange {
    handle(money: number): number {
        return money
    }
}

export interface Exchange {
    handle(money: number): number;
}

export class ExchangeMachine {
    private exchange: Exchange;

    constructor() {
        this.exchange = new MoneyExchange(
            100, new MoneyExchange(
                50, new MoneyExchange(
                    25, new MoneyExchange(
                        10, new MoneyExchange(
                            5, new MoneyExchange(1, new NullMoneyExchange())
                        )
                    )
                )
            )
        );
    }

    public extractMoney(value: number) {
        console.log(`Extracting ${value} dollars`);
        return this.exchange.handle(value);
    }
}

export class MoneyExchange implements Exchange {

    value: number;
    next: Exchange;

    constructor(value: number, next: Exchange = null) {
        this.value = value;
        this.next = next;
    }

    handle(money: number): number {
        if (money >= this.value) {
            console.log(`Expending ${this.value} dollar`);
            money -= this.value
        }
        return this.next.handle(money);
    }
}