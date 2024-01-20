import "./TasksList.css";
import {useContext, useEffect, useState} from "react";
import {DataContext} from "../../contexts/DataContext";
import TaskVisualization from "../TaskVisualization/TaskVisualization";

const TasksList = ({phaseName}) => {
    const [taskVisualizationActive, setTaskVisualizationActive] =
        useState(false);
    const [taskVisualizationData, setTaskVisualizationData] = useState({});
    const {data, setData} = useContext(DataContext);
    const activeTaskVisualization = (el) => {
        setTaskVisualizationActive(true);
        console.log(data.currentProject[phaseName]);
        setTaskVisualizationData({
            taskTitle: el.taskTitle,
            taskDetails: el.taskDetails,
            taskExpDate: el.taskExpDate,
            taskCreationDate: el.taskCreationDate,
            taskPhase: el.taskPhase,
        });
    };
    const closeTaskVisualization = () => {
        setTaskVisualizationActive(false)
    }
    
    return (
        <ul className="task-list">
            {data.currentProject[phaseName]?.map((el) => (
                <li
                    key={el.taskCreationDate}
                    className="task-list__card"
                    onClick={() => activeTaskVisualization(el)}>
                    <h4 className="task-list__card-title">{el.taskTitle}</h4>
                    <p className="task-list__card-details">{el.taskDetails}</p>
                    <p className="task-list__card-expdate">
                        Fecha límite:<br/>
                        {/* esta línea de código muestra la fecha con el formato DD-MM-YYYY en lugar del YYYY-MM-DD predeterminado  */}
                        {el.taskExpDate.slice(8, 10)}-{el.taskExpDate.slice(5, 7)}-{el.taskExpDate.slice(0, 4)}
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
