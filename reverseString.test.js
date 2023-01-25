const reverseString = require('./reverseString');

// Tests using Jest
test("String 'hello' should return 'olleh'", () => {
    expect(reverseString("hello")).toBe("olleh");
});