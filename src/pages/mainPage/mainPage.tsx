import ActionItem from "@/shared/components/ActionItem/ActionItem";
import styles from "./mainPage.module.scss";
import { CREATE_USER_URL, USERS_URL } from "@/shared/const/urls";

export const MainPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <ActionItem href={USERS_URL}>Пользователи</ActionItem>
      <ActionItem href={CREATE_USER_URL}>Я новый пользователь</ActionItem>
    </div>
  );
};

export default MainPage;
