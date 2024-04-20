import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByText("Login");

  expect(loginBtn).toBeInTheDocument();
});

it("Should render header Component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/);
  expect(cart).toBeInTheDocument();
});

it("Should render header and change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
