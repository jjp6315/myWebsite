import { render, screen } from "@testing-library/react";
import App from "./App";
import { LanguageProvider } from "./LanguageContext";
import "./i18n";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: () => ({
      matches: true,
      addEventListener: () => {},
      removeEventListener: () => {},
    }),
  });
});

test("renders the portfolio navigation", () => {
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
  expect(screen.getByRole("navigation", { name: /main/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /portfolio/i })).toBeInTheDocument();
});
