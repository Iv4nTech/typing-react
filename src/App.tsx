import { KeyboardVirtual } from "./components/KeyboardVirtual/KeyboardVirtual"
import { InputText } from "./components/InputText/InputText"
import { TextArea } from "./components/TextArea/TextArea"
import { use, useState } from "react"
import './App.css'
function App() {
  
    const [changeInput, setChangeInput] = useState(false);
    const [text, setText] = useState('');
    const [textSystem, setTextSystem] = useState<string[]>([]);

   const getChange = (change:boolean) => {
    setChangeInput(change);
  }

  const getText = (text:string) => {
    setText(text);
  }

  const getArrayText = (text:string[]) => {
    setTextSystem(text)
  }

    return <>
    <div>
      <h1>{textSystem}</h1>
      <TextArea handleText={getArrayText} changeInput={changeInput}></TextArea>
      <InputText handleText={getText} textSystem={textSystem}></InputText>
      <KeyboardVirtual handleChange={getChange}></KeyboardVirtual>
    </div>
    </>


}

export default App
