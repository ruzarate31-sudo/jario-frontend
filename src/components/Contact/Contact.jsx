import './Contact.css'

const contactEmail = 'example.email@gmail.com'
const contactPhone = '+57 333 4444 5555'

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name')).trim()
    const subject = String(formData.get('subject')).trim()
    const message = String(formData.get('message')).trim()
    const body = `From: ${name}\n\n${message}`
    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
  }

  return (
    <section className="contact" aria-labelledby="contact-heading">
      <div className="contact__intro">
        <p className="contact__eyebrow">Say hello</p>
        <h2 className="contact__heading" id="contact-heading">
          We’d love to hear from you.
        </h2>
        <p className="contact__description">
          Questions about the classes or finding the right fit? Send us a note
          and we’ll get back to you.
        </p>

        <address className="contact__details">
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href="tel:+5733344445555">{contactPhone}</a>
        </address>

        <a
          className="contact__social-link"
          href="https://www.youtube.com/@Linguatoons"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit LINGUATOONS on YouTube"
        >
          <svg
            className="contact__youtube-logo"
            viewBox="0 0 24 17"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M23.5 2.7a3 3 0 0 0-2.1-2.1C19.6 0 12 0 12 0S4.4 0 2.6.6A3 3 0 0 0 .5 2.7 31 31 0 0 0 0 8.5a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.4 17 12 17 12 17s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8Z"
            />
            <path fill="#fff" d="m9.6 12.1 6.3-3.6-6.3-3.6v7.2Z" />
          </svg>
          <span>LINGUATOONS</span>
        </a>
      </div>

      <form className="contact__form" onSubmit={handleSubmit}>
        <label className="contact__field">
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
        </label>
        <label className="contact__field">
          <span>Subject</span>
          <input name="subject" type="text" placeholder="How can we help?" required />
        </label>
        <label className="contact__field">
          <span>Message</span>
          <textarea name="message" rows="5" placeholder="Write your message..." required />
        </label>
        <button className="contact__submit" type="submit">
          Send message <span aria-hidden="true">→</span>
        </button>
        <p className="contact__form-note">
          Your email app will open with your message ready to send.
        </p>
      </form>
    </section>
  )
}

export default Contact
