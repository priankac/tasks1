import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selection, setSelection] = useState<string>(options[0]);
    function updateSelection(
        event: React.ChangeEvent<HTMLSelectElement>,
    ): void {
        setSelection(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selection} onChange={updateSelection}>
                {options.map((option: string) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selection === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
