import CustomInput from "./CustomInput";

import "./AddTask.scss";
import { useState } from "react";

const AddTask = () => {
    const onChange = (e) => {
        setTask(e.target.value);
    };

    const [task, setTask] = useState("");
    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar uma tarefa..."
                value={task}
                onChange={onChange}
            />
        </div>
    );
};

export default AddTask;
