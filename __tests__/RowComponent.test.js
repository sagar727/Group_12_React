// Import the functions from the testing-library
import {render, screen, fireEvent} from '@testing-library/react-native'

// Import the component to test
import RowComponent from "../components/RowComponent"
const todo =  {id:0, name:"Some item", isCompleted:true}

describe("Row Component test", () => { 
   it("Description of the test case should go here",async () => {
         // programatically generate the component
         render(<RowComponent itemData={todo} rowNumber={4}/>)
         // do something with the component using the "screen" variable
         const mySwitch = await screen.findByTestId('switch')
         expect(mySwitch.props.value).toBe(todo.isCompleted)
   })
})