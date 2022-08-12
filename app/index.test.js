

test("convert from 100 Celsius toFahrenheit", () => {
  expect(input(100)).toBe(212);
});

test("convert from 50 Fahrenheit toCelsius", () => {
  expect(input(50)).toBe(10);
});

test("convert to Celsius with non-numerical input", () => {
  expect(input(NaN)).toBe("blank string"):
}
)

test("convert to Fahrenheit with non-numerical input", () => {
  expect(input(NaN)).toBe("blank string");
}
)







