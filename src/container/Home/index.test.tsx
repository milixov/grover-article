import Home from "./index";
import { render, screen } from "utils/test";

beforeEach(() => {
  render(<Home />);
});

it("ignore render 'prev page' button h", () => {
  expect(screen.queryByText(/prev page/i)).not.toBeInTheDocument();
});
