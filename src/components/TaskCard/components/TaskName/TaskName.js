import classes from './styles.module.css';

const TaskName = ({ value, onChange }) => (
    <div className={classes.name}>
        <label htmlFor='task' className={classes.name__label}> Task Name</label>
        <form className={classes.name__form}>
            <input
                placeholder='Name of task...'
                id='task' 
                name='task' 
                type='text'
                onChange={onChange}
                value={value} 
                className={classes.name__input}                
            />   
        </form>
    </div>
);

export { TaskName }