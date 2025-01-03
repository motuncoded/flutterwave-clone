import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";
import { vi, test, expect } from "vitest";
import { useNavigate } from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

test("renders Header, Account, and Footer in Login", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

  // Check if Header is rendered
  expect(screen.getByAltText(/logo/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /create account/i }),
  ).toBeInTheDocument();

  // Check if Account is rendered
  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();

  // Check if Footer is rendered
  expect(
    screen.getByText(/licensed by the central bank of nigeria/i),
  ).toBeInTheDocument();
  expect(screen.getByText(/privacy policy/i)).toBeInTheDocument();
  expect(screen.getByText(/terms and conditions/i)).toBeInTheDocument();
});

test("navigates to register page when Create Account button is clicked", () => {
  const navigateMock = vi.fn();
  vi.mocked(useNavigate).mockReturnValue(navigateMock);

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

  const createAccountButton = screen.getByRole("button", {
    name: /create account/i,
  });
  fireEvent.click(createAccountButton);

  expect(navigateMock).toHaveBeenCalledWith("/register");
});

test("handles login functionality in Account form", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );

  const emailInput = screen.getByPlaceholderText(/email address/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });

  expect(emailInput.value).toBe("test@example.com");
  expect(passwordInput.value).toBe("password123");
});
