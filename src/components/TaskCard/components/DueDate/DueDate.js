import Calendar from './calendar.svg';

import classes from './styles.module.css';

const DueDate = ({ date, time }) => (
    <div className={classes.dueDate}>
        <img src={Calendar} alt='calendar' />
        <h4 className={classes.dueDate__name}>Due Date: </h4>
        <span className={classes.dueDate__date}>{date},</span>
        <span className={classes.dueDate__time}>{time}</span>
    </div>
);


export { DueDate };