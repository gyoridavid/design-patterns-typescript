interface cartTotalCalculator {
    calculateTotal():number;
}

export class Product implements cartTotalCalculator {
    private name:string;
    private price:number;

    constructor(name:string, price:number) {
        this.name = name;
        this.price = price;
    }

    calculateTotal(): number {
        return this.price;
    }

}

export class ProductWithExtraOptions implements cartTotalCalculator {
    private product: Product;
    private extraOptions: Product[] = [];

    constructor(product: Product) {
        this.product = product;
    }

    addExtraOption(option: Product) {
        this.extraOptions.push(option);
    }

    calculateTotal(): number {
        return this.extraOptions
            .concat(this.product)
            .map(item => item.calculateTotal())
            .reduce((total, item) => total + item);
    }

}

class CartItem implements cartTotalCalculator {
    private product: cartTotalCalculator;
    private quantity: number;
    constructor(product: cartTotalCalculator) {
        this.product = product;
        this.quantity = 1;
    }

    calculateTotal(): number {
        return this.product.calculateTotal() * this.quantity;
    }
    // todo implement quantity management
}

export class Cart implements cartTotalCalculator {
    private items:CartItem[] = [];

    addProduct(item:cartTotalCalculator) {
        this.items.push(new CartItem(item));
        // todo: check if product exists, increment quantity instead
    }

    calculateTotal(): number {
        return this.items
            .map(item => item.calculateTotal())
            .reduce((total, item) => total + item);
    }
}
