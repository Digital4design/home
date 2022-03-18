interface Props {
  label: string
  value: string
  url?: string
  onClick?: () => void
}

/**
 *
 * @property label - the left hand column label i.e. "E-mail" or "Telephone"
 * @property value - the information i.e. a telephone number, an email address
 * @property url - the url to link to i.e. tel:1234567890 or mailto:myemail.com
 * @returns a two column field for the contact footer column
 */

export default function ContactField({ label, value, url, onClick }: Props) {
  return (
    <div className="flex items-center justify-between text-sm leading-10">
      <span className="font-light">{label}</span>
      <a
        href={url}
        onClick={onClick}
        className="text-brand-green hover:text-brand-green-dark"
      >
        {value}
      </a>
    </div>
  )
}
