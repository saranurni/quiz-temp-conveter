
import tryConvert from "./index.js";

test("convert from 100 Celsius toFahrenheit", () => {
  expect(tryConvert(100)).toBe(212);
});

test("convert from 50 Fahrenheit toCelsius", () => {
  expect(tryConvert(50)).toBe(10);
});

test("convert to Celsius with non-numerical input", () => {
  expect(tryConvert(NaN)).toBe("blank string"):
}
)

test("convert to Fahrenheit with non-numerical input", () => {
  expect(tryConvert(NaN)).toBe("blank string");
}
)







