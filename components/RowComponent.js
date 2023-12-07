import { StyleSheet, Text, View, Button, Switch } from "react-native";
// import a custom hook
import useCustomHook from '../useCustomHook';

const RowComponent = (props) => {
	const MyHook = useCompletionValue(props.itemData.isCompleted);
	console.log(props)

	const btnPressed = () => {
		// call the hook's function
		MyHook.toggle(props.itemData.id, props.itemData.name)
	};

	return (
		<View style={{paddingLeft:20,paddingRight:20,borderBottomWidth:1}}>
			<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50}}>
			<Text style={{marginRight:10,fontSize:18}}>{props.rowNumber}-{todo.name}</Text>
			{/* output the hook's state variable to the ui */}
			<Switch
				testID='switch'
				trackColor={{ false: "#767577", true: "green" }}
				onValueChange={btnPressed}
				value={todoCompletionValue}			
			/>
			</View>
			<Text style={{color:todoCompletionValue ? 'green' :'skyblue',fontSize:15}}>
				{/* {MyHook.someValue} */}
				{todoCompletionValue ? 'FINISHED' : 'PENDING'}
			</Text>		
		</View>
	);
};

export default RowComponent;