import React, { useState } from "react";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "yellow",
        "red",
        "blue",
        "white",
        "orange",
        "violet",
        "black",
        "purple",
    ];
    const [color, setColor] = useState<string>("red");
    function updateWheel(event: React.ChangeEvent<HTMLInputElement>): void {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((indColor: string) => (
                <label key={indColor}>
                    <input
                        type="radio"
                        name="color"
                        value={indColor}
                        checked={color === indColor}
                        onChange={updateWheel}
                    />
                    {indColor}
                </label>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}.
            </div>
        </div>
    );
}
