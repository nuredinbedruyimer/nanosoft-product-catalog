import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // ✅ enables toBeInTheDocument, toHaveTextContent, etc.
import CartTotal from "./CartTotal";
import { ShopContext } from "../../context/ShopContext";
// helper: render CartTotal with mocked context
const renderWithContext = (contextValue) => {
  return render(
    <ShopContext.Provider value={contextValue}>
      <CartTotal />
    </ShopContext.Provider>
  );
};

describe("CartTotal Component", () => {
  it("renders subtotal, shipping, and total correctly", () => {
    const mockContext = {
      currency: "$",
      delivery_fee: 10,
      getCartAmount: () => 50,
    };

    renderWithContext(mockContext);

    // Check labels exist
    expect(screen.getByText("Subtotal")).toBeInTheDocument();
    expect(screen.getByText("Shipping Fee")).toBeInTheDocument();
    expect(screen.getByText("Total")).toBeInTheDocument();

    // Check values
    expect(screen.getByText("Subtotal").nextSibling).toHaveTextContent("$50.00");
    expect(screen.getByText("Shipping Fee").nextSibling).toHaveTextContent("$10.00");
    expect(screen.getByText("Total").nextSibling).toHaveTextContent("$60.00");
  });

  it("shows total as 0 if cart is empty", () => {
    const mockContext = {
      currency: "$",
      delivery_fee: 10,
      getCartAmount: () => 0,
    };

    renderWithContext(mockContext);

    expect(screen.getByText("Subtotal").nextSibling).toHaveTextContent("$0.00");

    expect(screen.getByText("Total").nextSibling).toHaveTextContent("$0.00");
  });
});
