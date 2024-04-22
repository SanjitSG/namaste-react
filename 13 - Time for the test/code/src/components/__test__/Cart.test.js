import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RestaurantMenu from "../RestaurantMenu";
import { act } from "react-dom/test-utils";
import { __esModule } from "@babel/preset-react";
import useRestaurantMenu from "../../utils/Hooks/useRestaurantMenu";
import MOCK from "../mocks/resData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";

jest.mock("../../utils/Hooks/useRestaurantMenu", () => ({
  __esModule: true,
  default: jest.fn(),
}));

useRestaurantMenu.mockReturnValue(MOCK);

it("Should render Restaurant Menu with categories", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <RestaurantMenu />
        </BrowserRouter>
      </Provider>
    );
  });

  const panel = screen.getByText("Rice And Biryani (6)");
  expect(panel).toBeInTheDocument();
  fireEvent.click(panel);
  const items = screen.getAllByTestId("item");
  expect(items.length).toBe(6);

  const addBtn = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cart = screen.getByText("Cart (2)");
  fireEvent.click(cart);
  expect(items.length).toBe(8);
});
