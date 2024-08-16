import styles from "./Link.module.scss";

interface LinkProperties {
  children: React.ReactNode;
}

export const Link: React.FC<LinkProperties> = ({ children }) => {
  return <span className={styles.link}>{children}</span>;
};

export default Link;
