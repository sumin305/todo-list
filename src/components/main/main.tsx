import TodoList from "../todolist/TodoList";
import styles from "./main.module.css";
import TodoInput from "@/components/todoInput/todoInput";

export default function Main() {
  return (
    <div className={styles.layout}>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}
