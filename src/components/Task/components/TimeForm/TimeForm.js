import Clock from './clock.svg';

import classes from './styles.module.css';

const TimeForm = ({ value, onChange }) => (
    <div className={classes.time}>
        <label htmlFor='date' className={classes.time__label}>Select Time</label>
        <form className={classes.time__form}>
            <input
                placeholder='00:00'
                id='time' 
                name='dueTime' 
                type='time'
                onChange={onChange}
                value={value} 
                className={classes.time__input}                
            />
            {/* <img src={Clock} alt='clock' />    */}
        </form>
    </div>
);

export { TimeForm };