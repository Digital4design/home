import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

interface DataTypes {
  heading: string;
  body: string;
}
interface PropTypes {
  data?: DataTypes[];
  children?: any;
  heading?: string;
}

/**
 * A single or multiple accordion components. Pass an array of 'data' to return multiple accordions or 'children' and a 'heading' to return a single accordion.
 * Although all properties are optional, DATA must be passed for multiple accordions and a HEADING and CHILDREN must be passed for a single accordion.
 * @param {Array} props.data OPTIONAL An array of data objects - Must contain a 'Heading' 'body' to construct a list of accordions
 * @param {any} props.children OPTIONAL Children to be rendered in the body of the single accordion.
 * @param {string} props.heading OPTIONAL A heading to be rendered as the heading of the single accordion.
 * @returns A single or multiple accordion components.
 */
function AccordionItems({ data, children, heading }: PropTypes) {
  if (data) {
    return (
      <Accordion allowZeroExpanded>
        {data.map((item: any, index: any) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton className="flex justify-between border-b py-6">
                <p className=" font-bold text-brand-grey-dark">
                  {item.heading}
                </p>
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
            <AccordionItemPanel>
              <p className="py-4">{item.body}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    );
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
  );
}

export default AccordionItems;
