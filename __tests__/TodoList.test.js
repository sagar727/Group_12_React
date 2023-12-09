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

  it("Update function with id string, isCompleted as string", () => {
    expect(update("1", "true")).toBe(false);
  });

  it("Update function with id as null, isCompleted as Boolean", () => {
    expect(update(null, true)).toBe(false);
  });

  it("Update function with id as number 3, isCompleted as Boolean", () => {
    //3 is not their in list.
    expect(update(3, true)).toBe(false);
  });

  it("Update function with id as number 1, isCompleted as Boolean", () => {
    expect(update(1, true)).toBe(true);
  });
});
