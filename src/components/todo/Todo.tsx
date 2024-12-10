"use client";
import { fetchTodoById, patchTodo } from "@/apis/todo";
import styles from "./todo.module.css";
import { useRouter } from "next/navigation";
import { TodoType } from "@/app/page";

export interface TodoProps {
  todoList: Array<TodoType>;
  isTodo: boolean;
}
export default function Todo(props: TodoProps) {
  const router = useRouter();

  const handleTodoClick = (todoId: number) => {
    router.push("/detail/" + todoId);
  };

  const handleTodoCheckClick = async (todoId: number) => {
    const fetchedTodo = await fetchTodoById(todoId);
    await patchTodo(todoId, {
      isCompleted: !fetchedTodo.isCompleted,
    });
    router.refresh();
  };

  return (
    <div className={styles.todo_container}>
      <img
        className={styles.todo_title}
        src={
          props.isTodo
            ? "/images/img/todo/todo.svg"
            : "/images/img/done/done.svg"
        }
      />
      {props.todoList.length === 0 ? (
        <>
          <img
            className={styles.todoImage}
            src={
              props.isTodo
                ? "/images/img/todo-large/Type=Todo, Size=Large.svg"
                : "/images/img/done-large/Type=Done, Size=Large.svg"
            }
          />
          <p className={styles.todoText}>
            {props.isTodo ? (
              <>
                할 일이 없어요.
                <br />
                TODO를 새롭게 추가해주세요!
              </>
            ) : (
              <>
                아직 다 한 일이 없어요.
                <br />
                해야 할 일을 체크해보세요!
              </>
            )}
          </p>
        </>
      ) : (
        props.todoList.map((todo, index) => (
          <div
            key={index}
            onClick={() => handleTodoClick(todo.id)}
            className={
              props.isTodo
                ? styles.todo_item
                : styles.todo_item + " " + styles.done
            }
          >
            <img
              onClick={(e) => {
                e.stopPropagation(); // 이벤트 전파 중단
                handleTodoCheckClick(todo.id);
              }}
              src={
                props.isTodo
                  ? "/icons/property-default/Property 1=Default.svg"
                  : "/icons/property-frame/Property 1=Frame.svg"
              }
            />
            <p className={styles.todo_item_text}>{todo.name}</p>
          </div>
        ))
      )}
    </div>
  );
}
