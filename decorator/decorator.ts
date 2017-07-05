interface Coffee {
    getCost();
}

export class Expresso implements Coffee {
    getCost() {
        return 1.0;
    }
}

export class MilkDecorator implements Coffee {
    coffee: Coffee;
    cost: number = 0.25;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + this.cost;
    }
}

export class ChocolateDecorator implements Coffee {
    coffee: Coffee;
    cost: number = 0.5;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    getCost() {
        return this.coffee.getCost() + this.cost;
    }
}
