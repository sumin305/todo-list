import { fetchTodos } from "@/apis/todo";
import TodoList from "../todolist/TodoList";
import styles from "./main.module.css";
import TodoInput from "@/components/todoInput/todoInput";

export interface TodoType {
  isCompleted: boolean;
  name: string;
  id: number;
}

export default async function Main() {
  const list = await fetchTodos();

  return (
    <div className={styles.layout}>
      <TodoInput></TodoInput>
      <TodoList list={list}></TodoList>
    </div>
  );
}
