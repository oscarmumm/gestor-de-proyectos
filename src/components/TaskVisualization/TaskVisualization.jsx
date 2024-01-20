import "./TaskVisualization.css";
import menu_icon from "../../assets/icons/menu-vertical-svgrepo-com.svg";
import TaskVisualizationMenu from "../TaskVisualizationMenu/TaskVisualizationMenu";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const TaskVisualization = ({
    taskVisualizationData,
    setTaskVisualizationActive,
}) => {
    const [taskMenuActive, setTaskMenuActive] = useState(false);
    const { data, setData } = useContext(DataContext);
    //esta funcion también pasa a loc componentes hijos para que al eliminar la tarea se cierren las ventanas modales y vuelva a la vista de proyecto
    const handleCloseBtnClick = () => {
        setTaskVisualizationActive(false);
    };
    const openMenu = () => {
        taskMenuActive ? setTaskMenuActive(false) : setTaskMenuActive(true);
        console.log(data);
    };
    return (
        <div className="task-visualization-modal">
            <div className="task-visualization">
                <div className="task-visualization__header">
                    <button
                        onClick={openMenu}
                        className="btn task-visualization__options-btn"
                    >
                        <img
                            className="task-visualization__options-btn__img"
                            src={menu_icon}
                            alt=""
                        />
                    </button>
                    {taskMenuActive ? (
                        <TaskVisualizationMenu
                            taskVisualizationData={taskVisualizationData}
                            handleCloseBtnClick={handleCloseBtnClick}
                            openMenu={openMenu}
                        />
                    ) : null}
                    <button
                        onClick={handleCloseBtnClick}
                        className="btn task-visualization__close-btn"
                    >
                        ╳
                    </button>
                </div>
                <div className="task-visualization__content">
                    <h4 className="task-visualization__title">
                        {taskVisualizationData.taskTitle}
                    </h4>
                    <p className="task-visualization__details">
                        {taskVisualizationData.taskDetails}
                    </p>
                    <p className="task-visualization__expdate">
                        Fecha límite: <br />
                        {/* esta línea de código muestra la fecha con el formato DD-MM-YYYY en lugar del YYYY-MM-DD predeterminado  */}
                        {taskVisualizationData.taskExpDate.slice(8, 10)}-
                        {taskVisualizationData.taskExpDate.slice(5, 7)}-
                        {taskVisualizationData.taskExpDate.slice(0, 4)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TaskVisualization;
