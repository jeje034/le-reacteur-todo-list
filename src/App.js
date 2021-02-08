import "./App.css";
import { useState } from "react";
import Task from "./Task";
import Header from "./Header";
import Footer from "./Footer";
function App() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [tasksDone, setTasksDone] = useState([]);

    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();

        if (!newTask || tasks.indexOf(newTask) !== -1) {
            return;
        }
        // console.log("submit f");
        const newTasks = [...tasks];
        newTasks.push(newTask);
        setTasks(newTasks);
        setNewTask("");

        const newTasksDone = [...tasksDone];
        newTasksDone.push(false);
        setTasksDone(newTasksDone);
    };

    return (
        <div>
            <Header />
            {tasks.map((task, index) => {
                return (
                    <Task
                        key={task}
                        task={task}
                        index={index}
                        tasks={tasks}
                        setTasks={setTasks}
                        tasksDone={tasksDone}
                        setTasksDone={setTasksDone}
                    />
                );
            })}
            <form onSubmit={handleSubmitForm} className="app-form">
                <input
                    className="app-input"
                    placeholder="New task"
                    type="text"
                    name="newTask"
                    value={newTask}
                    onChange={handleNewTaskChange}
                ></input>

                <input
                    type="submit"
                    value="Add task"
                    className="app-button-add-task"
                ></input>
            </form>
            <Footer />
        </div>
    );
}
export default App;
