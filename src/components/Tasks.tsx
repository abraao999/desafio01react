import { useState } from "react";
import styles from "./Tasks.module.css";
import { NewTask } from "./NewTask";
import Clipboard from "../assets/Clipboard.svg";
import { ListTasks } from "./ListTasks";

export interface ListType {
  id: number;
  desc: string;
  completed: boolean;
}
export function Tasks() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState<ListType[]>([]);
  const [contador, setContador] = useState(0);

  function onChangeNewTask(valor: string) {
    setTask(valor);
  }
  function onAddTask() {
    const dado: ListType = {
      id: listTasks.length + 1,
      desc: task,
      completed: false,
    };

    setListTasks([...listTasks, dado]);
  }
  function onItemDelete(id: number) {
    console.log(id);
    const listAux = listTasks;
    const newArray = listAux.filter((valor) => valor.id != id);
    setListTasks(newArray);
  }
  function onTaskCompleted(id: number) {
    const taskToUpdate = listTasks.find((task) => task.id === id);

    if (!taskToUpdate) return; // segurança: se não encontrar, não faz nada

    const updatedTask = { ...taskToUpdate, completed: true };

    const filteredList = listTasks.filter((task) => task.id !== id);

    const newList = [...filteredList, updatedTask];

    setListTasks(newList);
    const contadorAux = contador + 1;
    setContador(contadorAux);
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
            Concluídas{" "}
            <span>
              {listTasks.length > 0
                ? `${contador} de ${listTasks.length}`
                : "0"}
            </span>
          </p>
        </div>
        {listTasks.length > 0 ? (
          listTasks.map((item) => (
            <ListTasks
              key={item.id}
              item={item}
              onItemDelete={onItemDelete}
              onTaskCompleted={onTaskCompleted}
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
