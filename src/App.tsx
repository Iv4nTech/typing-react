import { KeyboardVirtual } from "./components/KeyboardVirtual/KeyboardVirtual"
import { InputText } from "./components/InputText/InputText"
import { TextArea } from "./components/TextArea/TextArea"
import { useState } from "react"
import './App.css'
function App() {
  
    const [changeInput, setChangeInput] = useState(false);

   const getChange = (change:boolean) => {
    setChangeInput(change);
  }

    return <>
    <div>
      <TextArea changeInput={changeInput}></TextArea>
      <InputText></InputText>
      <KeyboardVirtual handleChange={getChange}></KeyboardVirtual>
    </div>
    </>


}

export default App
