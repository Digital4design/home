import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";

const data = [
  {
    heading: "Eligibility Criteria",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est delectus distinctio itaque ex saepe consectetur ea aspernatur vequos, id molestiae quisquam temporibus consequatur modi unde nulla nostrum aliquam recusandae eveniet nam facere alias incidunt sit!Mollitia porro sunt quasi.",
  },
  {
    heading: "Explore the local area",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est delectus distinctio itaque ex saepe consectetur ea aspernatur vequos, id molestiae quisquam temporibus consequatur modi unde nulla nostrum aliquam recusandae eveniet nam facere alias incidunt sit!Mollitia porro sunt quasi.",
  },
  {
    heading: "About the developer",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est delectus distinctio itaque ex saepe consectetur ea aspernatur vequos, id molestiae quisquam temporibus consequatur modi unde nulla nostrum aliquam recusandae eveniet nam facere alias incidunt sit!Mollitia porro sunt quasi.",
  },
];

function AccordionItems() {
  return (
    <Accordion allowZeroExpanded>
      {data.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionItemHeading>
            <AccordionItemButton className="flex justify-between border-b py-6">
              <p className=" font-bold text-brand-grey-dark">{item.heading}</p>
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

export default AccordionItems;
