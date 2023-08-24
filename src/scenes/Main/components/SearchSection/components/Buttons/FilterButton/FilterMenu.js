import { useState } from 'react';

import { FilterMenu } from './components/FilterMenu';
import Arrow from './down.svg';

import classes from './styles.module.css';

const FilterButton = () => {

  const [isActiveMenu, setActiveMenu] = useState(false);

  const haldleClick = () => {
    setActiveMenu(!isActiveMenu);
  };

  return (
    <div className={classes.button_wrapper}>
      <button type='button' onClick={() => haldleClick()} className={classes.button}>
        <div className={classes.button__content}>
          <p className={classes.button__name}>Filter</p>
          <img src={Arrow} alt='arrow' className={`${classes.arrow} ${isActiveMenu ? classes.active : ''}`} />
        </div> 
      </button>
      {isActiveMenu ? <FilterMenu /> : ''}
    </div>
  );  
}

export { FilterButton };