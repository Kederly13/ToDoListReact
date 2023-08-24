import { useState } from 'react';

import { TaskName } from './components/TaskName';
import { DateForm } from './components/DateForm';
import { TimeForm } from './components/TimeForm';


import classes from './styles.module.css';

const Task = () => {

    const [taskData, setTaskData] = useState({
        taskName: '',  
        priority: '',
        complexity: '',
        dueDate: '',
        dueTime: '',
        subtasks: [],
        tags: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTaskData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        
    };

    

    return (
        <>
            <TaskName value={taskData.taskName} onChange={handleInputChange} />
            <div className={classes.dateWrapper}>
                <DateForm value={taskData.dueDate} onChange={handleInputChange} />
                <TimeForm value={taskData.dueTime} onChange={handleInputChange} />
            </div>
        </>    
    )
};

export { Task };