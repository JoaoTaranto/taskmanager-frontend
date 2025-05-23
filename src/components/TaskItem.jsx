import { AiFillDelete } from "react-icons/ai";

import "./TaskItem.scss";

const TaskItem = ({ task }) => {
    return (
        <div className="task-item-container">
            <label
                className={
                    task.isCompleted
                        ? "checkbox-container-completed"
                        : "checkbox-container"
                }
            >
                {task.description}
                <input type="checkbox" defaultChecked={task.isCompleted} />
                <span
                    className={
                        task.isCompleted ? "checkmark completed" : "checkmark"
                    }
                ></span>
            </label>

            <div className="delete">
                <AiFillDelete size={18} color="F97474" />
            </div>
        </div>
    );
};

export default TaskItem;
