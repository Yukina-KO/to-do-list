import Link from "next/link";
import { DEFAULT_URL, USERS_URL, CREATE_USER_URL } from "../../const/urls";

export const Navigation = () => {
  return (
    <div>
      <Link href={DEFAULT_URL}>Главная</Link>
      <Link href={CREATE_USER_URL}>Создать нового пользователя</Link>
      <Link href={USERS_URL}>Пользователи</Link>
    </div>
  );
};

export default Navigation;
