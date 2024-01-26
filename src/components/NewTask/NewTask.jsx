import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./NewTask.css";
import ColorSelector from "../ColorSelector/ColorSelector";
import EmptyInputWarningModal from "../EmptyInputWarningModal/EmptyInputWarningModal";

const newTaskFormat = {
    taskTitle: "",
    taskDetails: "",
    taskExpDate: "",
    taskCreationDate: "",
    taskPhase: "phase1",
    taskColor: "",
};

const NewTask = ({ closeNewTaskMenu }) => {
    const { data, setData } = useContext(DataContext);
    const [newTaskData, setNewTaskData] = useState(newTaskFormat);
    const [warningActive, setWarningActive] = useState(false);
    const handleCloseBtnClick = () => {
        closeNewTaskMenu();
    };
    const handleChange = (e) => {
        setNewTaskData({
            ...newTaskData,
            [e.target.name]: e.target.value,
        });
    };

    const setTaskColor = (color) => {
        setNewTaskData({
            ...newTaskData,
            taskColor: color,
        });
    };

    const addTask = (e) => {
        e.preventDefault();
        if (
            newTaskData.taskTitle.trim() === "" ||
            newTaskData.taskDetails.trim() === "" ||
            newTaskData.taskExpDate.trim() === "" ||
            newTaskData.taskPhase.trim() === "" ||
            newTaskData.taskColor.trim() === ""
        ) {
            setWarningActive(true);
        } else {
            let creationDate = Date.now();
            let temp = newTaskData;
            temp.taskCreationDate = creationDate;
            data.currentProject.phase1Tasks.push(temp);
            setNewTaskData(newTaskFormat);
            closeNewTaskMenu();
            saveProject();
        }
    };

    const toggleWarningModal = () => {
        warningActive ? setWarningActive(false) : setWarningActive(true);
    };

    const saveProject = () => {
        const currentProject = data.currentProject;
        let newArr = data.projects.filter(
            (el) => el.projectId !== currentProject.projectId
        );
        data.projects = newArr;
        data.projects.push(currentProject);
        window.localStorage.setItem('data', JSON.stringify(data))
        console.log('guardando...')
    };

    useEffect(() => {
        console.log('data ha sido modificado')
    }, [{data}])

    return (
        <div className="new-task-modal">
            <div className="new-task">
                <div className="new-task__close-btn-container">
                    <h3 className="new-task__close-btn-container__title">
                        Nueva tarea
                    </h3>
                    <button
                        onClick={handleCloseBtnClick}
                        className="btn new-task__close-btn"
                    >
                        ╳
                    </button>
                </div>
                <form className="new-task-form">
                    <label htmlFor="">Título</label>
                    <input
                        className="new-task__title"
                        type="text"
                        onChange={handleChange}
                        name="taskTitle"
                    />
                    <label htmlFor="">Detalles</label>
                    <textarea
                        className="new-task__details"
                        type="text"
                        onChange={handleChange}
                        name="taskDetails"
                    />
                    <div className="new-task__doble-input-line">
                        <label htmlFor="" className="new-task__expdate-label">
                            Fecha límite
                        </label>
                        <label htmlFor="" className="new-task__color-label">
                            Color asignado
                        </label>
                        <input
                            className="new-task__expiration"
                            type="date"
                            onChange={handleChange}
                            name="taskExpDate"
                        />
                        <ColorSelector setTaskColor={setTaskColor} />
                    </div>
                    <button
                        className="btn new-task__add-task-btn"
                        onClick={addTask}
                    >
                        Agregar tarea
                    </button>
                </form>
            </div>
            {warningActive ? (
                <EmptyInputWarningModal
                    toggleWarningModal={toggleWarningModal}
                />
            ) : null}
        </div>
    );
};

export default NewTask;
