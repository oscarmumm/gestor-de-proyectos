import "./TasksList.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import TaskVisualization from "../TaskVisualization/TaskVisualization";

const TasksList = ({ phaseName }) => {
    const [taskVisualizationActive, setTaskVisualizationActive] =
        useState(false);
    const [taskVisualizationData, setTaskVisualizationData] = useState({});
    const { data, setData } = useContext(DataContext);
    const activeTaskVisualization = (el) => {
        setTaskVisualizationActive(true);
        setTaskVisualizationData({
            taskTitle: el.taskTitle,
            taskDetails: el.taskDetails,
            taskExpDate: el.taskExpDate,
            taskCreationDate: el.taskCreationDate,
            taskPhase: el.taskPhase,
            taskColor: el.taskColor,
        });
    };
    const closeTaskVisualization = () => {
        setTaskVisualizationActive(false);
    };

    return (
        <ul className="task-list">
            {data.currentProject[phaseName]?.map((el) => (
                <li
                    key={el.taskCreationDate}
                    className="task-list__card"
                    onClick={() => activeTaskVisualization(el)}
                >
                    <div className="task-list__card-data">
                        <h4 className="task-list__card-title">
                            {el.taskTitle}
                        </h4>
                        <p className="task-list__card-details">
                            {`${el.taskDetails.slice(0, 30)}...`}
                            {/* {el.taskDetails} */}
                        </p>
                        <p className="task-list__card-expdate">
                            Fecha límite:
                            <br />
                            {/* esta línea de código muestra la fecha con el formato DD-MM-YYYY en lugar del YYYY-MM-DD predeterminado  */}
                            {el.taskExpDate.slice(8, 10)}-
                            {el.taskExpDate.slice(5, 7)}-
                            {el.taskExpDate.slice(0, 4)}
                        </p>
                    </div>
                    <div className={`task-list__card-color ${el.taskColor}`}></div>
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
