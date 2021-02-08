import trashcan from "./assets/trashcan.PNG";

const Task = ({ task, index, tasks, setTasks, tasksDone, setTasksDone }) => {
    const handleCheckbox = (event) => {
        // console.log(event.target.id);

        const newTasksDone = [...tasksDone];
        newTasksDone[event.target.id] = !tasksDone[event.target.id];
        setTasksDone(newTasksDone);
    };

    const handleClickTrashcan = (event) => {
        console.log("trash clic");
        console.log(event);

        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);

        const newTasksDone = [...tasksDone];
        newTasksDone.splice(index, 1);
        setTasksDone(newTasksDone);
    };

    return (
        <div key={index} className="task-task">
            <input
                className="task-checkbox"
                type="checkbox"
                id={index}
                name={index}
                onChange={handleCheckbox}
            ></input>
            <label
                htmlFor={index}
                className={
                    tasksDone[index]
                        ? "task-label-task-done app-task"
                        : "task-label-task"
                }
            >
                {task}
            </label>
            <img
                src={trashcan}
                alt="trashcan"
                onClick={handleClickTrashcan}
                className="task-trashcan"
            />
        </div>
    );
};

export default Task;
