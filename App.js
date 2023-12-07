import {
	Text,
	View,
	FlatList,
	TouchableOpacity,
	Image,
	Alert,
	TextInput,
	Button,
	SafeAreaView,
} from "react-native";

import { useState } from "react";

// custom component for a FlatList row
import RowComponent from "./components/RowComponent";

// import the todo list
import { todoList, add, getTodoList, deleteAll } from "./TodoList";

import styles from "./style";

export default function App() {
	// set the flatlist's state variable to the todo list
	const [listData, setListData] = useState(todoList);

	const handleDeletePress = () => {
		if (listData.length === 0) {
			Alert.alert("Info", "You have no tasks to delete");
			return;
		}
		Alert.alert(
			"Confirm Delete",
			"Are you sure you want to delete all items?",
			[
				{ text: "Cancel", style: "cancel" },
				{
					text: "OK",
					onPress: () => {
						deleteAll();
						setListData([]);
					},
				},
			],
			{ cancelable: true }
		);
	};
	const [taskName, setTaskName] = useState("");

	const addTask = () => {
		if (taskName.trim().length === 0) {
			Alert.alert("Warning", "A task name is required");
			return;
		}

		add(taskName);
		setListData(getTodoList());
		setTaskName("");
	};

	const ItemSeparator = () => {
		return <View style={styles.separator} />;
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }}>
				<View style={styles.header}>
					<Text style={styles.title}>GROUP 12 - Todo List</Text>
					<TouchableOpacity onPress={handleDeletePress}>
						<Image
							source={require("./assets/delete.png")}
							style={styles.deleteButton}
						/>
					</TouchableOpacity>
				</View>
				<FlatList
					data={listData}
					renderItem={({ item }) => <RowComponent itemData={item} />}
					keyExtractor={(item) => item.id.toString()}
					ListEmptyComponent={<Text>You Have No Tasks</Text>}
					ItemSeparatorComponent={listData.length > 1 ? ItemSeparator : null}
					style={styles.flatListSpacing}
					testID="listData"
				/>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Enter task name"
						value={taskName}
						onChangeText={setTaskName}
						testID="taskInputBox"
					/>
					<View style={styles.buttonContainer}>
						<Button title="Add Task" onPress={addTask} testID="btnSubmitTask" />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
}
