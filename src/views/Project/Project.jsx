import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../contexts/DataContext";
import "./Project.css";
import NewTask from "../../components/NewTask/NewTask";
import TasksList from "../../components/TasksList/TasksList";
import back_icon from "../../assets/icons/back-svgrepo-com.svg";
import edit_icon from "../../assets/icons/edit-svgrepo-com.svg";
import {useNavigate} from "react-router-dom";
import EditProjectMainData from "../../components/EditProjectMainData/EditProjectMainData";

const Project = () => {
    const {data, setData} = useContext(DataContext);
    const [newTaskActive, setNewTaskActive] = useState(false);
    const [editProjectDataActive, setEditProjectDataActive] = useState(false);
    const navigate = useNavigate();
    const newTaskClick = () => {
        setNewTaskActive(true);
    };
    const closeNewTaskMenu = () => {
        setNewTaskActive(false);
    };

    const checkData = () => {
        console.log(data);
    };

    const saveProject = () => {
        const currentProject = data.currentProject;
        let newArr = data.projects.filter(
            (el) => el.projectId !== currentProject.projectId
        );
        data.projects = newArr;
        data.projects.push(currentProject);
        window.localStorage.setItem("data", JSON.stringify(data));
    };

    const goBack = () => {
        saveProject();
        // setData({
        //     ...data,
        //     currentProject: {},
        // });
        navigate("/");
    };

    const toggleEditProjectData = () => {
        editProjectDataActive
            ? setEditProjectDataActive(false)
            : setEditProjectDataActive(true);
    };
    return (
        <div className="project">
            <div className="project-header">
                <div className="project-header__left-container">
                    <button
                        className="btn project-header__back-btn"
                        onClick={goBack}>
                        <img
                            className="project-header__back-btn__img"
                            src={back_icon}
                            alt=""
                        />
                    </button>
                </div>
                <div className="project-header__central-container">
                    <h2>Proyecto: {data.currentProject.projectName}</h2>
                    {/* este boton es un helper para chequear el state de data */}

                    {/* <button onClick={checkData} className="btn check-data-btn">
                        Check data
                    </button> */}
                </div>
                <div className="project-header__right-container">
                    <button
                        className="btn project-header__edit-btn"
                        onClick={toggleEditProjectData}>
                        <img
                            className="project-header__edit-btn__img"
                            src={edit_icon}
                            alt=""
                        />
                    </button>
                </div>
            </div>
            <div className="project-board">
                <div className="project-board-column">
                    <h4 className="project-board-column__title">
                        {data.currentProject.phase1}
                    </h4>
                    <div className="project-board-column__content">
                        <button
                            onClick={newTaskClick}
                            className="btn project-board-column__new-task-btn">
                            Crear tarea
                        </button>
                        <TasksList phaseName={"phase1Tasks"} />
                    </div>
                </div>
                <div className="project-board-column">
                    <h4 className="project-board-column__title">
                        {data.currentProject.phase2}
                    </h4>
                    <div className="project-board-column__content">
                        <TasksList phaseName={"phase2Tasks"} />
                    </div>
                </div>
                <div className="project-board-column">
                    <h4 className="project-board-column__title">
                        {data.currentProject.phase3}
                    </h4>
                    <div className="project-board-column__content">
                        <TasksList phaseName={"phase3Tasks"} />
                    </div>
                </div>
            </div>
            {newTaskActive ? (
                <NewTask closeNewTaskMenu={closeNewTaskMenu} />
            ) : null}
            {editProjectDataActive ? (
                <EditProjectMainData
                    toggleEditProjectData={toggleEditProjectData}
                    projectData={data.currentProject}
                    saveProject={saveProject}
                />
            ) : null}
        </div>
    );
};

export default Project;
