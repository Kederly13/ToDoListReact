import { NavLink } from 'react-router-dom';
import { routePath } from 'routeСonfig/routes';

import { NewTaskButton } from 'components/NewTaskButton';
import { Task } from 'components/Task';
import Arrow from './Arrow.svg';

import classes from './styles.module.css';
import { useState } from 'react';

const AddTaskSection = () => {
    const [tasks, setTasks] = useState([]);

    

    return (
        <section className={classes.newTaskSection}>
            <div className={classes.container}>
                <div className={classes.task}>
                    <div className={classes.title}>
                        <NavLink to={routePath.main}>
                            <button type='button'>
                                <img src={Arrow} alt='back' className={classes.backArrow}/>
                            </button>
                        </NavLink> 
                        <h1 className={classes.title__heading}>Add New Task</h1> 
                    </div>
                    <Task />
                    <NavLink to={routePath.main}>
                        <NewTaskButton />
                    </NavLink>     
                </div>
            </div>
        </section>  
    )
};

export { AddTaskSection };