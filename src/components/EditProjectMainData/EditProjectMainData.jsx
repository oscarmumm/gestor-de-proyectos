import './EditProjectMainData.css'
import { useContext, useState } from 'react';
import { DataContext } from '../../contexts/DataContext';
import EmptyInputWarningModal from '../EmptyInputWarningModal/EmptyInputWarningModal';

const projectDataFormat = {
    projectName: "",
    projectId: "",
    phase1: "",
    phase1Tasks: [],
    phase2: "",
    phase2Tasks: [],
    phase3: "",
    phase3Tasks: [],
};

const EditProjectMainData = ({toggleEditProjectData, projectData, saveProject}) => {
    const { data, setData } = useContext(DataContext);
    const [warningActive, setWarningActive] = useState(false);
    const [editedProjectData, setEditedProjectData] = useState(projectData)
    
    const handleClick = (e) => {
        e.preventDefault();
        if (
            editedProjectData.projectName.trim() === "" ||
            editedProjectData.phase1.trim() === "" ||
            editedProjectData.phase2.trim() === "" ||
            editedProjectData.phase3.trim() === ""
        ) {
            setWarningActive(true);
        } else {
            setData({
                ...data,
                currentProject: editedProjectData,
            })
        }
        saveProject()
        toggleEditProjectData();
        console.log(editedProjectData)
    };

    const toggleWarningModal = () => {
        warningActive ? setWarningActive(false) : setWarningActive(true);
    };
    const handleCloseBtnClick = () => {
        toggleEditProjectData();
    };

    const handleChange = (e) => {
        setEditedProjectData({
            ...editedProjectData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="project-creation-options__screen">
            <div className="project-creation-options">
                <div className="project-creation-options__close-btn-container">
                    <h3 className="project-creation-options__close-btn-container__title">
                        Editar información del proyecto
                    </h3>
                    <button
                        onClick={handleCloseBtnClick}
                        className="btn project-creation-options__close-btn"
                    >
                        ╳
                    </button>
                </div>
                <form className="project-creation-options__form">
                    <input
                        className="project-creation-options__name-input"
                        type="text"
                        name="projectName"
                        onChange={handleChange}
                        placeholder="Nombre del proyecto"
                        value={editedProjectData.projectName}
                    />
                    <h4 className="project-creation-options__phases-title">
                        Etapas del proyecto
                    </h4>
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        name="phase1"
                        onChange={handleChange}
                        placeholder="Etapa 1"
                        value={editedProjectData.phase1}

                    />
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        name="phase2"
                        onChange={handleChange}
                        placeholder="Etapa 2"
                        value={editedProjectData.phase2}

                    />
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        name="phase3"
                        onChange={handleChange}
                        placeholder="Etapa 3"
                        value={editedProjectData.phase3}

                    />
                    <button
                        className="btn project-creation-options__create-btn"
                        onClick={handleClick}
                    >
                        Guardar cambios
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
}

export default EditProjectMainData