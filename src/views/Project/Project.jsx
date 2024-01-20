import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./Project.css";
import NewTask from "../../components/NewTask/NewTask";
import TasksList from "../../components/TasksList/TasksList";

const Project = () => {
    const { data, setData } = useContext(DataContext);
    const [newTaskActive, setNewTaskActive] = useState(false);
    const newTaskClick = () => {
        setNewTaskActive(true);
    };
    const closeNewTaskMenu = () => {
        setNewTaskActive(false);
    };
    return (
        <div className="project">
            <div className="project-header">
                Proyecto: {data.currentProject.projectName}
            </div>
            <div className="project-board">
                <div className="project-board-column">
                    <h4 className="project-board-column__title">
                        {data.currentProject.phase1}
                    </h4>
                    <div className="project-board-column__content">
                        <button
                            onClick={newTaskClick}
                            className="btn project-board-column__new-task-btn"
                        >
                            Crear tarea
                        </button>
                        <TasksList phaseName={'phase1Tasks'} />
                    </div>
                </div>
                <div className="project-board-column">
                    <h4 className="project-board-column__title">
                        {data.currentProject.phase2}
                    </h4>
                    <div className="project-board-column__content">
                        <TasksList phaseName={'phase2Tasks'} />
                    </div>
                </div>
                <div className="project-board-column">
                    <h4 className="project-board-column__title">
                        {data.currentProject.phase3}
                    </h4>
                    <div className="project-board-column__content">
                        <TasksList phaseName={'phase3Tasks'} />
                    </div>
                </div>
            </div>
            {newTaskActive ? (
                <NewTask closeNewTaskMenu={closeNewTaskMenu} />
            ) : null}
        </div>
    );
};

export default Project;
