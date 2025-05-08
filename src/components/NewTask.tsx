/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";

interface NewTaskProps {
  text: string;
  ChangeNewTask: (text: string) => void;
  onNewTask: () => void;
}

export function NewTask({ text, ChangeNewTask, onNewTask }: NewTaskProps) {
  const [task, setTask] = useState("");

  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
    ChangeNewTask(event.target.value);
  }
  function handleAddTask() {
    onNewTask();
    setTask("");
  }

  return (
    <div className={styles.content}>
      <input
        className={styles.addTask}
        value={task}
        type="text"
        onChange={handleChangeNewTask}
        placeholder="Adicione uma nova tarefa"
        required
      />
      <button className={styles.btnAddTask} onClick={handleAddTask}>
        Criar <PlusCircle size={16} className={styles.iconAdd} weight="bold" />
      </button>
    </div>
  );
}
