import "./TaskVisualizationMenu.css";
import {useContext, useState} from "react";
import {DataContext} from "../../contexts/DataContext";
import DeleteWarningModal from "../DeleteWarningModal/DeleteWarningModal";

const TaskVisualizationMenu = ({
    taskVisualizationData,
    handleCloseBtnClick,
    openMenu,
}) => {
    const {data, setData} = useContext(DataContext);
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
        //asignamos al objeto el valor de la fase a la que vamos a pasarlo en su key taskPhase
        taskVisualizationData.taskPhase = "phase1";
        //determinamos la fase actual en la que nos encontramos
        const currentPhaseTaskList = `${currentPhase}Tasks`;
        //creamos un array filtrando la tarea para eliminarla del mismo
        let tempArr = data.currentProject[currentPhaseTaskList].filter(
            (el) =>
                el.taskCreationDate !== taskVisualizationData.taskCreationDate
        );
        data.currentProject[currentPhaseTaskList] = tempArr;
        //creamos una copia del objeto currentProject con los datos que hemos modificado
        const updatedCurrentProject = {
            //destructuramos el objeto data
            ...data.currentProject,
            //agregamos la tarea a la phase 2
            phase1Tasks: [
                ...data.currentProject.phase1Tasks,
                taskVisualizationData,
            ],
        };
        setData({
            ...data,
            currentProject: updatedCurrentProject,
        });
        openMenu();
        handleCloseBtnClick();
    };

    const clickMoveToPhase2 = () => {
        taskVisualizationData.taskPhase = "phase2";
        const currentPhaseTaskList = `${currentPhase}Tasks`;
        let tempArr = data.currentProject[currentPhaseTaskList].filter(
            (el) =>
                el.taskCreationDate !== taskVisualizationData.taskCreationDate
        );
        data.currentProject[currentPhaseTaskList] = tempArr;
        const updatedCurrentProject = {
            ...data.currentProject,
            phase2Tasks: [
                ...data.currentProject.phase2Tasks,
                taskVisualizationData,
            ],
        };
        setData({
            ...data,
            currentProject: updatedCurrentProject,
        });
        openMenu();
        handleCloseBtnClick();
    };

    const clickMoveToPhase3 = () => {
        taskVisualizationData.taskPhase = "phase3";
        const currentPhaseTaskList = `${currentPhase}Tasks`;
        let tempArr = data.currentProject[currentPhaseTaskList].filter(
            (el) =>
                el.taskCreationDate !== taskVisualizationData.taskCreationDate
        );
        data.currentProject[currentPhaseTaskList] = tempArr;
        const updatedCurrentProject = {
            ...data.currentProject,
            phase3Tasks: [
                ...data.currentProject.phase3Tasks,
                taskVisualizationData,
            ],
        };
        setData({
            ...data,
            currentProject: updatedCurrentProject,
        });
        openMenu();
        handleCloseBtnClick();
    };

    return (
        <ul className="task-visualization-menu">
            <li className="task-visualization-menu__option">Editar</li>
            <li
                onClick={clickOnDelete}
                className="task-visualization-menu__option">
                Eliminar
            </li>
            {currentPhase === "phase1" ? (
                <>
                    <li
                        onClick={clickMoveToPhase2}
                        className="task-visualization-menu__option">
                        Pasar a {data.currentProject.phase2}
                    </li>
                    <li
                        onClick={clickMoveToPhase3}
                        className="task-visualization-menu__option">
                        Pasar a {data.currentProject.phase3}
                    </li>
                </>
            ) : null}
            {currentPhase === "phase2" ? (
                <>
                    <li
                        onClick={clickMoveToPhase1}
                        className="task-visualization-menu__option">
                        Pasar a {data.currentProject.phase1}
                    </li>
                    <li
                        onClick={clickMoveToPhase3}
                        className="task-visualization-menu__option">
                        Pasar a {data.currentProject.phase3}
                    </li>
                </>
            ) : null}
            {currentPhase === "phase3" ? (
                <>
                    <li
                        onClick={clickMoveToPhase1}
                        className="task-visualization-menu__option">
                        Pasar a {data.currentProject.phase1}
                    </li>
                    <li
                        onClick={clickMoveToPhase2}
                        className="task-visualization-menu__option">
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
