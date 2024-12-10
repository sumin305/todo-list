"use client";
import { deleteTodo, fetchTodoById, patchTodo, uploadImage } from "@/apis/todo";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./detail.module.css";
import { useRouter } from "next/navigation";

interface TodoResponse {
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  id: number;
}
export default function Detail() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null); // 파일 입력 요소 참조
  const param = useParams();
  const paramId = Array.isArray(param.id) ? param.id[0] : param.id || "";
  const id: number = parseInt(paramId);
  const [detailTodo, setDetailTodo] = useState<TodoResponse>({
    isCompleted: false,
    imageUrl: "",
    memo: "",
    name: "",
    tenantId: "soom",
    id: 0,
  });

  const [image, setImage] = useState("");
  const fetchDetail = async () => {
    const result = await fetchTodoById(id);
    setDetailTodo(result);
    setImage(result.imageUrl);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const handleTodoCheckClick = async () => {
    const patchResult = await patchTodo(id, {
      isCompleted: !detailTodo.isCompleted,
    });
    setDetailTodo({
      ...detailTodo,
      isCompleted: patchResult.isCompleted,
    });
  };

  const handleMemoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetailTodo({
      ...detailTodo,
      memo: e.target.value,
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      const formData = new FormData();
      formData.append("image", file); // 'imageFile'은 유효한 File 객체여야 함

      const imageUploadResult = await uploadImage(formData);
      console.log(imageUploadResult);
      setDetailTodo({ ...detailTodo, imageUrl: imageUploadResult.url });
      setImage(imageUploadResult.url);
    }
  };

  const handleEditButtonClick = async () => {
    const editResult = await patchTodo(id, {
      isCompleted: detailTodo.isCompleted,
      imageUrl: detailTodo.imageUrl,
      memo: detailTodo.memo,
      name: detailTodo.name,
    });

    if (editResult) {
      router.push("/");
    }
  };

  const handleDeleteButtonClick = async () => {
    const deleteResult = await deleteTodo(id);
    if (deleteResult) {
      router.push("/");
    }
  };

  const handleTodoNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailTodo({
      ...detailTodo,
      name: e.target.value,
    });
  };
  return (
    <div className={styles.detail_container}>
      <div
        className={
          detailTodo.isCompleted
            ? styles.todo_item + " " + styles.done
            : styles.todo_item
        }
      >
        <img
          onClick={() => handleTodoCheckClick()}
          src={
            detailTodo.isCompleted
              ? "/icons/property-frame/Property 1=Frame.svg"
              : "/icons/property-default/Property 1=Default.svg"
          }
        />
        <input
          onChange={(e) => handleTodoNameChange(e)}
          className={styles.todo_item_text}
          value={detailTodo.name}
        />
      </div>

      <div className={styles.info_container}>
        <div className={styles.image_container}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            ref={fileInputRef} // ref로 파일 입력 연결
          />
          {(detailTodo.imageUrl === "" || !detailTodo) && image === "" ? (
            <>
              <img className={styles.addimg} src="/icons/img/img.svg" />
              <img
                className={styles.img_button}
                src="/images/button/Type=Plus.svg"
                onClick={() => {
                  if (fileInputRef.current) {
                    fileInputRef.current.click(); // 숨겨진 파일 입력 클릭
                  }
                }}
              />
            </>
          ) : (
            <>
              <img className={styles.img} src={image} />
              <img
                className={styles.img_button}
                src="/images/button/Type=Edit.svg"
                onClick={() => {
                  if (fileInputRef.current) {
                    fileInputRef.current.click(); // 숨겨진 파일 입력 클릭
                  }
                }}
              />
            </>
          )}
        </div>
        <div className={styles.memo_container}>
          <p className={styles.memo_title}>Memo</p>
          <textarea
            onChange={(e) => handleMemoChange(e)}
            className={styles.memo_content}
            value={detailTodo.memo}
          />
        </div>
      </div>

      <div className={styles.button_wrapper}>
        <img
          onClick={handleEditButtonClick}
          src="/images/button/Type=Edit, Size=Large, State=Active.svg"
          className={styles.button}
        ></img>
        <img
          onClick={handleDeleteButtonClick}
          src="/images/button/Type=Delete, Size=Large, State=Default.svg"
          className={styles.button}
        ></img>
      </div>
    </div>
  );
}
