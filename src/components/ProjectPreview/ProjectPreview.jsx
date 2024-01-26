import "./ProjectPreview.css";
import {useContext} from "react";
import {DataContext} from "../../contexts/DataContext";
import {useNavigate} from "react-router-dom";

const ProjectPreview = ({project}) => {
    const {data, setData} = useContext(DataContext);
    const navigate = useNavigate();

    const openProject = () => {
        console.log(project);
        setData({
            ...data,
            currentProject: project,
        });
        window.localStorage.setItem('data', JSON.stringify(data))

        navigate("/project");
    };

    return (
        <div className="project-preview-card" onClick={openProject}>
            <h3 className="project-preview-card__project-name">
                {project.projectName}
            </h3>
            <div className="project-preview-card__phase1-preview">
                <h4 className="project-preview-card__phase1-preview__title">
                    Deadlines phase 1
                </h4>
                <ul className="project-preview-card__phase1-preview__container">
                    {project.phase1Tasks?.map((el) => (
                        <li key={el.taskCreationDate}>
                            <p className="project-preview-card__phase1-preview__task-title">
                                {el.taskTitle}
                            </p>
                            <p className="project-preview-card__phase1-preview__task-expdate">
                                {el.taskExpDate}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="project-preview-card__phase2-preview">
                <h4 className="project-preview-card__phase2-preview__title">
                    Deadlines phase 2
                </h4>
                <ul className="project-preview-card__phase2-preview__container">
                    {project.phase2Tasks?.map((el) => (
                        <li key={el.taskCreationDate}>
                            <p className="project-preview-card__phase2-preview__task-title">
                                {el.taskTitle}
                            </p>
                            <p className="project-preview-card__phase2-preview__task-expdate">
                                {el.taskExpDate}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectPreview;
