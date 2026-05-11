import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVariable, setVariable] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    setVariable((currentValue) => !currentValue);
                }}
            >
                Reveal Answer
            </Button>
            {isVariable ?
                <p>42</p>
            :   null}
        </div>
    );
}
