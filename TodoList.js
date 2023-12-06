// NOTE: This is an example! Refer to the project description for
// how this should be implemented!
// let todoList = [
//   { id: 0, name: "Some item", isCompleted: false },
//   { id: 1, name: "Another item", isCompleted: false },
// ];

let todoList = [];

const add = (task) => {
  if (task !== undefined) {
    if (task.trim().length !== 0) {
      const size = todoList.length;
      console.log(size);
      todoList.push({
        id: size + 1,
        name: task,
        isCompleted: false,
      });
      console.log(todoList);
    }
  }
};

const update = (id, task, isCompleted) => {
  if (id !== undefined || task !== undefined || isCompleted !== undefined) {
    if (typeof id === "number" && typeof isCompleted === "boolean") {
      if (task.trim().length !== 0) {
        console.log(todoList);
        const filteredList = todoList.filter((task) => task.id == id);
        if (filteredList.length != 0) {
          todoList = todoList.filter((task) => task.id != id);
          todoList.push({
            id: id,
            name: task,
            isCompleted: isCompleted,
          });
          console.log(todoList);
          return true
        }else{
            return false
        }
      }else{
        return false
      }
    }else{
        return false
    }
  }else{
    return false
  }
};

const deleteAll = () => {
  todoList.length = 0;
  console.log(todoList);
};

export { todoList, add, update, deleteAll };
