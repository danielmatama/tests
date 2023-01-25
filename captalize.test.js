const capitalize = require('./capitalize');

test("capitalize function works correctly", () => {
    const testString = "hello world";
    const result = capitalize(testString);
    expect(result).toBe("Hello world");
});