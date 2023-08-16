import SearchIcon from './SearchIcon.svg';
import ArrowIcon from './Arrow.svg';

import classes from './styles.module.css';

const SearchForm = () => {


  <form onSubmit={handleSubmit} className={classes.searchForm}>
    <input>
      <div className={classes.inputWrapper}>      
        <img src={SearchIcon} alt='searchIcon' className='searchIcon' /> 
        <input 
          type='search' 
          placeholder='Search...'
          value={toDoItem}
          onChange={handleChange}
        />   
      </div>
      <button type='submit' className={submitButton}>
        <svg src={ArrowIcon} alt='run' className='arrowIcon' />
      </button>
    </input>
  </form>
};

export { SearchForm };