"use client";
import { useRouter } from "next/navigation";
import { TodoType } from "../main/main";
import styles from "./todolist.module.css";
import { fetchTodoById, patchTodo } from "@/apis/todo";

export interface TodoProps {
  doneList: Array<TodoType>;
}
export default function Done(props: TodoProps) {
  const router = useRouter();

  const handleTodoClick = async (todoId: number) => {
    const fetchedTodo = await fetchTodoById(todoId);
    await patchTodo(todoId, {
      name: fetchedTodo.name,
      memo: fetchedTodo.memo ?? "",
      imageUrl: fetchedTodo.imageUrl ?? "",
      isCompleted: !fetchedTodo.isCompleted,
    });
    router.refresh();
  };

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
          <div key={index} className={styles.todo_item + " " + styles.done}>
            <img
              onClick={() => handleTodoClick(todo.id)}
              src="/icons/property-frame/Property 1=Frame.svg"
            />
            <p className={styles.todo_item_text}>{todo.name}</p>
          </div>
        ))
      )}
    </div>
  );
}
