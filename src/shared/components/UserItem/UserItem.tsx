import styles from "./UserItem.module.scss";

interface UserItemProperties {
  children: React.ReactNode;
}

export const UserItem: React.FC<UserItemProperties> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default UserItem;
