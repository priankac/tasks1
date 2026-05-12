import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [enteredAnswer, setEnteredAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        setEnteredAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <input type="text" value={enteredAnswer} onChange={updateAnswer} />
            {enteredAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
