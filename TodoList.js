// NOTE: This is an example! Refer to the project description for
// how this should be implemented!
// const todoList = [
//   { id: 1, name: "Some item", isCompleted: false },
//   { id: 2, name: "Another item", isCompleted: false },
// ];

const todoList = [];

const add = (task) => {
  if (task !== undefined) {
    if (task.trim().length !== 0) {
      const size = todoList.length;
      todoList.push({
        id: size + 1,
        name: task,
        isCompleted: false,
      });
      console.log(todoList);
    }
  }
};

const getTodoList = () => {
  return todoList;
};

const update = (id, isCompleted) => {
  if (id !== undefined || isCompleted !== undefined) {
    if (typeof id === "number" && typeof isCompleted === "boolean") {
      todoList.map((task) => {
        if (id == task.id) {
          task.isCompleted = isCompleted;
          console.log(todoList);
        }
      });
      if (todoList[id - 1] != null) {
        return true
      } else {
        return false
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

const deleteAll = () => {
  todoList.length = 0;
  console.log(todoList);
};

export { todoList, add, update, deleteAll, getTodoList };
