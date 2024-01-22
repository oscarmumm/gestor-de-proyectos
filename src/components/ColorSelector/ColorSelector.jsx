import { useState } from "react";
import "./ColorSelector.css";

const ColorSelector = () => {
    const [panelActive, setPanelActive] = useState(false);
    const openPanel = () => {
        setPanelActive(true);
    };
    const assignColor = (e) => {
      e.preventDefault()
      console.log(e.target)
    }
    return (
        <div className="color-selector-input" onClick={openPanel}>
            {panelActive ? (
                <div className="color-selector-panel">
                    <div className="color-selector-color task-color-1" onClick={assignColor}></div>
                    <div className="color-selector-color task-color-2" onClick={assignColor}></div>
                    <div className="color-selector-color task-color-3" onClick={assignColor}></div>
                    <div className="color-selector-color task-color-4" onClick={assignColor}></div>
                    <div className="color-selector-color task-color-5" onClick={assignColor}></div>
                    <div className="color-selector-color task-color-6" onClick={assignColor}></div>
                    <div className="color-selector-color task-color-7" onClick={assignColor}></div>
                    <div className="color-selector-color task-color-8" onClick={assignColor}></div>
                </div>
            ) : null}
        </div>
    );
};

export default ColorSelector;
