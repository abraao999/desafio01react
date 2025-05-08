import { Check, Trash } from "phosphor-react";
import styles from "./ListTasks.module.css";
import { ListType } from "./Tasks";

interface ListTasksProps {
  item: ListType;

  onItemDelete: (id: number) => void;
  onTaskCompleted: (id: number) => void;
}

export function ListTasks({
  item,
  onItemDelete,
  onTaskCompleted,
}: ListTasksProps) {
  function handleClickButtonCheck() {
    onTaskCompleted(item.id!);
  }
  function handleSelectTaskToDelete() {
    onItemDelete(item.id!);
  }

  return (
    <div className={styles.container}>
      <button
        className={item.completed ? styles.checked : styles.unchecked}
        onClick={handleClickButtonCheck}
      >
        {item.completed ? <Check /> : ""}
      </button>
      <p
        className={
          item.completed ? styles.paragraphCompleted : styles.paragraph
        }
      >
        {item.desc}
      </p>
      <button className={styles.trash} onClick={handleSelectTaskToDelete}>
        <Trash size={16} />
      </button>
    </div>
  );
}
