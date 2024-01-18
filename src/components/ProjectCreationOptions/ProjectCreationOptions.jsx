import "./ProjectCreationOptions.css";

const ProjectCreationOptions = ({closeCreationOptionsMenu}) => {
    const handleClick = (e) => {
        e.preventDefault();
    };

    const handleCloseBtnClick = () => {
        closeCreationOptionsMenu()
    }
    return (
        <div className="project-creation-options__screen">
            <div className="project-creation-options">
                <div className="project-creation-options__close-btn-container">
                    <button onClick={handleCloseBtnClick} className="btn project-creation-options__close-btn">
                        ╳
                    </button>
                </div>
                <form className="project-creation-options__form">
                    <input
                        className="project-creation-options__name-input"
                        type="text"
                        placeholder="Nombre del proyecto"
                    />
                    <h4 className="project-creation-options__phases-title">
                        Etapas del proyecto
                    </h4>
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        placeholder="Etapa 1"
                    />
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        placeholder="Etapa 2"
                    />
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        placeholder="Etapa 3"
                    />
                    <button
                        className="btn project-creation-options__create-btn"
                        onClick={(e) => handleClick(e)}>
                        Crear Proyecto
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectCreationOptions;
