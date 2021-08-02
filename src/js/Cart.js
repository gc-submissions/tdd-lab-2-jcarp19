class Cart {
    constructor () {
        this.items = [];
    };
    add(product) {
        this.items.push(product);
    };
    getItemCount() {
       return this.items.length;
    };
    getTotalBeforeTax() {
        let totBeforeTax = 0;
        this.items.forEach(function(item) {
            totBeforeTax += item.price;
        });
        return totBeforeTax;
    };

    // This has no parameters and returns the sum of the getPriceWithTax() method of all Products in the items array.
    getTotalWithTax() {
       
        // total individual items from getPriceWithTax
        let totWithTax = 0;
        this.items.forEach((net) => {
            totWithTax += net.getPriceWithTax();
        });
        return totWithTax;
    }

    // This has no parameters. It subtracts the results of getTotalWithTax and getTotalBeforeTax and returns the result.
    getTax() {
        return this.getTotalWithTax() - this.getTotalBeforeTax();
    };
};

module.exports = Cart;