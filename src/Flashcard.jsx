import { useState } from "react";
import "./Flashcard.css";

function Flashcard() {
    const [isflipped, setIsFlipped] = useState(false);

    function handleFlip() {
        setIsFlipped(!isflipped)
    }

    return (
        <div className="flashcard">  
            {isflipped ?<p>4</p> : <p>ile to 2 + 2</p>}
            <button onClick={handleFlip}>Zobacz odpowiedz</button>
        </div>
    )
}

export default Flashcard