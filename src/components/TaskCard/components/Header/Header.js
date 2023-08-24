import Check from './check.svg';
import Edit from './edit.svg';

import classes from './styles.module.css';

const Header = ({ name }) => (
    <div className={classes.header}>
        <h3 className={classes.header__name}>{name}</h3>
        <div className={classes.header__buttons}>
            <button type='button'>
                <img src={Check} alt='check' />
            </button>
            <button type='button'>
                <img src={Edit} alt='edit' />
            </button>
        </div>
    </div>
);

export { Header }