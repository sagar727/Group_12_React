import { StyleSheet, Text, View, SafeAreaView, FlatList,  Platform, StatusBar  } from 'react-native';

import {useState} from "react"

// custom component for a FlatList row
import RowComponent from './components/RowComponent';

// import the todo list
import { todoList } from './TodoList';

export default function App() {
<<<<<<< Updated upstream
  
  // set the flatlist's state variable to the todo list
  const [listData, setListData] = useState(todoList)
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1}}>
        <Text>Todo List</Text>
        <FlatList
          style={styles.list}
          data={listData}
          renderItem = {
            ({item})=>{
              return <RowComponent rowNumber={item.id}/>
            }
          }/>
      </View>
    </SafeAreaView>
  );
=======
	// set the flatlist's state variable to the todo list
	const [listData, setListData] = useState(todoList);

	const updateItemCompletion = (itemId, isCompleted) => {
		setListData((currentListData) =>
			currentListData.map((item) =>
				item.id === itemId ? { ...item, isCompleted } : item
			)
		);
	};

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
				{ text: "OK", onPress: () => setListData([]) },
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

		// Find the maximum ID in the current list
		const maxId = listData.reduce((max, item) => Math.max(max, item.id), 0);

		// Create a new task with ID = maxId + 1
		const newTask = {
			id: maxId + 1,
			name: taskName,
			isCompleted: false,
		};

		setListData((currentListData) => [...currentListData, newTask]);
		setTaskName("");
	};

	const isListEmpty = listData.length === 0;

	const ItemSeparator = () => {
		return <View style={styles.separator} />;
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }}>
				<View style={styles.header}>
					<Text style={styles.title}>GROUP 12 - Todo List</Text>
					<TouchableOpacity
						onPress={handleDeletePress}
						style={styles.deleteButtonContainer}
					>
						<Image
							source={require("./assets/delete.png")}
							style={styles.deleteButton}
						/>
					</TouchableOpacity>
				</View>
				<FlatList
					data={listData}
					renderItem={({ item }) => (
						<RowComponent
							todo={item}
							onToggleCompletion={updateItemCompletion}
						/>
					)}
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
>>>>>>> Stashed changes
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },  
});
