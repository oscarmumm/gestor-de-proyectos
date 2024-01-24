import "./ProjectOptions.css";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {DataContext} from "../../contexts/DataContext";
import DeleteProjectWarning from "../DeleteProjectWarning/DeleteProjectWarning";

const ProjectOptions = ({toggleOptions, project}) => {
    const {data, setData} = useContext(DataContext);
    const [warningModalActive, setWarningModalActive] = useState(false);
    const navigate = useNavigate();

    const openProject = () => {
        console.log(project);
        setData({
            ...data,
            currentProject: project,
        });
        navigate("/current-project");
    };
    const editProject = () => {
        toggleOptions();
        openProject();
    };
    const deleteProject = () => {
        //eliminar el proyecto
        toggleWarningModal();
    };
    const toggleWarningModal = () => {
        warningModalActive
            ? setWarningModalActive(false)
            : setWarningModalActive(true);
    };
    return (
        <ul className="project-options">
            <li className="project-options__option" onClick={editProject}>
                Editar
            </li>
            <li className="project-options__option" onClick={deleteProject}>
                Eliminar
            </li>
            {warningModalActive ? (
                <DeleteProjectWarning toggleWarningModal={toggleWarningModal} deleteProject={deleteProject} />
            ) : null}
        </ul>
    );
};

export default ProjectOptions;
