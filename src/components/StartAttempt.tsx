import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [startingAttempt, setStartingAttempt] = useState<number>(3);
    const [completeAttempt, setCompleteAttempt] = useState<boolean>(false);
    function startQuiz(): void {
        if (startingAttempt > 0) {
            setStartingAttempt(startingAttempt - 1);
            setCompleteAttempt(true);
        }
    }
    function stopQuiz(): void {
        setCompleteAttempt(false);
    }
    function useMulligan(): void {
        setStartingAttempt(startingAttempt + 1);
    }
    return (
        <div>
            <p>Attempt: {startingAttempt}</p>
            <Button
                onClick={startQuiz}
                disabled={completeAttempt || startingAttempt === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!completeAttempt}>
                Stop Quiz
            </Button>
            <Button onClick={useMulligan} disabled={completeAttempt}>
                Mulligan
            </Button>
        </div>
    );
}
