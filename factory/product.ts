export interface Product {
    getName(): string;
    getPrice() : number;
    getStock(): number;
}

export class ProductA implements Product {
    getName(): string {
        return "Product A";
    }

    getPrice(): number {
       return 5.25;
    }

    getStock(): number {
        return 1;
    }
}

export class ProductB implements Product {
    getName(): string {
        return "Product B";
    }

    getPrice(): number {
       return 25;
    }

    getStock(): number {
        return 100;
    }
}
