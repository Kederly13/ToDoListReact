import Calendar from './calendar.svg';

const DateForm = ({ value, onChange }) => (
    <div className={classes.dateForm}>
        <label htmlFor='date' className={classes.date__label}>Select Due Date</label>
        <form className={classes.date__form}>
            <input
                placeholder='dd.mm.yyyy'
                id='date' 
                name='date' 
                type='date'
                onChange={onChange}
                value={value} 
                className={classes.date__input}                
            />
            <img src={Calendar} alt='calendar'/>   
        </form>
    </div>
);
 
export { DateForm };


