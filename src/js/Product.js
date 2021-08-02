class Product {
    constructor(name, price, taxable) {
        this.name = name; // string
        this.price = price; // number
        this.taxable = taxable; // boolean
    };
    getPriceWithTax() {
        return this.taxable ? this.price * 1.10 : this.price;
    };
};

module.exports = Product;
