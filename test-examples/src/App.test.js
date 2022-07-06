import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { usersData } from "./mocks/handlers";

describe("login", () => {
  test("user login will render list of users", async () => {
    render(<App />);

    userEvent.type(screen.getByPlaceholderText("email"), "john.doe@gmail.com");
    userEvent.type(screen.getByPlaceholderText("password"), "12345");

    userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Logout" })
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      usersData.forEach((user) => {
        expect(screen.getByText(user.first_name)).toBeInTheDocument();
      });
    });
  });

  test("error on login will show an error message", async () => {
    render(<App />);

    userEvent.type(
      screen.getByPlaceholderText("email"),
      "michael.doe@gmail.com"
    );
    userEvent.type(screen.getByPlaceholderText("password"), "12345");

    userEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    });
  });
});