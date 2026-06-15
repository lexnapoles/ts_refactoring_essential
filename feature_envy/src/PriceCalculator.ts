export class PriceCalculator {
    public calculateFinalPrice(product: Product): number {
        let price = product.getPrice();

        if (product.isOnSale()) {
            price = price * 0.8;
        }

        return price;
    }
}

export class Product {
    private readonly price: number;
    private readonly onSale: boolean;

    constructor(price: number, onSale: boolean) {
        this.price = price;
        this.onSale = onSale;
    }

    public getPrice(): number {
        return this.price;
    }

    public isOnSale(): boolean {
        return this.onSale;
    }
}