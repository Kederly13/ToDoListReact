import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { routePath } from 'routeСonfig/routes';

import { SearchForm } from './components/SearchForm';
import { Buttons } from './components/Buttons';
import { NewTaskButton } from 'components/NewTaskButton';

import classes from './styles.module.css';


const SearchSection = () => {

  return (
    <section className={classes.searchSection}>
      <div className={classes.container}>
        <SearchForm />
        <Buttons />
        <NavLink to={routePath.new_task}>
          <NewTaskButton
            className={classes.searchSectionBtn} 
          />
        </NavLink>
        
      </div>
    </section>
  )
};

export { SearchSection };