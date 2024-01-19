import './TaskVisualizationMenu.css'
import { useContext, useState } from 'react';
import { DataContext } from '../../contexts/DataContext';
import DeleteWarningModal from '../DeleteWarningModal/DeleteWarningModal';

const TaskVisualizationMenu = ({taskVisualizationData}) => {
    const {data, setData} = useContext(DataContext)
    const [deleteWarningModalActive, setDeleteWarningModalActive] = useState(false)
    const clickOnDelete = () => {
        setDeleteWarningModalActive(true)
    }
    const closeWarningModal = () => {
        setDeleteWarningModalActive(false)
    }

    const clickMoveToPhase2 = () => {}
    
    const clickMoveToPhase3 = () => {}

    return <ul className="task-visualization-menu">
        <li className="task-visualization-menu__option">Editar</li>
        <li onClick={clickOnDelete} className="task-visualization-menu__option">Eliminar</li>
        <li onClick={clickMoveToPhase2} className="task-visualization-menu__option">Pasar a {data.currentProject.phase2}</li>
        <li onClick={clickMoveToPhase3} className="task-visualization-menu__option">Pasar a {data.currentProject.phase3}</li>
        {deleteWarningModalActive ? <DeleteWarningModal taskVisualizationData={taskVisualizationData} closeWarningModal={closeWarningModal} /> : null}
    </ul>;
};

export default TaskVisualizationMenu;
