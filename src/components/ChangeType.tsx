import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [Change, setChange] = useState<QuestionType>("short_answer_question");
    function changeType(): void {
        if (Change === "short_answer_question") {
            setChange("multiple_choice_question");
        } else {
            setChange("short_answer_question");
        }
    }
    return (
        <div>
            <div>
                {Change === "short_answer_question" ?
                    "Short Answer"
                :   "Multiple Choice"}
            </div>
            <Button onClick={changeType}>Change Type</Button>
        </div>
    );
}
