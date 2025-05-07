import styles from "./Header.module.css";
import todo from "../assets/todo.svg";
import rocket from "../assets/rocket.svg";
import { NewTask } from "./NewTask";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src={rocket} alt="logo" />
        <img src={todo} alt="logo" />
      </header>
      {/* <NewTask /> */}
    </>
  );
}
