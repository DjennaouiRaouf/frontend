import * as React from "react";
import { shallow } from "enzyme";
import Skills from "./Skills";

describe("Skills", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Skills label={''} data={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
