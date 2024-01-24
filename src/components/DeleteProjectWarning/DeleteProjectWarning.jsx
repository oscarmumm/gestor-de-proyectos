import "./DeleteProjectWarning.css";

const DeleteProjectWarning = ({toggleWarningModal, deleteProject}) => {
    const clickOnDeleteProject = () => {
        deleteProject();
    };
    const clickOnGoBack = () => {
        toggleWarningModal()
    }
    return (
        <div className="delete-warning-modal">
            <div className="delete-warning">
                <p className="delete-warning__title">
                    ¿Está seguro que desea eliminar el proyecto?
                </p>
                <div className="delete-warning__btn-container">
                    <button
                        onClick={clickOnDeleteProject}
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

export default DeleteProjectWarning;
