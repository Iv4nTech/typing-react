import { useEffect } from "react";
import { useRef } from "react";

export const InputText = () => {
   
   const inputRef = useRef<HTMLInputElement>(null);

   useEffect(() => {

       if (!inputRef.current) return;

     
        inputRef.current && inputRef.current.focus()
        window.addEventListener('click', () => {
            inputRef.current?.focus();
        })

   })
   
    return <input hidden={true} ref={inputRef} type="text"></input>;
}