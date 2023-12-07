import { todoList, add, update, deleteAll, getTodoList } from "../TodoList";

describe("Todo list operations", () => {
  it("Add function with empty string", () => {
    add("");
    expect(todoList.length).toBe(0);
  });

  it("Add function with null", () => {
    add();
    expect(todoList.length).toBe(0);
  });

  it("Add function", () => {
    add("Do homework");
    add("Walk the dog");
    expect(todoList.length).toBe(2);
  });

  it("Delete all function", () => {
    deleteAll();
    expect(todoList.length).toBe(0);
  });

  it("Get function", () => {
    add("Do homework");
    add("Walk the dog");
    getTodoList()
    expect(getTodoList().length).toBe(2);
  });

  it("Update function with only empty string", () => {
    expect(update("")).toBe(false);
  });

  it("Update function with id empty string, task as string and isCompleted as string", () => {
    expect(update("1", "Do homework", "true")).toBe(false);
  });

  it("Update function with id as null, task as string and isCompleted as Boolean", () => {
    expect(update(null, "Do homework", true)).toBe(false);
  });

  it("Update function with id as number 3, task as string and isCompleted as Boolean", () => {
    //3 is not their in list.
    expect(update(3, "Do homework", true)).toBe(undefined);
  });

  it("Update function with id as number 1, task as string and isCompleted as Boolean", () => {
    expect(update(1, "Do homework", true)).toBe(true);
  });
});
