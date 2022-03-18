import ReactTooltip from "react-tooltip"

interface PropTypes {
  children: any
  body: string
}

/**
 * A tooltip component that dispolays a string when the child element is hovered
 * @param  any props.children The item to target with a tooltip.
 * @param {string} props.body The body copy of the tooltip.
 * @returns A Tooltip
 */
function Tooltip({ children, body }: PropTypes) {
  return (
    <>
      <span data-tip data-for={body}>
        {children}
      </span>
      <ReactTooltip
        id={body}
        effect="solid"
        place="left"
        backgroundColor="hsl(199, 100%, 24%)"
      >
        <p className="max-w-xs bg-brand-blue text-white">{body}</p>
      </ReactTooltip>
    </>
  )
}

export default Tooltip
