import Calendar from './calendar.svg';

import classes from './styles.module.css'

const DateForm = ({ value, onChange }) => (
    <div className={classes.date}>
        <label htmlFor='date' className={classes.date__label}>Select Due Date</label>
        <form className={classes.date__form}>
            <input
                placeholder='dd.mm.yyyy'
                id='date' 
                name='dueDate' 
                type=''
                onChange={onChange}
                value={value} 
                className={classes.date__input}                
            />
            {/* <img src={Calendar} alt='calendar'/>    */}
        </form>
    </div>
);
 
export { DateForm };


