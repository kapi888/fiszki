import { useState } from "react";
import "./Flashcard.css";

function Flashcard({question, answer}) {
    const [isflipped, setIsFlipped] = useState(false);

    function handleFlip() {
        setIsFlipped(!isflipped)
    }

    return (
        <div className="flashcard">  
            {isflipped ?<p>{answer}</p> : <p>{question}</p>}
            <button id="przycisk" onClick={handleFlip}>Zobacz odpowiedz</button>
            <p id="numer">Ilość:</p>
        </div>
    )
}

export default Flashcard