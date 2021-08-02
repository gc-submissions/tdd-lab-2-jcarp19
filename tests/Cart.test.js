const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart", () => {
  test("test for empty cart", () => {
    // Arrange
    let myCart = new Cart();
    // Act

    // Assert
    expect(myCart.items).toEqual([]);
  });
});

describe("Cart", () => {
  test("test Cart for a single item", () => {
    // Arrange - create products
    let theCart = new Cart();
    let guitar = new Product("Les Paul", 1500, true);

    // Act - Add newStuff to a cart
    theCart.add(guitar);
    
    // Assert
    expect(theCart.items).toEqual([{"name":"Les Paul", "price":1500, "taxable":true}]);
  });
});
describe("Cart", () => {
  test("test Cart total before tax", () => {
    // Arrange - create products
    let theCart = new Cart();
    let guitar = new Product("Les Paul", 1500, true);
    let fender = new Product("Strat", 1500, false);

    // Act - Add newStuff to a cart
    theCart.add(guitar);
    theCart.add(fender);
    
    // Assert
    expect(theCart.getTotalBeforeTax()).toEqual(3000);
  });
});

describe("Cart", () => {
  test("test Cart total with tax", () => {
    // Arrange
    let theCart = new Cart();
    let newGibson = new Product("Les Paul", 2000, true);
    let usedFender = new Product("Strat", 900, false);
    
    // Act
    theCart.add(newGibson);
    theCart.add(usedFender);

    //Assert
    expect(theCart.getTotalWithTax()).toEqual((newGibson.price * 1.10) + usedFender.price);
  });
});
describe("Cart", () => {
  test("test the difference between getTotalWithTax and getTotalBeforeTax", () => {
    // Arrange
    let theCart = new Cart();
    let newGibson = new Product("Les Paul", 2000, true);
    let usedFender = new Product("Strat", 1000, true);
    let guitar = new Product("Les Paul", 1000, true);
    
    // Act
    theCart.add(newGibson);
    theCart.add(usedFender);
    theCart.add(guitar);

    //Assert
    expect(theCart.getTax()).toBeCloseTo(400);
  });
});

