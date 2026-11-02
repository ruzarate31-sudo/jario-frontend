import "./SentenceCard.css";
import { MAX_TRANSLATIONS_PER_SENTENCE } from "../../utils/config";

function SentenceCard({ sentence }) {
  return (
    <li className="sentence-card">
      <p className="sentence-card__text">{sentence.text}</p>

      {sentence.translations?.length > 0 ? (
        <ul
          className="sentence-card__translations"
          aria-label="English translations"
        >
          {sentence.translations
            .slice(0, MAX_TRANSLATIONS_PER_SENTENCE)
            .map((translation) => (
            <li key={translation.id}>{translation.text}</li>
            ))}
        </ul>
      ) : (
        <p className="sentence-card__translation-note">
          No English translation available.
        </p>
      )}

      <p className="sentence-card__credit">
        <a
          href={`https://tatoeba.org/en/sentences/show/${sentence.id}`}
          target="_blank"
          rel="noreferrer"
        >
          View on Tatoeba
        </a>

        {sentence.owner
          ? ` · contributed by ${sentence.owner}`
          : " · Tatoeba community"}

        {sentence.license ? ` · ${sentence.license}` : ""}
      </p>
    </li>
  );
}

export default SentenceCard;
