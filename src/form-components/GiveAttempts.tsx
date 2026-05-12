import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [ask, setAsk] = useState<string>("");
    function updateRequested(event: React.ChangeEvent<HTMLInputElement>): void {
        setAsk(event.target.value);
    }
    function use_attempt(): void {
        setAttempts(attempts - 1);
    }
    function gain(): void {
        const tries = parseInt(ask);
        if (!isNaN(tries)) {
            setAttempts(attempts + tries);
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>{attempts}</p>
            <input type="number" value={ask} onChange={updateRequested} />
            <button onClick={use_attempt} disabled={attempts === 0}>
                use
            </button>
            <button onClick={gain}>gain</button>
        </div>
    );
}
