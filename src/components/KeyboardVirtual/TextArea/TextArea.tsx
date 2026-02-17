import './TextArea.css'
import { pharaseRandom } from '../../../pharasesTesting';
import { useEffect, useRef, useState, type JSX } from 'react';

export const TextArea = () => {
    
    const [textInput, setTextInput] = useState<string[]>([]);
    const pharase = pharaseRandom();
    const inputRef = useRef<HTMLInputElement>(null);
    

    useEffect(() => {
        if (!inputRef.current) return;

        inputRef.current.focus();

        inputRef.current.addEventListener('blur', () => {
            inputRef.current?.focus();
        })

        window.addEventListener('keydown', (event):void => {
            const array = textInput;
            if (pharase.length == array.length) {
                console.log('cambio de frase');
            }
            array.push(event.key);
            setTextInput(array);
            
            if (pharase[array.length - 1] == array[array.length - 1]) {
                const letter = document.querySelector(`span.letter[class="letter ${array.length-1}"]`)
                letter?.classList.add('correcto');
                console.log('correcto');
            } else {
                const letter = document.querySelector(`span.letter[class="letter ${array.length-1}"]`)
                letter?.classList.add('incorrecto');
                console.log('incorrecto');
            }
        })
    })

    return <div>
        <div className="text-area">

        {pharase.map((letter:string, index:number):JSX.Element => {
            return <span className={`letter ${index}`} key={index}>{letter}</span>
        })}
           
        </div>
        <input ref={inputRef} type="text" />
    </div>
}