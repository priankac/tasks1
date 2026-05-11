import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftButton, setLeftButton] = useState<number>(1);
    const [rightButton, setRightButton] = useState<number>(2);
    function leftDie(): void {
        setLeftButton(d6());
    }
    function rightDie(): void {
        setRightButton(d6());
    }
    let score = "";
    if (leftButton === 1 && rightButton === 1) {
        score = "Lose";
    } else if (leftButton === rightButton) {
        score = "Win";
    }
    return (
        <div>
            <h3>Two Dice</h3>
            <div data-testid="left-die">Left Die: {leftButton}</div>
            <div data-testid="right-die">Right Die: {rightButton}</div>
            <Button onClick={leftDie}>Roll Left</Button>
            <Button onClick={rightDie}>Roll Right</Button>
            <div>{score}</div>
        </div>
    );
}
