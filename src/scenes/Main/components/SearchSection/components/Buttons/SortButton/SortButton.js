import { useState } from 'react';

import Arrow from './arrow.svg';
import { SortMenu } from './components/SortMenu';

import classes from './styles.module.css';

const SortButton = () => {

  const [isActiveMenu, setActiveMenu] = useState(false);

  const haldleClick = () => {
    setActiveMenu(!isActiveMenu);
  };

  return (
    <div className={classes.button_wrapper}>
      <button type='button' onClick={() => haldleClick()} className={classes.button}>
        <div className={classes.button__content}>
          <p className={classes.button__name}>Sort</p>
          <img 
            src={Arrow} 
            alt='arrow' 
            className={`${classes.arrow} ${isActiveMenu ? classes.active : ''}`} />
        </div> 
      </button>
      {isActiveMenu ? <SortMenu /> : ''}
    </div>
  );  
}

export { SortButton };