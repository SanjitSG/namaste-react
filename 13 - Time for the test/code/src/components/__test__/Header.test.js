import Header from "../Header";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("Should render header component with Login button", () => {
  <Provider store={appStore}>
    render(
    <Header />
    );
  </Provider>;
  const loginBtn = screen.getByText("Login");

  expect(loginBtn).toBeInTheDocument();
});
