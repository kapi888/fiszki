import { useState } from "react";
import "./Flashcard.css";

function Flashcard({question, answer}) {
    const [isflipped, setIsFlipped] = useState(false);
    const [counter, setCounter] = useState(0) 

    function handleFlip() {
        setIsFlipped(!isflipped)
        setCounter(counter + 1)
    }

    return (
        <div className="flashcard">  
            {isflipped ? <p>{answer}</p> : <p>{question}</p>}
            <button onClick={handleFlip}>Zobacz odpowiedz</button>
            <p>karta odwócona {counter} razy</p>
        </div>
    )
}

export default Flashcard