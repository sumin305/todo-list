import { TodoType } from "./TodoList";
import styles from "./todolist.module.css";

export interface TodoProps {
  todoList: Array<TodoType>;
}
export default function Todo(props: TodoProps) {
  return (
    <div className={styles.todo_container}>
      <img className={styles.todo_title} src="/images/img/todo/todo.svg" />
      {props.todoList.length === 0 ? (
        <>
          <img
            className={styles.todoImage}
            src="/images/img/todo-large/Type=Todo, Size=Large.svg"
          />
          <p className={styles.todoText}>
            할 일이 없어요.
            <br />
            TODO를 새롭게 추가해주세요!
          </p>
        </>
      ) : (
        props.todoList.map((todo, index) => (
          <div key={index} className={styles.todo_item}>
            {todo.name}
          </div>
        ))
      )}
    </div>
  );
}
