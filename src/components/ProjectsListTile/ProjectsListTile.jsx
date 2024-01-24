import "./ProjectsListTile.css";
import {useContext, useState} from "react";
import {DataContext} from "../../contexts/DataContext";
import {useNavigate} from "react-router-dom";
import ProjectOptions from "../ProjectOptions/ProjectOptions";
import menu_icon from "../../assets/icons/menu-vertical-svgrepo-com.svg";

const ProjectsListTile = ({project}) => {
    const {data, setData} = useContext(DataContext);
    const [optionsActive, setOptionsActive] = useState(false);
    const navigate = useNavigate();

    const openProject = () => {
        // console.log(project);
        // setData({
        //     ...data,
        //     currentProject: project,
        // });
        // navigate("/current-project");
    };
    const toggleOptions = () => {
        optionsActive ? setOptionsActive(false) : setOptionsActive(true);
    };

    return (
        <div className="projects-list__project-card" onClick={openProject}>
            <button
                className="btn projects-list__project-card__options-btn"
                onClick={toggleOptions}>
                <img
                    className="projects-list__project-card__options-btn__img"
                    src={menu_icon}
                    alt=""
                />
            </button>
            {project.projectName}
            {optionsActive ? (
                <ProjectOptions toggleOptions={toggleOptions} project={project} />
            ) : null}
        </div>
    );
};

export default ProjectsListTile;
