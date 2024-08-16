import Link from "next/link";
import styles from "./ActionItem.module.scss";

interface ActionItemProperties {
  children: React.ReactNode;
  href: string;
}

export const ActionItem: React.FC<ActionItemProperties> = ({ children, href }) => {
  return (
    <Link className={styles.container} href={href}>
      {children}
    </Link>
  );
};

export default ActionItem;
