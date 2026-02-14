import { phrases } from "../../phrases";
import { useRef } from "react";
import './TextArea.css';


interface TextAreaProps {
    changeInput:boolean;
}

export const TextArea = ({changeInput}:TextAreaProps) =>{
    
    function phraseRandom():String[] {
        const phraseNumber =  Math.floor(Math.random() * phrases.length);
        const phrase = phrases[phraseNumber];
        return phrase.split('');
    }
    
    const textRef = useRef<HTMLDivElement>(null);
    
    function messageStart() {
        return <p className="message">Pulsa cualquier tecla para empezar!</p>;
    }

    return <div ref={textRef} className="text">
       { changeInput ? phraseRandom().map((letter, index):JSX.Element => {
            return <span key={index} className="letter">{letter}</span>
       }) : messageStart()}
    </div>
}