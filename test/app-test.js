import App from "../src/app";
import TestUtils from "react-addons-test-utils/index.js";
import * as React from "react";

describe('app', function () {
  it('loads without problems', function () {
    const AppInstance = TestUtils.renderIntoDocument(<App />)
    console.log(AppInstance)
  });
});
