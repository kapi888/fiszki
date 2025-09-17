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
            <button onClick={handleFlip}>Zobacz odpowiedz</button>
        </div>
    )
}

export default Flashcard