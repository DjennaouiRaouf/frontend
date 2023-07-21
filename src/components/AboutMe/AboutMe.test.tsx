import * as React from "react";
import { shallow } from "enzyme";
import AboutMe from "./AboutMe";

describe("AboutMe", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper).toMatchSnapshot();
  });
});
