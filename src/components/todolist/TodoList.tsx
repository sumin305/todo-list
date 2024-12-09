import { fetchTodos } from "@/apis/todo";
import Done from "./Done";
import Todo from "./Todo";
import styles from "./todolist.module.css";

export interface TodoType {
  isCompleted: boolean;
  name: string;
  id: number;
}
export default async function TodoList() {
  const list = await fetchTodos();
  const todoList = list.filter((todo: TodoType) => !todo.isCompleted);
  const doneList = list.filter((todo: TodoType) => todo.isCompleted);

  return (
    <div className={styles.dotolist_container}>
      <Todo todoList={todoList}></Todo>
      <Done doneList={doneList}></Done>
    </div>
  );
}
