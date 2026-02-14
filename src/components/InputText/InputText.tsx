import { useEffect } from "react";
import { useRef } from "react";

interface PropsInputText {
    handleText: (text:string) => void;
    textSystem:string[];
}

export const InputText = ({handleText, textSystem}:PropsInputText) => {
  const arrayInputUser:string[] = []; 

  let first = true;

   const inputRef = useRef<HTMLInputElement>(null);
   const textSystemRef = useRef<HTMLDivElement>(null);
   const checkLetter = (arrayUser:string[], arrayPhrase:string[]) => {
       arrayUser.forEach((lu:string) => {
           arrayPhrase.forEach((lp:string) => {
                console.log(lu)
                console.log(lp)
                lu == lp ? console.log('Correcto') : console.log('Incorrecto!')
           });
       });
   }

    const handleChange = ():void => {
        if (!inputRef.current) return;
        arrayInputUser.length >= 1  ? arrayInputUser.push(inputRef.current.value[inputRef.current.value.length-1]) : arrayInputUser.push(inputRef.current.value[0])
        checkLetter(arrayInputUser, textSystem);
        
        if (first) {
           console.log('ejecutado')
            inputRef.current.value = "";
            first = false;
       }
       
    }
    
   useEffect(() => {
       if (!inputRef.current) return;

        handleText(inputRef.current.value); 
       
        inputRef.current && inputRef.current.focus()
        window.addEventListener('click', () => {
            inputRef.current?.focus();
        })
   })
   
    return <input ref={inputRef} onChange={handleChange} type="text"></input>;
}