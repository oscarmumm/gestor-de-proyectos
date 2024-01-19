import "./TasksList.css";
import {useContext, useEffect} from "react";
import {DataContext} from "../../contexts/DataContext";

const TasksList = () => {
    const {data, setData} = useContext(DataContext);
    return (
        <ul className="task-list">
            {data.currentProject.phase1Tasks?.map((el) => (
                <li key={el.taskCreationDate} className="task-list__card">
                    <h4 className="task-list__card-title">{el.taskTitle}</h4>
                    <p className="task-list__card-details">{el.taskDetails}</p>
                    <p className="task-list__card-expdate">Fecha límite: {el.taskExpDate}</p>
                </li>
            ))}
        </ul>
    );
};

export default TasksList;
