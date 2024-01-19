import "./TasksList.css";
import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../contexts/DataContext";
import TaskVisualization from "../TaskVisualization/TaskVisualization";

const TasksList = () => {
    const [taskVisualizationActive, setTaskVisualizationActive] =
        useState(false);
    const [taskVisualizationData, setTaskVisualizationData] = useState({});
    const {data, setData} = useContext(DataContext);
    const activeTaskVisualization = (el) => {
        setTaskVisualizationActive(true);
        console.log(el);
        setTaskVisualizationData({
            taskTitle: el.taskTitle,
            taskDetails: el.taskDetails,
            taskExpDate: el.taskExpDate,
            taskCreationDate: el.taskCreationDate
        });
    };
    const closeTaskVisualization = () => {
        setTaskVisualizationActive(false)
    }
    return (
        <ul className="task-list">
            {data.currentProject.phase1Tasks?.map((el) => (
                <li
                    key={el.taskCreationDate}
                    className="task-list__card"
                    onClick={() => activeTaskVisualization(el)}>
                    <h4 className="task-list__card-title">{el.taskTitle}</h4>
                    <p className="task-list__card-details">{el.taskDetails}</p>
                    <p className="task-list__card-expdate">
                        Fecha límite: {el.taskExpDate}
                    </p>
                </li>
            ))}
            {taskVisualizationActive ? (
                <TaskVisualization
                    taskVisualizationData={taskVisualizationData}
                    setTaskVisualizationActive={setTaskVisualizationActive}
                />
            ) : null}
        </ul>
    );
};

export default TasksList;
