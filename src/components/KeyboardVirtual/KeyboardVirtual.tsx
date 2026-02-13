import type { JSX } from "react"
import { alphabetSpanish, numberColumn } from "../../alphabetSpanish"
import './KeyboardVirtual.css'

export const KeyboardVirtual = () => {
    
    return (
        <div className="keyboard">
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
