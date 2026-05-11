import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "🎏 Dragon Boat Festival"
    | "🎨 Holi"
    | "🎄 Christmas"
    | "🪔 Diwali"
    | "🎊 New Year";

export function CycleHoliday(): React.JSX.Element {
    const [cycle_holiday, setCycle_holiday] = useState<Holiday>("🎊 New Year");
    const alphabet: Record<Holiday, Holiday> = {
        "🎄 Christmas": "🪔 Diwali",
        "🪔 Diwali": "🎏 Dragon Boat Festival",
        "🎏 Dragon Boat Festival": "🎨 Holi",
        "🎨 Holi": "🎊 New Year",
        "🎊 New Year": "🎄 Christmas",
    };
    const year: Record<Holiday, Holiday> = {
        "🎊 New Year": "🎨 Holi",
        "🎨 Holi": "🎏 Dragon Boat Festival",
        "🎏 Dragon Boat Festival": "🪔 Diwali",
        "🪔 Diwali": "🎄 Christmas",
        "🎄 Christmas": "🎊 New Year",
    };
    return (
        <div>
            <h3>Cycle Holiday</h3>
            <div>Holiday: {cycle_holiday}</div>
            <Button
                onClick={() => {
                    setCycle_holiday(alphabet[cycle_holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setCycle_holiday(year[cycle_holiday]);
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
