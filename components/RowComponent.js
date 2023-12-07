<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { StyleSheet, Text, View, Button } from 'react-native';
=======
import { StyleSheet, Text, View, Button, Switch } from "react-native";
>>>>>>> Stashed changes

// import a custom hook
import useCustomHook from '../useCustomHook';
=======
import { StyleSheet, Text, View, Button } from "react-native";
// import a custom hook
import useCustomHook from "../useCustomHook"
>>>>>>> Stashed changes

<<<<<<< Updated upstream
const RowComponent = (props) => {   

    const MyHook = useCustomHook("some random text here")

    const btnPressed = () => {
        // call the hook's function
        MyHook.someFunction()
    }
    return(
        <View>
            <Text style={styles.text}>This is row #{props.rowNumber}</Text>
            {/* output the hook's state variable to the ui */}
            <Text>Here is some text: {MyHook.someValue}</Text>
            <Button style={styles.btn} title="Press" onPress={btnPressed}/>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
    },    
});

export default RowComponent
=======
const RowComponent = (props) => {
<<<<<<< Updated upstream
	// const MyHook = useCustomHook("");

	const {todo} = props
	const {toggle, todoCompletionValue = todo.isCompleted} = useCustomHook(todo.isCompleted)

	const btnPressed = () => {
		// call the hook's function
		// MyHook.someFunction();
		typeof toggle === 'function' && toggle()
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
=======
	const {toggle, todoCompletionValue = props.todo.isCompleted} = useCustomHook(props.todo.isCompleted)

	const btnPressed = () => {
		// call the hook's function
		typeof toggle === 'function' && toggle(props.todo.id)
	};
	return (
		<View style={{paddingLeft:20, paddingRight:20, borderBottomWidth:1}}>
			<View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:50}}>
				<Text style={{marginRight:10, fontSize:18}}>{props.rowNumber}-{props.todo.name}</Text>
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
>>>>>>> Stashed changes
		</View>
	);
};

export default RowComponent;
>>>>>>> Stashed changes
