import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Doubler({
    Val,
    setVal,
}: {
    Val: number;
    setVal: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setVal(2 * Val);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    Val,
    setVal,
}: {
    Val: number;
    setVal: React.Dispatch<React.SetStateAction<number>>;
}): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setVal(0.5 * Val);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [Val, setVal] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{Val}</span>
            </div>
            <Doubler Val={Val} setVal={setVal}></Doubler>
            <Halver Val={Val} setVal={setVal}></Halver>
        </div>
    );
}
