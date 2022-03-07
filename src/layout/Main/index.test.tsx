import MainLayout from "./index";
import { render, screen } from "utils/test";

beforeEach(() => {
  render(
    <MainLayout>
      <div>Main Layout</div>
    </MainLayout>
  );
});

it("renders header", () => {
  expect(screen.queryByText(/The New Yok Times/i)).toBeInTheDocument();
});
