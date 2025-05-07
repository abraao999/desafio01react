import { useState } from "react";
import styles from "./Tasks.module.css";
import { NewTask } from "./NewTask";
import Clipboard from "../assets/Clipboard.svg";
import { ListTasks } from "./ListTasks";

interface ListType {
  id: number;
  desc: string;
}
export function Tasks() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState<ListType[]>([]);

  function onChangeNewTask(valor: string) {
    setTask(valor);
  }
  function onAddTask() {
    const dado: ListType = { id: listTasks.length + 1, desc: task };

    setListTasks([...listTasks, dado]);
  }
  function onItemDelete(id: number) {
    console.log(id);
    const listAux = listTasks;
    const newArray = listAux.filter((valor) => valor.id != id);
    setListTasks(newArray);
  }
  return (
    <>
      <NewTask
        ChangeNewTask={onChangeNewTask}
        text={task}
        onNewTask={onAddTask}
      />

      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.tarefasCriadas}>
            Tarefas criadas <span>{listTasks.length}</span>
          </p>
          <p className={styles.tarefasConcluidas}>
            Concluídas <span>0</span>
          </p>
        </div>
        {listTasks.length > 0 ? (
          listTasks.map((item) => (
            <ListTasks
              key={item.id}
              item={item.desc}
              id={item.id}
              onItemDelete={onItemDelete}
            />
          ))
        ) : (
          <div className={styles.container}>
            <img src={Clipboard} alt="" />
            <p>
              <strong> Você ainda não tem tarefas cadastradas</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </div>
    </>
  );
}
