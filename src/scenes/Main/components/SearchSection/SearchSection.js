import { SearchForm } from './components/SearchForm';
import { Buttons } from './components/Buttons';

import classes from './styles.module.css';


const SearchSection = () => (
  <section className={classes.searchSection}>
    <div className={classes.container}>
      <SearchForm />
      <Buttons />
    </div>
  </section>
);

export { SearchSection };