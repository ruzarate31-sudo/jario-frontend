import { useState } from 'react'
import './LevelAssessment.css'

function estimateLevel(formData) {
  let score = 0
  if (formData.get('question-one') === 'soy') score += 1
  if (formData.get('question-two') === 'aprender') score += 1

  const writing = String(formData.get('writing') || '').trim()
  const words = writing.split(/\s+/).filter(Boolean)
  const sentences = writing.split(/[.!?]+/).filter((sentence) => sentence.trim())

  if (words.length >= 25 && sentences.length >= 3) {
    score += 2
  } else if (words.length >= 8 && sentences.length >= 1) {
    score += 1
  }

  if (score <= 1) {
    return {
      label: 'Beginner · A1',
      detail: 'We’ll focus on useful words and simple everyday conversations.',
    }
  }

  if (score <= 3) {
    return {
      label: 'Elementary · A2',
      detail: 'You’re building a foundation and can grow your confidence with guided practice.',
    }
  }

  return {
    label: 'Developing · B1',
    detail: 'You’re ready to build fluency through more open conversation and personalized practice.',
  }
}

function LevelAssessment() {
  const [result, setResult] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    setResult(estimateLevel(new FormData(event.currentTarget)))
  }

  return (
    <section className="level-assessment" aria-labelledby="level-heading">
      <div className="level-assessment__intro">
        <p className="level-assessment__eyebrow">Step 2 · Tell us about you</p>
        <h2 className="level-assessment__heading" id="level-heading">
          Find your Spanish level.
        </h2>
        <p className="level-assessment__description">
          Complete this short assessment before your trial so we can make the
          lesson more useful for you.
        </p>
        <p className="level-assessment__reassurance">
          Not sure about your level? That’s completely fine. Your teacher will
          confirm your starting point during the trial.
        </p>
      </div>

      <form className="level-form" onSubmit={handleSubmit}>
        <h3 className="level-form__heading">Your learning snapshot</h3>

        <div className="level-form__profile-grid">
          <label className="level-form__field">
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </label>
          <label className="level-form__field">
            <span>Age</span>
            <input name="age" type="number" min="5" max="120" placeholder="Your age" />
          </label>
          <label className="level-form__field">
            <span>Country</span>
            <input name="country" type="text" placeholder="Where are you based?" autoComplete="country-name" />
          </label>
          <label className="level-form__field">
            <span>Native language</span>
            <input name="native-language" type="text" placeholder="Your first language" />
          </label>
          <label className="level-form__field">
            <span>Current Spanish level</span>
            <select name="current-level" defaultValue="">
              <option value="" disabled>Select a level (optional)</option>
              <option>Beginner</option>
              <option>Elementary</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>I don’t know</option>
            </select>
          </label>
          <label className="level-form__field">
            <span>Preferred class type</span>
            <select name="class-type" defaultValue="">
              <option value="" disabled>Choose a class (optional)</option>
              <option>One-to-one Spanish</option>
              <option>Group classes</option>
              <option>Conversation practice</option>
              <option>Spanish for travel</option>
              <option>Spanish for work</option>
            </select>
          </label>
        </div>

        <label className="level-form__field level-form__field--wide">
          <span>Why are you learning Spanish?</span>
          <textarea name="goals" rows="3" placeholder="Tell us a little about your goals" />
        </label>

        <fieldset className="level-form__question">
          <legend>1. Choose the correct sentence:</legend>
          <div className="level-form__choices">
            <label><input type="radio" name="question-one" value="soy" required /> Yo soy estudiante</label>
            <label><input type="radio" name="question-one" value="es" /> Yo es estudiante</label>
            <label><input type="radio" name="question-one" value="estar" /> Yo estar estudiante</label>
          </div>
        </fieldset>

        <fieldset className="level-form__question">
          <legend>2. Complete the sentence: Me gusta ____ español.</legend>
          <div className="level-form__choices">
            <label><input type="radio" name="question-two" value="aprender" required /> aprender</label>
            <label><input type="radio" name="question-two" value="aprendo" /> aprendo</label>
            <label><input type="radio" name="question-two" value="aprendido" /> aprendido</label>
          </div>
        </fieldset>

        <label className="level-form__field level-form__field--wide">
          <span>3. Write three sentences about yourself in Spanish.</span>
          <textarea name="writing" rows="4" placeholder="¡Hola! Me llamo..." required />
        </label>

        <button className="level-form__submit" type="submit">
          Get my estimated level <span aria-hidden="true">→</span>
        </button>

        {result && (
          <div className="level-form__result" role="status" aria-live="polite">
            <p className="level-form__result-label">Your estimated starting point</p>
            <h4>{result.label}</h4>
            <p>{result.detail}</p>
            <small>This is a quick estimate. Your teacher will confirm your level during the trial.</small>
          </div>
        )}
      </form>
    </section>
  )
}

export default LevelAssessment
