import './YouTube.css'

function YouTube() {
  return (
    <section className="youtube" aria-labelledby="youtube-heading">
      <div className="youtube__content">
        <p className="youtube__eyebrow">Learn between lessons</p>
        <h2 className="youtube__heading" id="youtube-heading">
          Learn Spanish on YouTube.
        </h2>
        <p className="youtube__description">
          Pick up useful phrases, hear Spanish in context and keep your learning
          momentum going wherever you are.
        </p>
        <a
          className="youtube__channel-link"
          href="https://www.youtube.com/@Linguatoons"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="youtube__logo"
            viewBox="0 0 24 17"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fill="currentColor"
              d="M23.5 2.7a3 3 0 0 0-2.1-2.1C19.6 0 12 0 12 0S4.4 0 2.6.6A3 3 0 0 0 .5 2.7 31 31 0 0 0 0 8.5a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.4 17 12 17 12 17s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-5.8 31 31 0 0 0-.5-5.8Z"
            />
            <path fill="#e5253b" d="m9.6 12.1 6.3-3.6-6.3-3.6v7.2Z" />
          </svg>
          <span>Visit LINGUATOONS on YouTube</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="youtube__video-column">
        <div className="youtube__video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/RhAPldODi1s"
            title="Sample Spanish lesson from the Linguatoons YouTube channel"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <p className="youtube__fallback">
          If the video does not load,{' '}
          <a
            href="https://www.youtube.com/watch?v=RhAPldODi1s"
            target="_blank"
            rel="noreferrer"
          >
            watch it on YouTube <span aria-hidden="true">↗</span>
          </a>
        </p>
      </div>
    </section>
  )
}

export default YouTube
