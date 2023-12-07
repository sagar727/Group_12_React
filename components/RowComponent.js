import { StyleSheet, Text, View, Button } from "react-native";
import useCompletionValue from "../useCustomHook";


// import a custom hook

const RowComponent = (props) => {
	const MyHook = useCompletionValue(props.itemData.isCompleted);
	console.log(props)

	const btnPressed = () => {
		// call the hook's function
		MyHook.toggle(props.itemData.id, props.itemData.name)
	};
	return (
		<View>
			<Text style={styles.text}>{props.itemData.id}</Text>
			<Text style={styles.text}>{props.itemData.name}</Text>
			{(
				props.itemData.isCompleted && (<Text style={styles.text}>True</Text>) || (<Text style={styles.text}>False</Text>)
			)}
			<Button title="Test" onPress = {btnPressed}/>
			{/* output the hook's state variable to the ui */}
			{/* <Text>{MyHook.todoCompletionValue}</Text> */}
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
	},
});

export default RowComponent;
