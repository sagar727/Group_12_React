import { useState } from "react";
import { todoList } from "./TodoList";

const useCompletionValue = (initialValue) => {
  const [todoCompletionValue, setTodoCompletionValue] = useState(initialValue);

  const toggle = (id) => {
    const foundItem = todoList.find((item) => {
      return item.id === id;
    });

    if (foundItem === undefined) {
      console.log("Item [" + id + "] not found!");
      return;
    }

    const newValue = !todoCompletionValue;
    setTodoCompletionValue(newValue);
    foundItem.isCompleted = newValue;
  };

  return { todoCompletionValue, toggle };
};

export default useCompletionValue;
