"use client";
import { postTodo } from "@/apis/todo";
import { useState } from "react";
import styles from "./todoInput.module.css";
import { useRouter } from "next/navigation";

export default function TodoInput() {
  const [name, setName] = useState("");
  const router = useRouter();
  const handleAddButtonClick = async () => {
    const postResult = await postTodo({
      name: name,
    });

    if (postResult) {
      setName("");
      router.refresh();
    }
  };

  const handleTodoNameOnChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.todoinput_container}>
      <input
        value={name}
        onChange={(e) => handleTodoNameOnChange(e)}
        className={styles.input}
        type="text"
        placeholder="할 일을 입력해주세요"
      />
      <img
        className={styles.button_image}
        src="/images/button/Type=Add, Size=Large, State=Default.svg"
        onClick={handleAddButtonClick}
      />
      <img
        className={styles.button_image_small}
        src="/images/button/Type=Add, Size=Small, State=Default.svg"
        onClick={handleAddButtonClick}
      />{" "}
    </div>
  );
}
