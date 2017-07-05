import {ProductA, ProductB} from "./product";

interface ProductFactory {
    createProduct();
}

class ProductAFactory implements ProductFactory {
    createProduct() {
        console.log("creating product A...");
        return new ProductA();
    }
}
class ProductBFactory implements ProductFactory {
    createProduct() {
        console.log("creating product B...");
        return new ProductB();
    }
}

export class Factory {
    private factories = {};

    constructor() {
        this.factories["ProductA"] = new ProductAFactory();
        this.factories["ProductB"] = new ProductBFactory();
    }

    public createProduct(productName: string) {
        return this.factories[productName].createProduct();
    }
}