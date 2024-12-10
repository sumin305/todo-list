"use client";
import { postTodo } from "@/apis/todo";
import { useState } from "react";
import styles from "./todoInput.module.css";

export default function TodoInput() {
  const [name, setName] = useState("");
  const handleAddButtonClick = async () => {
    const postResult = await postTodo({
      name: name,
    });

    if (postResult) {
      alert("할 일 추가에 성공하였습니다.");
    }
  };

  const handleTodoNameOnChange = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.todoinput_container}>
      <input
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
