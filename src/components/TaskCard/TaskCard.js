import { Header } from './components/Header';
import { DueDate } from './components/DueDate';

import classes from './styles.module.css'

const TaskCard = ({ header, dueDate }) => {
    return (
        <div className={classes.taskCard}>
            <Header>{header}</Header>
            <DueDate>{dueDate}</DueDate>
        </div>
    )
};

export { TaskCard };