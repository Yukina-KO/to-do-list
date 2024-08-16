import Link from "next/link";
import styles from "./Title.module.scss";
import { DEFAULT_URL } from "@/app/shared/const/urls";

export const Title: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <Link href={DEFAULT_URL}>To Do List</Link>
      </h1>
    </div>
  );
};

export default Title;
