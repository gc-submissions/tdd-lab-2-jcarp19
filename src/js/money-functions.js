const formatCurrency =(amount) => {
    // return amount >= 0 ? "$" + Number(Math.ceil(amount * 100).toFixed(2)) / 100 : "-$" + Number(Math.ceil(amount * 100).toFixed(2).substring(1)) / 100;
    return amount >= 0 ? "$" + amount.toFixed(2) : "-$" + amount.toFixed(2).substring(1);
};

const getCoins = (cents) => {
    //return an object of coins
    let change = {quarters: 0, dimes: 0, nickels: 0, pennies: 0};
    
    change.quarters = Math.floor(cents / 25); 
    cents = cents % 25;
    
    change.dimes = Math.floor(cents / 10);
    cents = cents % 10;

    change.nickels = Math.floor(cents / 5);
    cents = cents % 5;

    change.pennies = Math.floor(cents / 1);
        
    return change;
};

module.exports = {formatCurrency, getCoins};