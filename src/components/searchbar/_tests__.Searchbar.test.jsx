import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Searchbar from "./Searchbar";
import { ShopContext } from "../../context/ShopContext";

const renderWithContextAndRoute = (contextValue, route = "/products") => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ShopContext.Provider value={contextValue}>
        <Searchbar />
      </ShopContext.Provider>
    </MemoryRouter>
  );
};

describe("Searchbar Component", () => {
  it("does not render if showSearch=false", () => {
    const mockContext = {
      search: "",
      setSearch: vi.fn(),
      showSearch: false,
      setShowSearch: vi.fn(),
    };

    renderWithContextAndRoute(mockContext, "/products");

    expect(screen.queryByPlaceholderText("Search")).not.toBeInTheDocument();
  });

  it("renders when showSearch=true and path includes products", () => {
    const mockContext = {
      search: "",
      setSearch: vi.fn(),
      showSearch: true,
      setShowSearch: vi.fn(),
    };

    renderWithContextAndRoute(mockContext, "/products");

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByAltText("search icon")).toBeInTheDocument();
    expect(screen.getByAltText("close search")).toBeInTheDocument();
  });

  it("updates search input value on change", () => {
    const mockSetSearch = vi.fn();
    const mockContext = {
      search: "",
      setSearch: mockSetSearch,
      showSearch: true,
      setShowSearch: vi.fn(),
    };

    renderWithContextAndRoute(mockContext, "/products");

    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "shoes" } });

    expect(mockSetSearch).toHaveBeenCalledWith("shoes");
  });

  it("calls setShowSearch(false) when close icon is clicked", () => {
    const mockSetShowSearch = vi.fn();
    const mockContext = {
      search: "",
      setSearch: vi.fn(),
      showSearch: true,
      setShowSearch: mockSetShowSearch,
    };

    renderWithContextAndRoute(mockContext, "/products");

    fireEvent.click(screen.getByAltText("close search"));

    expect(mockSetShowSearch).toHaveBeenCalledWith(false);
  });

  it("does not render on non-products routes", () => {
    const mockContext = {
      search: "",
      setSearch: vi.fn(),
      showSearch: true,
      setShowSearch: vi.fn(),
    };

    renderWithContextAndRoute(mockContext, "/cart");

    expect(screen.queryByPlaceholderText("Search")).not.toBeInTheDocument();
  });
});
