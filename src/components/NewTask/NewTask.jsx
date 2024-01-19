import {useState} from "react";
import {useContext} from "react";
import {DataContext} from "../../contexts/DataContext";
import "./NewTask.css";

const newTaskFormat = {
    taskTitle: "",
    taskDetails: "",
    taskExpDate: "",
    taskCreationDate: "",
};

const NewTask = ({closeNewTaskMenu}) => {
    const {data, setData} = useContext(DataContext);
    const [newTaskData, setNewTaskData] = useState(newTaskFormat);
    const handleCloseBtnClick = () => {
        closeNewTaskMenu();
    };
    const handleChange = (e) => {
        setNewTaskData({
            ...newTaskData,
            [e.target.name]: e.target.value,
        });
    };
    const addTask = (e) => {
        e.preventDefault();
        let creationDate = Date.now().toString();
        let temp = newTaskData;
        temp.taskCreationDate = creationDate;
        data.currentProject.phase1Tasks.push(temp);
        setNewTaskData(newTaskFormat);
        closeNewTaskMenu();
    };
    return (
        <div className="new-task-modal">
            <div className="new-task">
                <div className="new-task__close-btn-container">
                    <button
                        onClick={handleCloseBtnClick}
                        className="btn new-task__close-btn">
                        ╳
                    </button>
                </div>
                <form className="new-task-form">
                    <input
                        className="new-task__title"
                        type="text"
                        placeholder="Título de la tarea"
                        onChange={handleChange}
                        name="taskTitle"
                    />
                    <textarea
                        className="new-task__details"
                        type="text"
                        placeholder="Detalles de la tarea"
                        onChange={handleChange}
                        name="taskDetails"
                    />
                    <input
                        className="new-task__expiration"
                        type="date"
                        onChange={handleChange}
                        name="taskExpDate"
                    />
                    <button
                        className="btn new-task__add-task-btn"
                        onClick={addTask}>
                        Agregar tarea
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewTask;
