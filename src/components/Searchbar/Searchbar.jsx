import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ data }) => {
  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const { input } = form.elements;
    data({ input: input.value });

    form.reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css.buttonLabel}>Search</span>
        </button>

        <input
          className={css.input}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  data: PropTypes.func.isRequired,
};
