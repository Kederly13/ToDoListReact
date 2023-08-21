import { SortButton } from './SortButton';
import { FilterButton } from './FilterButton';

import classes from './styles.module.css';

const Buttons = () => (
    <div className={classes.buttons_wrapper}>
        <SortButton />
        <FilterButton/>
    </div>
);

export { Buttons };