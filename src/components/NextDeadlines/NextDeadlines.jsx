import './NextDeadlines.css'
import { useContext } from 'react';
import { DataContext } from '../../contexts/DataContext';

const NextDeadlines = () => {
    const {data, setData} = useContext(DataContext)
    const actualDate = Date.now()
    return <ul>NextDeadlines</ul>;
};

export default NextDeadlines;
