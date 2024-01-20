import "./TaskVisualizationMenu.css";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import DeleteWarningModal from "../DeleteWarningModal/DeleteWarningModal";

const TaskVisualizationMenu = ({
    taskVisualizationData,
    handleCloseBtnClick,
    openMenu
}) => {
    const { data, setData } = useContext(DataContext);
    const [deleteWarningModalActive, setDeleteWarningModalActive] =
        useState(false);
    const [currentPhase, setCurrentPhase] = useState(
        taskVisualizationData.taskPhase
    );
    const clickOnDelete = () => {
        setDeleteWarningModalActive(true);
    };
    const closeWarningModal = () => {
        setDeleteWarningModalActive(false);
    };

    const clickMoveToPhase1 = () => {
        taskVisualizationData.taskPhase = 'phase1';
        //agregamos la tarea a la phase 1
        data.currentProject.phase1Tasks.push(taskVisualizationData);
        //eliminamos la tarea de la phase actual
        let currentPhaseTaskList = `${currentPhase}Tasks`
        let filteredPhase = data.currentProject[currentPhaseTaskList].filter((el) => el.taskCreationDate !== taskVisualizationData.taskCreationDate)
        data.currentProject[currentPhaseTaskList] = filteredPhase
        openMenu()
        handleCloseBtnClick()
        console.log(data.currentProject)
    };
    
    const clickMoveToPhase2 = () => {
        taskVisualizationData.taskPhase = 'phase2';
        //agregamos la tarea a la phase 2
        data.currentProject.phase2Tasks.push(taskVisualizationData);
        //eliminamos la tarea de la phase 1
        let currentPhaseTaskList = `${currentPhase}Tasks`
        let filteredPhase = data.currentProject[currentPhaseTaskList].filter((el) => el.taskCreationDate !== taskVisualizationData.taskCreationDate)
        data.currentProject[currentPhaseTaskList] = filteredPhase
        openMenu()
        handleCloseBtnClick()
        console.log(data.currentProject)
    };
    
    const clickMoveToPhase3 = () => {
        taskVisualizationData.taskPhase = 'phase3';
        //agregamos la tarea a la phase 3
        data.currentProject.phase3Tasks.push(taskVisualizationData);
        //eliminamos la tarea de la phase 1
        let currentPhaseTaskList = `${currentPhase}Tasks`
        let filteredPhase = data.currentProject[currentPhaseTaskList].filter((el) => el.taskCreationDate !== taskVisualizationData.taskCreationDate)
        data.currentProject[currentPhaseTaskList] = filteredPhase
        openMenu()
        handleCloseBtnClick()
        console.log(data.currentProject)

    };

    return (
        <ul className="task-visualization-menu">
            <li className="task-visualization-menu__option">Editar</li>
            <li
                onClick={clickOnDelete}
                className="task-visualization-menu__option"
            >
                Eliminar
            </li>
            {currentPhase === "phase1" ? (
                <>
                    <li
                        onClick={clickMoveToPhase2}
                        className="task-visualization-menu__option"
                    >
                        Pasar a {data.currentProject.phase2}
                    </li>
                    <li
                        onClick={clickMoveToPhase3}
                        className="task-visualization-menu__option"
                    >
                        Pasar a {data.currentProject.phase3}
                    </li>
                </>
            ) : null}
            {currentPhase === "phase2" ? (
                <>
                    <li
                        onClick={clickMoveToPhase1}
                        className="task-visualization-menu__option"
                    >
                        Pasar a {data.currentProject.phase1}
                    </li>
                    <li
                        onClick={clickMoveToPhase3}
                        className="task-visualization-menu__option"
                    >
                        Pasar a {data.currentProject.phase3}
                    </li>
                </>
            ) : null}
            {currentPhase === "phase3" ? (
                <>
                    <li
                        onClick={clickMoveToPhase1}
                        className="task-visualization-menu__option"
                    >
                        Pasar a {data.currentProject.phase1}
                    </li>
                    <li
                        onClick={clickMoveToPhase2}
                        className="task-visualization-menu__option"
                    >
                        Pasar a {data.currentProject.phase2}
                    </li>
                </>
            ) : null}
            {deleteWarningModalActive ? (
                <DeleteWarningModal
                    taskVisualizationData={taskVisualizationData}
                    closeWarningModal={closeWarningModal}
                    handleCloseBtnClick={handleCloseBtnClick}
                />
            ) : null}
        </ul>
    );
};

export default TaskVisualizationMenu;
