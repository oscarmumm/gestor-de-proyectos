import './ProjectsList.css'
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const ProjectsList = () => {
    const {data, setData} = useContext(DataContext)
    return <ul>
        {
            data.projects.map((el) => (
                <li>
                    <p>{el.projectName}</p>
                </li>
            ))
        }
    </ul>;
};

export default ProjectsList;
