const converters = {
  toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  },
  toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  },
};

/**
 * Tries to convert temperatures using the converters object.
 *
 * @param {(string|number)} temperature - The temperature to convert from
 * @param {string} conversion - "toCelsius" or "toFahrenheit"
 * @returns {string} The converted temperature or "" if the conversion failed.
 */
export default function tryConvert(temperature, conversion) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }

  const output = converters[conversion](input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

// Scenario: Convert to Celsius with non-numerical input
Given I have non-numerical input
When I convert it to degrees Celsius
Then I "see" a blank string

Scenario: Convert to Fahrenheit with non-numerical input
Given I have non-numerical input
When I convert it to degrees Fahrenheit
Then I "see" a blank string