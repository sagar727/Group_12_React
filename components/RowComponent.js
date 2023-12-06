import { StyleSheet, Text, View, Button } from "react-native";

// import a custom hook
import useCustomHook from "../useCustomHook";

const RowComponent = (props) => {
	const MyHook = useCustomHook("");

	const btnPressed = () => {
		// call the hook's function
		MyHook.someFunction();
	};
	return (
		<View>
			<Text style={styles.text}>{props.rowNumber}</Text>
			{/* output the hook's state variable to the ui */}
			<Text>{MyHook.someValue}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
	},
});

export default RowComponent;
