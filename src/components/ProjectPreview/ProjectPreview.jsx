import "./ProjectPreview.css";

const ProjectPreview = ({project}) => {
    return (
        <div className="project-preview-card">
            <h3 className="project-preview-card__project-name">{project.projectName}</h3>
            <div className="project-preview-card__phase1-preview">
                <h4>Deadlines phase 1</h4>
                <ul>
                    {project.phase1Tasks?.map((el) => (
                        <li>{el.taskTitle}</li>
                    ))}
                </ul>
            </div>
            <div className="project-preview-card__phase2-preview">
                <h4>Deadlines phase 2</h4>
                <ul>
                    {project.phase2Tasks?.map((el) => (
                        <li>{el.taskTitle}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectPreview;
