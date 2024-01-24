import { useState } from "react";
import "./ProjectCreationOptions.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
import EmptyInputWarningModal from "../EmptyInputWarningModal/EmptyInputWarningModal";

const newProjectDataFormat = {
    projectName: "Nombre del proyecto",
    projectId: "",
    phase1: "Etapa 1",
    phase1Tasks: [],
    phase2: "Etapa 2",
    phase2Tasks: [],
    phase3: "Etapa 3",
    phase3Tasks: [],
};

const ProjectCreationOptions = ({ closeCreationOptionsMenu }) => {
    const { data, setData } = useContext(DataContext);
    const [warningActive, setWarningActive] = useState(false);
    const navigate = useNavigate();
    const [newProjectData, setNewProjectData] = useState(newProjectDataFormat);
    const handleClick = (e) => {
        e.preventDefault();
        if (
            newProjectData.projectName.trim() === "" ||
            newProjectData.phase1.trim() === "" ||
            newProjectData.phase2.trim() === "" ||
            newProjectData.phase3.trim() === ""
        ) {
            setWarningActive(true);
        } else {
            let idForProject = Date.now();
            newProjectData.projectId = idForProject;
            newProjectData.phase1Tasks = [];
            newProjectData.phase2Tasks = [];
            newProjectData.phase3Tasks = [];
            data.currentProject = newProjectData;
            console.log("newProjectData", newProjectData);
            navigate("/current-project");
        }
    };

    const handleCloseBtnClick = () => {
        closeCreationOptionsMenu();
    };

    const handleChange = (e) => {
        setNewProjectData({
            ...newProjectData,
            [e.target.name]: e.target.value,
        });
    };

    const toggleWarningModal = () => {
        warningActive ? setWarningActive(false) : setWarningActive(true);
    };

    return (
        <div className="project-creation-options__screen">
            <div className="project-creation-options">
                <div className="project-creation-options__close-btn-container">
                    <h3 className="project-creation-options__close-btn-container__title">
                        Nuevo proyecto
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
                        value={newProjectData.projectName}
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
                        value={newProjectData.phase1}

                    />
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        name="phase2"
                        onChange={handleChange}
                        placeholder="Etapa 2"
                        value={newProjectData.phase2}

                    />
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        name="phase3"
                        onChange={handleChange}
                        placeholder="Etapa 3"
                        value={newProjectData.phase3}

                    />
                    <button
                        className="btn project-creation-options__create-btn"
                        onClick={handleClick}
                    >
                        Crear Proyecto
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

export default ProjectCreationOptions;
