import './About.css'

function About() {
  return (
    <section className="about" aria-labelledby="about-heading">
      <div className="about__highlight">
        <span className="about__quote-mark" aria-hidden="true">“</span>
        <p className="about__highlight-title">Spanish that fits your life.</p>
        <p className="about__highlight-copy">
          Learn naturally through useful conversation, thoughtful guidance and a
          little Colombian warmth.
        </p>
        <a className="about__cta" href="#booking">
          Meet us in a free trial <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="about__content">
        <p className="about__eyebrow">About the academy</p>
        <h2 className="about__heading" id="about-heading">
          A friendly place to make Spanish your own.
        </h2>
        <p className="about__description">
          Spanish Academy JARIO is an online school focused on natural
          communication for real life. We tailor every lesson to your goals,
          experience and schedule—without boring memorization.
        </p>

        <ul className="about__benefits">
          <li className="about__benefit">
            <span className="about__benefit-icon" aria-hidden="true">🧭</span>
            <h3>Practical by design</h3>
            <p>Useful words and situations you can use right away.</p>
          </li>
          <li className="about__benefit">
            <span className="about__benefit-icon" aria-hidden="true">🤝</span>
            <h3>Personal support</h3>
            <p>A welcoming space to learn, ask and make mistakes.</p>
          </li>
          <li className="about__benefit">
            <span className="about__benefit-icon" aria-hidden="true">⏰</span>
            <h3>Flexible scheduling</h3>
            <p>Choose a time that works with your routine.</p>
          </li>
          <li className="about__benefit">
            <span className="about__benefit-icon" aria-hidden="true">🌱</span>
            <h3>Every level is welcome</h3>
            <p>From absolute beginner to confident speaker.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default About
