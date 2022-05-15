import Tooltip from "./Tooltip"

interface PropTypes {
  border?: boolean
  featured?: boolean
  title: string
  value: any
  tooltip?: string
}

function PriceItem({ border, featured, title, value, tooltip }: PropTypes) {
  return (
    <div className={`px-4 ${featured && "bg-brand-grey-light"}`}>
      <div className={`flex justify-between py-4 ${border && "border-b"}`}>
        <p className={` ${featured && "font-bold text-brand-grey-dark"}`}>
          {title}
        </p>
        <div className="flex items-center gap-2">
          <p
            className={`text-brand-grey-dark ${
              featured && "text-lg font-bold"
            }`}
          >
            {value}
          </p>
          {tooltip && (
            <Tooltip body={tooltip}>
              <div className="text-brand-dark-blue flex rounded-[4px] bg-brand-blue-light px-[7px] text-xs font-bold ">
                i
              </div>
            </Tooltip>
          )}
        </div>
      </div>
    </div>
  )
}

export default PriceItem
