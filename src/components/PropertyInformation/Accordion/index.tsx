import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline"

interface DataTypes {
  heading: string
  body: string
}
interface PropTypes {
  data?: DataTypes[]
  children?: any
  heading?: string
}

/**
 * A single or multiple accordion components. Pass an array of 'data' to return multiple accordions or 'children' and a 'heading' to return a single accordion.
 * Although all properties are optional, DATA must be passed for multiple accordions and a HEADING and CHILDREN must be passed for a single accordion.
 * @param {Array} props.data OPTIONAL An array of data objects - Must contain a 'Heading' 'body' to construct a list of accordions - use without children & heading
 * @param {any} props.children OPTIONAL Children to be rendered in the body of the single accordion - use with heading
 * @param {string} props.heading OPTIONAL A heading to be rendered as the heading of the single accordion - use with children
 * @returns A single or multiple accordion components.
 */
function AccordionItems({ data, children, heading }: PropTypes) {
  if (data) {
    return (
      <Accordion allowZeroExpanded allowMultipleExpanded>
        {data.map((item: any, index: any) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemState>
                {({ expanded }) => (
                  <AccordionItemButton
                    className={`flex items-center justify-between ${
                      expanded ? "pt-8 pb-2" : "border-b py-8"
                    }`}
                  >
                    <p className="text-lg font-bold text-brand-grey-dark">
                      {item.heading}
                    </p>
                    <ChevronDownIcon
                      className={`h-6 text-brand-blue-dark transition duration-75 ${
                        expanded && "rotate-180"
                      }`}
                    />
                  </AccordionItemButton>
                )}
              </AccordionItemState>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="py-4">{item.body}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className="flex justify-between py-6 px-4">
            <p className="  text-brand-grey-dark">{heading}</p>
            <AccordionItemState>
              {({ expanded }) =>
                expanded ? (
                  <ChevronUpIcon className="h-6 text-brand-blue-dark" />
                ) : (
                  <ChevronDownIcon className="h-6 text-brand-blue-dark" />
                )
              }
            </AccordionItemState>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>{children}</AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionItems
