import { Check, Trash } from "phosphor-react";
import styles from "./ListTasks.module.css";
import { useState } from "react";

interface ListTasksProps {
  item: string;
  id?: number;
  onItemDelete: (id: number) => void;
}

export function ListTasks({ item, id, onItemDelete }: ListTasksProps) {
  const [checked, setChecked] = useState(false);
  function handleClickButtonCheck() {
    setChecked(!checked);
  }
  function handleSelectTaskToDelete() {
    onItemDelete(id!);
  }
  return (
    <div className={styles.container}>
      <button
        className={checked ? styles.checked : styles.unchecked}
        onClick={handleClickButtonCheck}
      >
        {checked ? <Check /> : ""}
      </button>
      <p>{item}</p>
      <button className={styles.trash} onClick={handleSelectTaskToDelete}>
        <Trash size={16} />
      </button>
    </div>
  );
}
