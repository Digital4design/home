import { ReactNode } from "react"

interface PropTypes {
  onClick?: () => void
  children: ReactNode
  disabled?: boolean
  outline?: boolean
}

function Button({ onClick, children, disabled, outline }: PropTypes) {
  const classes = outline
    ? "text-brand-green border border-brand-green hover:bg-brand-green hover:text-white"
    : "bg-brand-green " //TODO: Add hover state

  return (
    <button
      role="button"
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={` rounded-sm  py-3 px-8 text-white ${classes}`}
    >
      {children}
    </button>
  )
}

export default Button
