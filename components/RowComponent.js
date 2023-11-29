import { StyleSheet, Text, View, Button } from 'react-native';

// import a custom hook
import useCustomHook from '../useCustomHook';

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