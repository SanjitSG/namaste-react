import RestaurantCard, { isOnline } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

it("should render Restaurant card", () => {
  render(
    <BrowserRouter>
      <RestaurantCard resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const resCard = screen.getByText("Udipi Cafe");

  expect(resCard).toBeInTheDocument();
});

it("Should render Restaurant Card with online status", () => {
  //Higher Order Component testing.
  const RestaurantCardOnline = isOnline(RestaurantCard);
  render(
    <BrowserRouter>
      <RestaurantCardOnline resData={MOCK_DATA} />
    </BrowserRouter>
  );

  const onlineStatus = screen.getByText("🟢");
  expect(onlineStatus).toBeInTheDocument();
});
