import * as React from "react";
import { shallow } from "enzyme";
import ScrollToTopBtn from "./ScrollToTopBtn";

describe("ScrollToTopBtn", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ScrollToTopBtn />);
    expect(wrapper).toMatchSnapshot();
  });
});
