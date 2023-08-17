import { SearchForm } from './components/SearchForm';

import classes from './styles.module.css';

const SearchSection = () => (
  <main>
    <section className={classes.searchSection}>
      <div className={classes.container}>
        <SearchForm />
      </div>
  </section>
  </main>
  
);

export { SearchSection };