import { fireEvent, render,screen } from "@testing-library/react"
import Login from "../views/Login"


test('checking login state', ()=>{
    
      render(<Login/>)

     const userInput = screen.getByPlaceholderText('username')
     
     const passwordInput = screen.getByPlaceholderText('password')


     fireEvent.change(userInput,{target:{value:'Peter'}})
     fireEvent.change(passwordInput,{target:{value:'Parker'}})

     expect(userInput.value).toBe('Peter')

     

})