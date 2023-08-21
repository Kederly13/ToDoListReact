import { TaskName } from 'components/TaskCard/components/TaskName';
import Arrow from './Arrow.svg';

import classes from './styles.module.css';

const NewTaskSection = () => {


    return (
        <section className={classes.newTaskSection}>
            <div className={classes.container}>
                <div className={classes.task}>
                    <div className={classes.title}>
                        <button type='button'>
                            <img src={Arrow} alt='back' className={classes.backArrow}/>
                        </button>
                        <h1 className={classes.title__heading}>Add New Task</h1> 
                    </div>
                    <TaskName />
                    
                </div>
            </div>
        </section>  
    )
};

export { NewTaskSection };