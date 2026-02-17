import type { JSX } from "react"
import { alphabetSpanish, numberColumn } from "../../alphabetSpanish"
import './KeyboardVirtual.css'
import { useEffect } from "react";
import { useRef } from "react";


export const KeyboardVirtual = () => {
    
    const keyboardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const keypress = (event:KeyboardEvent) => {
           
            if (!keyboardRef.current) return;
            for (const col of keyboardRef.current.children) {
                for (const row of col.children)
                    if (row.innerHTML === event.key) {
                        row.classList.add('key-pressed')
                        setTimeout(() => {
                            row.classList.remove('key-pressed')
                        }, 150);
                    }
            }
        }
        window.addEventListener('keydown', keypress)
    
      return () => {
        window.removeEventListener('keydown', keypress)
      }
    }, [])


    return (
        <div className="keyboard" ref={keyboardRef}>
            {numberColumn.map((n): JSX.Element => {
                return (
                    <div className={`column-keys c${n+1}`} key={`row-${n}`}>
                        {alphabetSpanish[n].map((c, index): JSX.Element => {
                            const isTopRow = n < 1;
                            return (
                                <button 
                                    id={`${index}-${n}`} 
                                    className={`key ${isTopRow ? 'topRow' : 'topButtom'}`} 
                                    key={`${index}${n}`}
                                >
                                    {c}
                                </button>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};
