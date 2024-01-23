import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Project from "./views/Project/Project";
import {DataContext} from "./contexts/DataContext";
import {useState} from "react";

const dataFormat = {
    currentProject: {},
    projects: [
        {
            projectName: "Proyecto de ejemplo",
            projectId: 12,
            phase1: "Etapa 1",
            phase1Tasks: [
                {
                    taskTitle: "Tarea de ejemplo",
                    taskDetails: "Esta es una tarea de ejemplo creada para mostrar como se vería un proyecto dentro de la pantalla principal",
                    taskExpDate: "2024-12-06",
                    taskCreationDate: 1705852245526,
                    taskPhase: "phase1",
                    taskColor: "task-color-1",
                },
            ],
            phase2: "Etapa 2",
            phase2Tasks: [],
            phase3: "Etapa 3",
            phase3Tasks: [],
        },
    ],
};

function App() {
    const [data, setData] = useState(dataFormat);

    return (
        <DataContext.Provider value={{data, setData}}>
            <main className="app-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project" element={<Project />} />
                </Routes>
            </main>
        </DataContext.Provider>
    );
}

export default App;
