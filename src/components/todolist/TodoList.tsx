import Done from "./Done";
import Todo from "./Todo";
import styles from "./todolist.module.css";
export default async function TodoList() {
  console.log(process.env.NEXT_API_HOST);
  const todoLists = await fetch(process.env.NEXT_API_HOST + "/items");
  console.log(todoLists);
  return (
    <div className={styles.dotolist_container}>
      <Todo></Todo>
      <Done></Done>
    </div>
  );
}
