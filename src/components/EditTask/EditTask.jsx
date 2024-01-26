import "./EditTask.css";
import {useContext, useState} from "react";
import {DataContext} from "../../contexts/DataContext";
import ColorSelector from "../ColorSelector/ColorSelector";
import EmptyInputWarningModal from "../EmptyInputWarningModal/EmptyInputWarningModal";

const taskFormat = {
    taskTitle: "",
    taskDetails: "",
    taskExpDate: "",
    taskCreationDate: "",
    taskPhase: "",
    taskColor: "",
};

const EditTask = ({
    toggleEditTask,
    taskData,
    saveProject,
    toggleMenu,
    toggleVisualizationData,
}) => {
    const {data, setData} = useContext(DataContext);
    const [warningActive, setWarningActive] = useState(false);
    const [editedTaskData, setEditedTaskData] = useState(taskData);
    const handleChange = (e) => {
        setEditedTaskData({
            ...editedTaskData,
            [e.target.name]: e.target.value,
        });
    };
    const toggleWarningModal = () => {
        warningActive ? setWarningActive(false) : setWarningActive(true);
    };
    const setTaskColor = (color) => {
        setEditedTaskData({
            ...editedTaskData,
            taskColor: color,
        });
    };
    const saveTask = (e) => {
        e.preventDefault();
        if (
            editedTaskData.taskTitle.trim() === "" ||
            editedTaskData.taskDetails.trim() === "" ||
            editedTaskData.taskExpDate.trim() === "" ||
            editedTaskData.taskPhase.trim() === "" ||
            editedTaskData.taskColor.trim() === ""
        ) {
            setWarningActive(true);
        } else {
            let currentPhase = `${editedTaskData.taskPhase}Tasks`;
            let currentPhaseTasks = data.currentProject[currentPhase];
            let updatedPhaseTasks = currentPhaseTasks.filter(
                (el) => el.taskCreationDate !== editedTaskData.taskCreationDate
            );
            updatedPhaseTasks.push(editedTaskData);
            // data.currentProject[currentPhase] = updatedPhaseTasks;
            setData({
                ...data,
                currentProject: {
                    ...data.currentProject,
                    [currentPhase]: updatedPhaseTasks,
                },
            });
            window.localStorage.setItem("data", JSON.stringify(data));

            toggleEditTask();
            toggleMenu();
            toggleVisualizationData();
        }
    };
    const handleCloseBtnClick = () => {
        toggleEditTask();
    };
    return (
        <div className="new-task-modal">
            <div className="new-task">
                <div className="new-task__close-btn-container">
                    <h3 className="new-task__close-btn-container__title">
                        Editar tarea
                    </h3>
                    <button
                        onClick={handleCloseBtnClick}
                        className="btn new-task__close-btn">
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
                        value={editedTaskData.taskTitle}
                    />
                    <label htmlFor="">Detalles</label>
                    <textarea
                        className="new-task__details"
                        type="text"
                        onChange={handleChange}
                        name="taskDetails"
                        value={editedTaskData.taskDetails}
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
                            value={editedTaskData.taskExpDate}
                        />
                        <ColorSelector
                            initialColor={taskData.taskColor}
                            setTaskColor={setTaskColor}
                        />
                    </div>
                    <button
                        className="btn new-task__add-task-btn"
                        onClick={saveTask}>
                        Guardar
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

export default EditTask;
