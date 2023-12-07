import "@testing-library/jest-native/extend-expect";
import {
	render,
	fireEvent,
	screen,
	waitFor,
} from "@testing-library/react-native";

import App from "./App";

import React from "react";

describe("Todo App", () => {
	it("Displays an error message when there are no tasks", () => {
		render(<App />);
		expect(screen.getByText("You Have No Tasks")).toBeTruthy();
	});

	it("Updates the task list when a todo is added", async () => {
		render(<App />);

		const myInput = await screen.findByTestId("taskInputBox");
		const addButton = await screen.findByTestId("btnSubmitTask");

		fireEvent.changeText(myInput, "A New Task");
		fireEvent.press(addButton);

		// Verify that the error message is no longer displayed
		expect(screen.queryByText("You Have No Tasks")).toBeNull();

		// Wait for the newly added task to appear in the FlatList
		await (() => {
			// Check if "A New Task" is present in the FlatList content
			expect(screen.getByText("A New Task")).toBeTruthy();
		});
	});
});
