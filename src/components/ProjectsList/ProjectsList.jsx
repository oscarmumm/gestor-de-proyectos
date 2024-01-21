import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import './ProjectsList.css'
import ProjectPreview from "../ProjectPreview/ProjectPreview";

const ProjectsList = () => {
    const {data, setData} = useContext(DataContext)
    return <ul className="projects-list-container">
        {
            data.projects.map((el) => (
                <ProjectPreview project={el} />
            ))
        }
    </ul>;
};

export default ProjectsList;
