"use client";
import { fetchTodoById, patchTodo } from "@/apis/todo";
import { TodoType } from "../main/main";
import styles from "./todolist.module.css";
import { useRouter } from "next/navigation";

export interface TodoProps {
  todoList: Array<TodoType>;
}
export default function Todo(props: TodoProps) {
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
            <img
              onClick={() => handleTodoClick(todo.id)}
              src="/icons/property-default/Property 1=Default.svg"
            />
            <p className={styles.todo_item_text}>{todo.name}</p>
          </div>
        ))
      )}
    </div>
  );
}
