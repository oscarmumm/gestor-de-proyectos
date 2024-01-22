import "./ProjectsList.css";
import {useContext} from "react";
import {DataContext} from "../../contexts/DataContext";
import ProjectsListTile from "../ProjectsListTile/ProjectsListTile";

const ProjectsList = () => {
    const {data, setData} = useContext(DataContext);
    return (
        <ul className="projects-list">
            {data.projects?.map((el) => (
                <ProjectsListTile key={el.projectId} project={el} />
            ))}
        </ul>
    );
};

export default ProjectsList;
