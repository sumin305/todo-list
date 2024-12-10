const host = "https://assignment-todolist-api.vercel.app/api/soom";

interface NameObject {
  name: string;
}

interface PatchObject {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}
export const fetchTodos = async () => {
  const response = await fetch(`${host}/items`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch todos: ${response.statusText}`);
  }
  return response.json();
};

export const fetchTodoById = async (itemId: number) => {
  const response = await fetch(`${host}/items/${itemId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch todo by ID: ${response.statusText}`);
  }
  return response.json();
};

export const postTodo = async (name: NameObject) => {
  const response = await fetch(`${host}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name),
  });

  if (!response.ok) {
    throw new Error(`Failed to create todo: ${response.statusText}`);
  }
  return response.json();
};

export const patchTodo = async (itemId: number, updateData: PatchObject) => {
  const response = await fetch(`${host}/items/${itemId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  });

  if (!response.ok) {
    throw new Error(`Failed to update todo: ${response.statusText}`);
  }
  return response.json();
};

export const deleteTodo = async (itemId: number) => {
  const response = await fetch(`${host}/items/${itemId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Failed to delete todo: ${response.statusText}`);
  }
  return true;
};

export const uploadImage = async (formData: any) => {
  const response = await fetch(`${host}/images/upload`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload image: ${response.statusText}`);
  }
  return response.json();
};
