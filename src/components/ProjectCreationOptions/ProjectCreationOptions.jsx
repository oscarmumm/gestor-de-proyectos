import {useState} from "react";
import "./ProjectCreationOptions.css";
import {useContext} from "react";
import {DataContext} from "../../contexts/DataContext";
import {useNavigate} from "react-router-dom";

const newProjectDataFormat = {
    projectName: "",
    phase1: "",
    phase1Tasks: [],
    phase2: "",
    phase3: "",
};

const ProjectCreationOptions = ({closeCreationOptionsMenu}) => {
    const {data, setData} = useContext(DataContext);
    const navigate = useNavigate();
    const [newProjectData, setNewProjectData] = useState(newProjectDataFormat);
    const handleClick = (e) => {
        e.preventDefault();
        data.currentProject = newProjectData;
        navigate("/project");
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

    return (
        <div className="project-creation-options__screen">
            <div className="project-creation-options">
                <div className="project-creation-options__close-btn-container">
                    <h3 className="project-creation-options__close-btn-container__title">Nuevo proyecto</h3>
                    <button
                        onClick={handleCloseBtnClick}
                        className="btn project-creation-options__close-btn">
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
                    />
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        name="phase2"
                        onChange={handleChange}
                        placeholder="Etapa 2"
                    />
                    <input
                        className="project-creation-options__phase-input"
                        type="text"
                        name="phase3"
                        onChange={handleChange}
                        placeholder="Etapa 3"
                    />
                    <button
                        className="btn project-creation-options__create-btn"
                        onClick={handleClick}>
                        Crear Proyecto
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectCreationOptions;
