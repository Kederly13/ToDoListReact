import SearchIcon from './SearchIcon.svg';
import ArrowIcon from './Arrow.svg';

import classes from './styles.module.css';

const SearchForm = () => {

  // const handleSubmit = () => {};

  // const handleChange = () => {};
  return (
    <form className={classes.searchForm}>
        <div className={classes.inputWrapper}>      
          <img src={SearchIcon} alt='searchIcon' className={classes.searchIcon} /> 
          <input 
            type='search' 
            placeholder='Search...'

            // onChange={}
            className={classes.input}
            />
          <button type='submit' className={classes.submitButton}>
            <img src={ArrowIcon} alt='run' className={classes.arrowIcon} />
          </button>   
        </div>
    </form>
  )
};

export { SearchForm };