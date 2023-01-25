const stringLength = require('./stringLength');

test('stringLength function', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('world')).toBe(5);
    expect(stringLength('javascript')).toBe(10);
});

test("String of length 5 should return 5", () => {
    expect(stringLength("hello")).toBe(5);
});

test("Empty string should throw an error", () => {
    expect(() => stringLength("")).toThrow("String must be at least 1 character long");
});

test("String of length 11 should throw an error", () => {
    expect(() => stringLength("abcdefghijkl")).toThrow("String cannot be longer than 10 characters");
});