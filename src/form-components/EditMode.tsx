import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [change, setChange] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setChange(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>): void {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>): void {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-switch">
                <input
                    type="checkbox"
                    checked={change}
                    onChange={updateChange}
                />
            </div>
            {change ?
                <div>
                    <input type="text" value={name} onChange={updateName} />

                    <label>
                        student
                        <input
                            type="checkbox"
                            checked={student}
                            onChange={updateStudent}
                        />
                    </label>
                </div>
            :   <p>
                    {name} is {student ? "" : "not "} a student
                </p>
            }
        </div>
    );
}
