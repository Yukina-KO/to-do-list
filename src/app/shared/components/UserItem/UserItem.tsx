import styles from "./UserItem.module.scss";

interface UserItemProperties extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const UserItem: React.FC<UserItemProperties> = ({ children }) => {
  return <button className={styles.wrapper}>{children}</button>;
};

export default UserItem;
