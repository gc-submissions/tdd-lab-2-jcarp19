const {formatCurrency, getCoins} = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("test1 format currency for positive an negative amounts", () => {
    expect(formatCurrency(0)).toBe("$" + "0.00");
  });
});
describe("formatCurrency", () => {
  test("test2 format currency for positive an negative amounts", () => {
    expect(formatCurrency(1)).toBe("$" + "1.00");
  });
});
describe("formatCurrency", () => {
  test("test3 format currency for positive an negative amounts", () => {
    expect(formatCurrency(1.5)).toBe("$" + "1.50");
  });
});
describe("formatCurrency", () => {
  test("test4 format currency for positive an negative amounts", () => {
    expect(formatCurrency(0.01)).toBe("$" + "0.01");
  });
});
describe("formatCurrency", () => {
  test("test5 format currency for positive an negative amounts", () => {
    expect(formatCurrency(527.6789)).toBe("$" + "527.68");
  });
});
describe("formatCurrency", () => {
  test("test6 format currency for positive an negative amounts", () => {
    expect(formatCurrency(-1)).toBe("-$" + "1.00");
  });
});
describe("formatCurrency", () => {
  test("test7 format currency for positive an negative amounts", () => {
    expect(formatCurrency(-33)).toBe("-$" + "33.00");
  });
});
describe("formatCurrency", () => {
  test("test8 format currency for positive an negative amounts", () => {
    expect(formatCurrency(99.99)).toBe("$" + "99.99");
  });
});
    
  

describe("getCoins", () => {
  test("32: testing for change", () => {
    expect(getCoins(32)).toEqual({"quarters":1, "dimes":0, "nickels":1, "pennies":2});
  });
});

describe("getCoins", () => {
  test("10: testing for change", () => {
    expect(getCoins(10)).toEqual({"quarters":0, "dimes":1, "nickels":0, "pennies":0});
  });
});

describe("getCoins", () => {
  test("27: testing for change", () => {
    expect(getCoins(27)).toEqual({"quarters":1, "dimes":0, "nickels":0, "pennies":2});
  });
});

describe("getCoins", () => {
  test("68: testing for change", () => {
    expect(getCoins(68)).toEqual({"quarters":2, "dimes":1, "nickels":1, "pennies":3});
  });
});