// Tests using Jest
describe("add method", () => {
    test("1 + 2 should return 3", () => {
        const calculator = new Calculator();
        expect(calculator.add(1, 2)).toBe(3);
    });

    test("5 + (-3) should return 2", () => {
        const calculator = new Calculator();
        expect(calculator.add(5, -3)).toBe(2);
    });

    test("0 + 0 should return 0", () => {
        const calculator = new Calculator();
        expect(calculator.add(0, 0)).toBe(0);
    });
});

describe("subtract method", () => {
    test("5 - 3 should return 2", () => {
        const calculator = new Calculator();
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test("5 - (-3) should return 8", () => {
        const calculator = new Calculator();
        expect(calculator.subtract(5, -3)).toBe(8);
    });

    test("0 - 0 should return 0", () => {
        const calculator = new Calculator();
        expect(calculator.subtract(0, 0)).toBe(0);
    });
});

describe("divide method", () => {
    test("6 / 2 should return 3", () => {
        const calculator = new Calculator();
        expect(calculator.divide(6, 2)).toBe(3);
    });

    test("divide by zero should throw error", () => {
        const calculator = new Calculator();
        expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
    });

    test("5 / (-2) should return -2.5", () => {
        const calculator = new Calculator();
        expect(calculator.divide(5, -2)).toBe(-2.5);
    });
});

describe("multiply method", () => {
    test("5 * 3 should return 15", () => {
        const calculator = new Calculator();
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    test("5 * (-3) should return -15", () => {
        const calculator = new Calculator();
        expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test("0 * 0 should return 0", () => {
        const calculator = new Calculator();
        expect(calculator.multiply(0, 0)).toBe(0);
    });
});
    