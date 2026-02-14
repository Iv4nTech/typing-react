import { phrases } from "../../phrases";
import { useEffect, useRef, useState } from "react";
import './TextArea.css';
import type { JSX } from "react/jsx-runtime";


interface TextAreaProps {
    changeInput:boolean;
    handleText: (text:string[]) => void;
}


export const TextArea = ({changeInput, handleText}:TextAreaProps) =>{
    
    const [pharase] = useState<string[]>(() => {
         const phraseNumber =  Math.floor(Math.random() * phrases.length);
        const phrase = phrases[phraseNumber];
        const arrayObj = phrase.split('');
        const stringArray = arrayObj.map(s => s.valueOf());
        return stringArray;
    })


    useEffect(() => {
        if(changeInput) {
            handleText(pharase);
        } 
    }, [pharase])
    

    
    const textRef = useRef<HTMLDivElement>(null);
    
    function messageStart() {
        return <p className="message">Pulsa cualquier tecla para empezar!</p>;
    }

    return <div ref={textRef} className="text">
       { changeInput ? pharase.map((letter:string, index:number):JSX.Element => {
            return <span key={index} className="letter">{letter}</span>
       }) : messageStart()}
    </div>
}