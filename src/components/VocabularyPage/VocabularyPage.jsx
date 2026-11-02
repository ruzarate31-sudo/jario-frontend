import SearchForm from "../SearchForm/SearchForm";
import SentenceCard from "../SentenceCard/SentenceCard";
import Preloader from "../Preloader/Preloader";
import "./VocabularyPage.css";

function VocabularyPage({
  word,
  onWordChange,
  onSearch,
  sentences,
  visibleCount,
  onShowMore,
  status,
  errorMessage,
}) {
  const visibleSentences = sentences.slice(0, visibleCount);

  return (
    <main className="vocabulary-page">
      <p className="vocabulary-page__eyebrow">Learn in context</p>
      <h1 className="vocabulary-page__heading">Spanish example sentences</h1>
      <p className="vocabulary-page__intro">
        Search for a Spanish word and see how it is used, with English
        translations.
      </p>

      <SearchForm
        word={word}
        onWordChange={onWordChange}
        onSubmit={onSearch}
        isLoading={status === "loading"}
      />

      <section
        className="results"
        aria-live="polite"
        aria-busy={status === "loading"}
      >
        {status === "loading" && <Preloader />}

        {status === "error" && (
          <p className="results__message results__message--error">
            {errorMessage}
          </p>
        )}

        {status === "empty" && (
          <div className="results__empty-state">
            <img
              className="results__empty-image"
              src={`${import.meta.env.BASE_URL}vocabulary-not-found-character.png`}
              alt="A confused student looking for a word that was not found"
            />
            <p className="results__message">
              No examples found. Try another Spanish word.
            </p>
          </div>
        )}

        {status === "success" && (
          <>
            <h2 className="results__heading">Examples for “{word.trim()}”</h2>

            <ul className="results__list">
              {visibleSentences.map((sentence) => (
                <SentenceCard key={sentence.id} sentence={sentence} />
              ))}
            </ul>

            {visibleCount < sentences.length && (
              <button
                className="results__more-button"
                type="button"
                onClick={onShowMore}
              >
                Show more
              </button>
            )}

            <p className="results__attribution">
              Sentence data from{" "}
              <a href="https://tatoeba.org/" target="_blank" rel="noreferrer">
                Tatoeba
              </a>
              . Each sentence links to its source and shows its contributor and
              license when provided.
            </p>
          </>
        )}
      </section>
    </main>
  );
}

export default VocabularyPage;
