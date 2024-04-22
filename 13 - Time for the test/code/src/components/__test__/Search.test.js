import { act } from "react-dom/test-utils";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListData.json";

import useSwiggyApi from "../../utils/Hooks/useSwiggyApi";

jest.mock("../../utils/Hooks/useSwiggyApi", () => ({
  __esModule: true,
  default: jest.fn(),
}));

useSwiggyApi.mockReturnValue({
  restaurantListData: MOCK_DATA,
  isLoading: false,
  error: null,
});

describe("Body component testing", () => {
  it("Should render body component with search button", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const searchBtn = screen.getByText("Search");
    expect(searchBtn).toBeInTheDocument();
  });

  it("Should render body component and test search input", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const searchInput = screen.getByTestId("search-box");
    expect(searchInput).toBeInTheDocument();
  });

  it("Should test test the search functionality", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const resCardBefore = screen.getAllByTestId("resCard");
    expect(resCardBefore.length).toBe(9);

    const searchBox = screen.getByTestId("search-box");
    expect(searchBox).toBeInTheDocument();

    const searchBtn = screen.getByText("Search");
    expect(searchBtn).toBeInTheDocument();

    fireEvent.change(searchBox, { target: { value: "Cafe" } });
    fireEvent.click(searchBtn);

    const resCardAfter = screen.getAllByTestId("resCard");
    expect(resCardAfter.length).toBe(1);
  });

  it("Should render body component with  top filtered cards", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });

    const resCardBefore = screen.getAllByTestId("resCard");
    expect(resCardBefore.length).toBe(9);

    const filterBtn = screen.getByText("Top Rated Restaurant");
    expect(filterBtn).toBeInTheDocument();

    fireEvent.click(filterBtn);

    const resCardAfter = screen.getAllByTestId("resCard");
    expect(resCardAfter.length).toBe(6);
  });
});
