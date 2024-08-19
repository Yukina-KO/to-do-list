import { fireEvent, screen, render } from "@testing-library/react";
import MainPage from "../pages/mainPage/mainPage";

describe("MainPage Component", () => {
  test("Рендер основной страницы", () => {
    render(<MainPage />);

    expect(screen.getByText(/Пользователи/i)).toBeInTheDocument();
    expect(screen.getByText(/Я новый пользователь/i)).toBeInTheDocument();
  });

  test("Рендер страницы с пользователями", () => {
    render(<MainPage />);

    fireEvent.click(screen.getByText(/Пользователи/i));
    expect(screen.getByText(/Пользователи/i)).toBeInTheDocument();
  });
});
