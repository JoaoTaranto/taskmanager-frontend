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
        </div>
    );
};

export default TaskItem;
