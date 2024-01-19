import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home/Home";
import Project from "./views/Project/Project";
import {DataContext} from "./contexts/DataContext";
import {useState} from "react";

const dataFormat = {
    currentProject: {},
    projects: [],
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
