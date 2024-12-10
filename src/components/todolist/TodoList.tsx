import Done from "./Done";
import Todo from "./Todo";
import styles from "./todolist.module.css";
import { TodoType } from "../main/main";

export interface TodoListProps {
  list: Array<TodoType>;
}
export default async function TodoList({ list }: TodoListProps) {
  const todoList = list.filter((todo: TodoType) => !todo.isCompleted);
  const doneList = list.filter((todo: TodoType) => todo.isCompleted);

  return (
    <div className={styles.dotolist_container}>
      <Todo todoList={todoList}></Todo>
      <Done doneList={doneList}></Done>
    </div>
  );
}
