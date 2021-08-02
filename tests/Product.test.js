const Product = require("../src/js/Product");

describe("Product", () => {

  test("Apples: Confirm that the constructor parameters correctly set three properties on the class", () => {
    // Arrange
    let apples = new Product("apples", 2, false);

    // Act

    // Assert
    expect(apples).toEqual({name:"apples", price:2, taxable:false});
  });

  test("Oranges: Confirm that the constructor parameters correctly set three properties on the class", () => {
    // Arrange
    let oranges = new Product("oranges", .99, false);

    // Act

    // Assert
    expect(oranges).toEqual({name:"oranges", price:.99, taxable:false});
  });

  test("Product with taxable true add 10%", () => {
    // Arrange
    let toys = new Product("toys", 15, true);

    // Act

    //Assert
    expect(toys.getPriceWithTax()).toBeCloseTo(15 * 1.10);
  });

  test("Product with taxable false", () => {
    // Arrange
    let fruitBasket = new Product("fruitBasket", 15, false);

    // Act

    //Assert
    expect(fruitBasket.getPriceWithTax()).toBeCloseTo(15);
  });
});