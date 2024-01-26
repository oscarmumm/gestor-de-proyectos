import "./DeleteWarningModal.css";
import {useContext} from "react";
import {DataContext} from "../../contexts/DataContext";

const DeleteWarningModal = ({
    closeWarningModal,
    taskVisualizationData,
    toggleVisualizationData,
}) => {
    const {data, setData} = useContext(DataContext);
    const clickOnGoBack = () => {
        closeWarningModal();
    };
    const clickOnDeleteTask = () => {
        //determinamos la phase donde se encuentra la tarea
        let currentPhase = `${taskVisualizationData.taskPhase}Tasks`;
        //borramos la tarea de su phase
        let filteredPhase = data.currentProject[currentPhase].filter(
            (el) =>
                el.taskCreationDate !== taskVisualizationData.taskCreationDate
        );
        data.currentProject[currentPhase] = filteredPhase;
        window.localStorage.setItem('data', JSON.stringify(data))
        closeWarningModal();
        toggleVisualizationData();
    };

    return (
        <div className="delete-warning-modal">
            <div className="delete-warning">
                <p className="delete-warning__title">
                    ¿Está seguro que desea eliminar la tarea?
                </p>
                <div className="delete-warning__btn-container">
                    <button
                        onClick={clickOnDeleteTask}
                        className="btn delete-warning__btn-delete">
                        Eliminar
                    </button>
                    <button
                        onClick={clickOnGoBack}
                        className="btn delete-warning__btn-goback">
                        Volver
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteWarningModal;
