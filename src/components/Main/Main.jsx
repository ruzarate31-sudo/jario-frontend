import { Link } from "react-router-dom";
import "./Main.css";
import About from "../About/About";
import Classes from "../Classes/Classes";
import heroImage from "../../images/jario-hero.jpg";
import TrialBooking from "../TrialBooking/TrialBooking";
import Pricing from "../Pricing/Pricing";
import YouTube from "../YouTube/YouTube";
import LevelAssessment from "../LevelAssessment/LevelAssessment";
import Contact from "../Contact/Contact";

function Main() {
  return (
    <main className="main">
      <section className="main__hero" aria-labelledby="main-heading">
        <div className="main__content">
          <p className="main__eyebrow">Spanish with Colombian flavor</p>
          <h1 className="main__heading" id="main-heading">
            Learn Spanish with confidence.
          </h1>
          <p className="main__description">
            Practical, personalized online Spanish lessons with Colombian
            warmth.
          </p>

          <div className="main__actions">
            <Link className="main__cta" to="/vocabulary">
              Explore vocabulary
            </Link>
            <a className="main__secondary-cta" href="#classes-heading">
              Explore classes
            </a>
          </div>

          <p className="main__social-proof">
            <span className="main__stars" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <span>Made for real conversations and real life</span>
          </p>
        </div>

        <div className="main__visual">
          <img
            className="main__image"
            src={heroImage}
            alt="JARIO Spanish Academy logo on a glass wall inside a welcoming classroom."
            fetchPriority="high"
          />

          <div className="main__trial-badge">
            <strong>Free trial</strong>
            <span>Online class</span>
          </div>

          <div className="main__trust-card">
            <span className="main__trust-stars" aria-hidden="true">
              ★★★★★
            </span>
            <p>Trusted by students from 30+ countries</p>
          </div>
        </div>
      </section>

      <About />
      <Classes />
      <TrialBooking />
      <LevelAssessment />
      <Pricing />
      <YouTube />
      <Contact />
    </main>
  );
}

export default Main;
