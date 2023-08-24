import classNames from 'classnames';

import Plus from './plus.svg';

import classes from './styles.module.css';

const NewTaskButton = ({ className }) => {
    return (
        <button type='button' className={classNames(classes.button, className)}>
            <img src={Plus} alt='add' className={classes.button__plus}/>
            Add New Task
        </button>
    )
};

export { NewTaskButton };