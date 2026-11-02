import "./TrialBooking.css";

function TrialBooking() {
  return (
    <section
      className="trial-booking"
      id="booking"
      aria-labelledby="trial-booking-heading"
    >
      <div className="trial-booking__content">
        <p className="trial-booking__eyebrow">Step 1 · Pick a time</p>

        <h2 className="trial-booking__heading" id="trial-booking-heading">
          Book your free trial class.
        </h2>

        <p className="trial-booking__description">
          Choose an available time in your local time zone. There is no payment
          or commitment required to book a trial class.
        </p>

        <ul className="trial-booking__benefits">
          <li>Meet your teacher and share your goals</li>
          <li>Get a feel for our friendly teaching style</li>
          <li>Try a class with no payment or commitment</li>
        </ul>
      </div>

      <div className="trial-booking__calendar">
        <p className="trial-booking__timezone-notice" role="note">
          <span aria-hidden="true">🕒</span>
          <span>
            Before booking, check that the selected time zone matches your
            location.
          </span>
        </p>
        <iframe
          className="trial-booking__iframe"
          src="https://calendly.com/ruzarate31/30min"
          title="Calendly scheduler for a free JARIO Spanish class"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </section>
  );
}

export default TrialBooking;
