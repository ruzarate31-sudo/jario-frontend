import "./Classes.css";
import classesImage from "../../images/jario-virtual-classes.jpg";

function Classes() {
  return (
    <section className="classes" aria-labelledby="classes-heading">
      <p className="classes__eyebrow">Find your way to learn</p>
      <h2 className="classes__heading" id="classes-heading">
        Classes for your goals and your world
      </h2>
      <p className="classes__description">
        Choose the learning format that fits your pace, interests, and routine.
      </p>

      <figure className="classes__visual">
        <img
          className="classes__image"
          src={classesImage}
          alt="Spanish learners of different ages practicing online with JARIO Spanish Academy."
          loading="lazy"
          decoding="async"
        />
      </figure>

      <ul className="classes__list">
        <li className="classes__item">
          <article className="class-card">
            <span className="class-card__icon" aria-hidden="true">
              👩‍🏫
            </span>
            <h3 className="class-card__heading">One-to-one Spanish</h3>
            <p className="class-card__description">
              Focused lessons built around your pace, interests, and goals.
            </p>
            <a className="class-card__link" href="#booking">
              Book free trial <span aria-hidden="true">→</span>
            </a>
          </article>
        </li>

        <li className="classes__item">
          <article className="class-card">
            <span className="class-card__icon" aria-hidden="true">
              👥
            </span>
            <h3 className="class-card__heading">Group classes</h3>
            <p className="class-card__description">
              Learn together, share ideas, and grow your speaking confidence.
            </p>
            <a className="class-card__link" href="#booking">
              Book free trial <span aria-hidden="true">→</span>
            </a>
          </article>
        </li>

        <li className="classes__item">
          <article className="class-card">
            <span className="class-card__icon" aria-hidden="true">
              💬
            </span>
            <h3 className="class-card__heading">Conversation practice</h3>
            <p className="class-card__description">
              Relaxed, guided conversation to help your Spanish flow.
            </p>
            <a className="class-card__link" href="#booking">
              Book free trial <span aria-hidden="true">→</span>
            </a>
          </article>
        </li>

        <li className="classes__item">
          <article className="class-card">
            <span className="class-card__icon" aria-hidden="true">
              ✈️
            </span>
            <h3 className="class-card__heading">Spanish for travel</h3>
            <p className="class-card__description">
              Get ready for local encounters, new places and smooth travels.
            </p>
            <a className="class-card__link" href="#booking">
              Book free trial <span aria-hidden="true">→</span>
            </a>
          </article>
        </li>

        <li className="classes__item">
          <article className="class-card">
            <span className="class-card__icon" aria-hidden="true">
              💼
            </span>
            <h3 className="class-card__heading">Spanish for work</h3>
            <p className="class-card__description">
              Communicate clearly and comfortably with Spanish-speaking
              colleagues.
            </p>
            <a className="class-card__link" href="#booking">
              Book free trial <span aria-hidden="true">→</span>
            </a>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default Classes;
