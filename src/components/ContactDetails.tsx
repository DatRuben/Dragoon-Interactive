import {
  useId,
  useState,
} from 'react'

type ContactDetailsProps = {
  tone: 'dark' | 'light'
  showResume?: boolean
}

function ContactDetails({
  tone,
  showResume = false,
}: ContactDetailsProps) {
  const [revealed, setRevealed] =
    useState(false)

  const panelId = useId()

  const email = revealed
    ? [
        'rubenbecerril',
        '.rb',
        '@',
        'gmail',
        '.com',
      ].join('')
    : ''

  return (
    <div
      className={
        `contact-details contact-details--${tone}`
      }
    >
      <button
        type="button"
        className="contact-details__toggle"
        aria-expanded={revealed}
        aria-controls={panelId}
        onClick={() =>
          setRevealed((current) => !current)
        }
      >
        {revealed
          ? 'Hide Contact Details'
          : 'View Contact Details'}
      </button>

      {revealed && (
        <div
          id={panelId}
          className="contact-details__panel"
        >
          <a href={`mailto:${email}`}>
            {email}
          </a>

          <a
            href="https://github.com/DatRuben"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ruben-becerril-/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01a4fd3e41986f7dba"
            target="_blank"
            rel="noreferrer"
          >
            Upwork Profile
          </a>

          <a
            href="https://www.upwork.com/services/product/development-it-a-custom-react-and-typescript-web-application-2110490046871661907?ref=fl_profile"
            target="_blank"
            rel="noreferrer"
          >
            Upwork Services & Prices
          </a>

          {showResume && (
            <a
              href="/Becerril_Ruben_10-12-2026.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ContactDetails