import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    lessons: 5,
    total: 99,
    perLesson: '19.80',
    paymentUrl: 'https://www.paypal.com/ncp/payment/LP47DSB574PWY',
  },
  {
    name: 'Momentum',
    lessons: 10,
    total: 179,
    perLesson: '17.90',
    paymentUrl: 'https://www.paypal.com/ncp/payment/Y6GX98PLC4HK8',
  },
  {
    name: 'Fluency Builder',
    lessons: 20,
    total: 299,
    perLesson: '14.95',
    paymentUrl: 'https://www.paypal.com/ncp/payment/9P68PRJC3XSJY',
    featured: true,
  },
]

const planFeatures = [
  '50-minute lessons',
  'Flexible scheduling',
  'Personalized program',
]

function Pricing() {
  return (
    <section className="pricing" aria-labelledby="pricing-heading">
      <div className="pricing__intro">
        <p className="pricing__eyebrow">Step 3 · Choose when you’re ready</p>
        <h2 className="pricing__heading" id="pricing-heading">
          Your learning journey, your way.
        </h2>
        <p className="pricing__description">
          Enjoy your free trial first. Once we create your personalized plan,
          you can securely purchase a lesson package.
        </p>
      </div>

      <ul className="pricing__plans">
        {plans.map((plan) => (
          <li
            className={`pricing__plan${plan.featured ? ' pricing__plan--featured' : ''}`}
            key={plan.name}
          >
            {plan.featured && (
              <span className="pricing__badge">Best value</span>
            )}
            <article className="pricing-card">
              <h3 className="pricing-card__name">{plan.name}</h3>
              <p className="pricing-card__lessons">
                {plan.lessons} {plan.lessons === 1 ? 'lesson' : 'lessons'}
              </p>
              <p className="pricing-card__price">${plan.total}</p>
              <p className="pricing-card__rate">${plan.perLesson} per lesson</p>

              <ul className="pricing-card__features">
                {planFeatures.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                className="pricing-card__cta"
                href={plan.paymentUrl}
                target="_blank"
                rel="noreferrer"
              >
                Purchase package
              </a>
              <a className="pricing-card__trial-link" href="#booking">
                Book a free trial first
              </a>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Pricing
