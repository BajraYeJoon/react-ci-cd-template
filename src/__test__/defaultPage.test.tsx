// App.test.tsx
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../App";

describe("App", () => {
  test("rendering", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeDefined();
  });
});
