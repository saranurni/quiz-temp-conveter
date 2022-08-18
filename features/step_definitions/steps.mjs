import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "expect";
import tryConvert from "../../app/index.js";

Given("I have a temperature of {float}° {units}", function (temp2Convert, _) {
  console.log(this, "this is the this");
  this.temp2Convert = temp2Convert;
});

Given("I have non-numerical input", () => {});

When("I convert it to degrees {units}", function (units) {
  console.log(this, "this is the this");
  this.convertedTemp = tryConvert(this.temp2Convert, units);
});

Then("I see {float}° {units}", function (expected, _) {
  const expectHelper = () => {
    console.log(this, "this is the this");
    expect(this.convertedTemp).toBe(expected.toString());
  };
});

Then('I "see" a blank string', function () {
  const expectHelper = () => {
    expect(this.convertedTemp).toBe("");
  };
});
