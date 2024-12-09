import { TodoType } from "./TodoList";
import styles from "./todolist.module.css";

export interface TodoProps {
  doneList: Array<TodoType>;
}
export default function Done(props: TodoProps) {
  return (
    <div className={styles.todo_container}>
      <img className={styles.todo_title} src="/images/img/done/done.svg" />
      {props.doneList.length === 0 ? (
        <>
          <img
            className={styles.todoImage}
            src="/images/img/done-large/Type=Done, Size=Large.svg"
          />
          <p className={styles.todoText}>
            아직 다 한 일이 없어요.
            <br />
            해야 할 일을 체크해보세요!
          </p>
        </>
      ) : (
        props.doneList.map((todo, index) => (
          <div key={index} className={styles.todo_item}>
            {todo.name}
          </div>
        ))
      )}
    </div>
  );
}
