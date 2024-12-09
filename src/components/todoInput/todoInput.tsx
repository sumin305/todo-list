"use client";
import styles from "./todoInput.module.css";
export default function TodoInput() {
  const handleAddButtonClick = () => {
    console.log("click");
  };
  return (
    <div className={styles.todoinput_container}>
      <input
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
