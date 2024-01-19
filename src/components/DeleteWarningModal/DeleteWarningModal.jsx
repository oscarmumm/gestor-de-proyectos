import "./DeleteWarningModal.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

const DeleteWarningModal = ({closeWarningModal, taskVisualizationData}) => {
    const {data, setData} = useContext(DataContext)
    const clickOnGoBack = () => {
        closeWarningModal();
    };
    const clickOnDeleteTask = () => {
        //let temp = data
        //agregar un elemento al objeto de la tarea que indique en que etapa se encuentra
        //este podremos modificarlo tanto para eliminar la tarea como para mover el elemento de
        //una columna a otra
        console.log(taskVisualizationData)
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
