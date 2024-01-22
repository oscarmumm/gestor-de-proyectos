import {useContext} from "react";
import {DataContext} from "../../contexts/DataContext";
import "./RecentProjects.css";
import ProjectPreview from "../ProjectPreview/ProjectPreview";

const RecentProjects = () => {
    const {data, setData} = useContext(DataContext);
    return (
        <ul className="recent-projects-container">
            {data.projects?.map((el) => (
                <ProjectPreview key={el.projectId} project={el} />
            ))}
        </ul>
    );
};

export default RecentProjects;
