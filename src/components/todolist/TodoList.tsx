import { TodoType } from "@/app/page";
import Todo from "../todo/Todo";
import styles from "./todolist.module.css";

export interface TodoListProps {
  list: Array<TodoType>;
}
export default async function TodoList({ list }: TodoListProps) {
  const todoList = list.filter((todo: TodoType) => !todo.isCompleted);
  const doneList = list.filter((todo: TodoType) => todo.isCompleted);

  return (
    <div className={styles.dotolist_container}>
      <Todo todoList={todoList} isTodo={true}></Todo>
      <Todo todoList={doneList} isTodo={false}></Todo>
    </div>
  );
}
