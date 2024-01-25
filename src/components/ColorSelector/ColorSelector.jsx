import { useState } from "react";
import "./ColorSelector.css";

const ColorSelector = ({ setTaskColor, initialColor }) => {
    const [panelActive, setPanelActive] = useState(false);
    const [selectedColor, setSelectedColor] = useState(initialColor);
    const openPanel = () => {
        setPanelActive(true);
    };

    const assignColor = (e) => {
        e.preventDefault();
        setSelectedColor(e.target.value);
        setTaskColor(e.target.value);
        setPanelActive(false);
    };

    return (
        <>
            <div
                className={`color-selector-input ${selectedColor}`}
                onClick={openPanel}
            ></div>
            {panelActive ? (
                <ul className="color-selector-panel">
                    <button
                        className="btn color-selector-color task-color-1"
                        value="task-color-1"
                        onClick={assignColor}
                    ></button>
                    <button
                        className="btn color-selector-color task-color-2"
                        value="task-color-2"
                        onClick={assignColor}
                    ></button>
                    <button
                        className="btn color-selector-color task-color-3"
                        value="task-color-3"
                        onClick={assignColor}
                    ></button>
                    <button
                        className="btn color-selector-color task-color-4"
                        value="task-color-4"
                        onClick={assignColor}
                    ></button>
                    <button
                        className="btn color-selector-color task-color-5"
                        value="task-color-5"
                        onClick={assignColor}
                    ></button>
                    <button
                        className="btn color-selector-color task-color-6"
                        value="task-color-6"
                        onClick={assignColor}
                    ></button>
                    <button
                        className="btn color-selector-color task-color-7"
                        value="task-color-7"
                        onClick={assignColor}
                    ></button>
                    <button
                        className="btn color-selector-color task-color-8"
                        value="task-color-8"
                        onClick={assignColor}
                    ></button>
                </ul>
            ) : null}
        </>
    );
};

export default ColorSelector;
