import { fetchTodos } from "@/apis/todo";
import TodoList from "@/components/todolist/TodoList";
import TodoInput from "@/components/todoInput/todoInput";

export interface TodoType {
  isCompleted: boolean;
  name: string;
  id: number;
}
export default async function Home() {
  const list = await fetchTodos();

  return (
    <div className="main_container">
      <TodoInput></TodoInput>
      <TodoList list={list}></TodoList>
    </div>
  );
}
