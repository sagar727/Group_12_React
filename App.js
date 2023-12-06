import { StyleSheet, Text, View, SafeAreaView, FlatList,  Platform, StatusBar, Button  } from 'react-native';

import {useState} from "react"

// custom component for a FlatList row
import RowComponent from './components/RowComponent';

// import the todo list
import { todoList, add, update, deleteAll } from './TodoList';

export default function App() {
  
  // set the flatlist's state variable to the todo list
  const [listData, setListData] = useState(todoList)

  const addTask = () => {
      //add()
      //deleteAll()
      update(1,"Another item",true)
  }

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
          <Button title="Add" onPress={addTask}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },  
});
