import { act, renderHook } from "@testing-library/react-native";

import useCompletionValue from "../useCustomHook";
import { todoList } from "../TodoList";

describe("Custom Hook Tests", () => {
  it("The custom hook can set the initial value of the todoCompletionValue state variable", () => {
    // render the hook
    const result = renderHook(useCompletionValue, {
      initialProps: true,
    }).result;

    expect(result.current.todoCompletionValue).toBe(true);
  });

  it("The toggle() function updates the state variable", () => {
    const item = todoList[0]; //isComplete == false

    const result = renderHook(useCompletionValue, {
      initialProps: item.isCompleted,
    }).result;

    expect(result.current.todoCompletionValue).toBe(false);
    expect(todoList[0].isCompleted).toBe(false);

    act(() => {
      result.current.toggle(item.id);
    });

    expect(result.current.todoCompletionValue).toBe(true);
    expect(todoList[0].isCompleted).toBe(true);

    act(() => {
      result.current.toggle(item.id);
    });

    expect(result.current.todoCompletionValue).toBe(false);
    expect(todoList[0].isCompleted).toBe(false);
  });
});
