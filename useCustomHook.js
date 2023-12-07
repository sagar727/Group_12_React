import { useState } from "react";
import { todoList, update } from "./TodoList";

const useCompletionValue = (initialValue) => {
  const [todoCompletionValue, setTodoCompletionValue] = useState(initialValue);

  const toggle = (id) => {
    const newValue = !todoCompletionValue;
    setTodoCompletionValue(newValue);
    update(id, newValue);
  };

  return { todoCompletionValue, toggle };
};

export default useCompletionValue;
