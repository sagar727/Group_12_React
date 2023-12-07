import { Text, View, Switch } from "react-native";
// import a custom hook
import useCompletionValue from "../useCustomHook";

const RowComponent = (props) => {
	const MyHook = useCompletionValue(props.itemData.isCompleted);
	console.log(props)

	const btnPressed = () => {
		// call the hook's function
		MyHook.toggle(props.itemData.id, props.itemData.name)
	};

	return (
		<View style={{paddingLeft:20,paddingRight:20}}>
			<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:50}}>
			<Text style={{marginRight:10,fontSize:18}}>{props.itemData.id}-{props.itemData.name}</Text>
			<Switch
				testID='switch'
				trackColor={{ false: "#767577", true: "green" }}
				onValueChange={btnPressed}
				value={props.itemData.isCompleted}			
			/>
			</View>
			<Text style={{color:props.itemData.isCompleted ? 'green' :'skyblue',fontSize:15, paddingBottom:10}}>
				{props.itemData.isCompleted ? 'FINISHED' : 'PENDING'}
			</Text>		
		</View>
	);
};

export default RowComponent;