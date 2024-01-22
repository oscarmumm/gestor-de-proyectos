import "./ProjectsListTile.css";
import {useContext} from "react";
import {DataContext} from "../../contexts/DataContext";
import {useNavigate} from "react-router-dom";

const ProjectsListTile = ({project}) => {
    const {data, setData} = useContext(DataContext);
    const navigate = useNavigate();

    const openProject = () => {
        console.log(project);
        setData({
            ...data,
            currentProject: project,
        });
        navigate("/project");
    };
    return (
        <div className="projects-list__project-card" onClick={openProject}>{project.projectName}</div>
    );
};

export default ProjectsListTile;
