import Button from "./index";
import { render, screen, fireEvent } from "utils/test";

const fire = jest.fn();

beforeEach(() => {
  render(<Button onClick={fire}>Click</Button>);
});

it("renders button component", () => {
  expect(screen.getByRole("button", { name: /click/i })).toHaveTextContent(
    "Click"
  );
});

it("trigers click event", () => {
  fireEvent.click(screen.getByRole("button"));
  expect(fire).toHaveBeenCalled();
});
