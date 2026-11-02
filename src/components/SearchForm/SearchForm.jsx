import "./SearchForm.css";

function SearchForm({ word, onWordChange, onSubmit, isLoading }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <label className="search-form__label" htmlFor="word-search">
        Spanish word
      </label>

      <div className="search-form__controls">
        <input
          className="search-form__input"
          id="word-search"
          name="word"
          type="search"
          value={word}
          onChange={(event) => onWordChange(event.target.value)}
          placeholder="For example, hola"
          autoComplete="off"
          required
        />

        <button
          className="search-form__button"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Searching…" : "Search"}
        </button>
      </div>
    </form>
  );
}

export default SearchForm;