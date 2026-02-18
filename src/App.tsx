import { KeyboardVirtual } from "./components/KeyboardVirtual/KeyboardVirtual"
import { use, useState } from "react"
import { InputText } from "./components/InputText/InputText"
import './App.css'

function App() {
  

    return <>
    <div>
      <InputText />
      <KeyboardVirtual />
    </div>
    </>


}

export default App
