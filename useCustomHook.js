import { useState } from "react";
import { todoList, update } from "./TodoList";

const useCompletionValue = (initialValue) => {
  const [todoCompletionValue, setTodoCompletionValue] = useState(initialValue);

  const toggle = (id, name) => {
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
    update(id,name,newValue)
  };

  return { todoCompletionValue, toggle };
};

export default useCompletionValue;
