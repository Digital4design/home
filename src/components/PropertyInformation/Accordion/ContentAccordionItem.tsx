import { ChevronDownIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Link from "next/link"
import {
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion"
import { Builder, Location } from "types/property"

interface Props {
  heading: string
  body?: string
  location?: Location
  developer?: Builder
}

export default function ContentAccordionItem({
  heading,
  body,
  location,
  developer,
}: Props) {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemState>
          {({ expanded }) => (
            <AccordionItemButton
              className={`flex items-center justify-between ${
                expanded ? "pt-8 pb-2" : "border-b py-8"
              }`}
            >
              <p className="text-lg font-bold text-brand-grey-dark">
                {heading}
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
        {body && <p className="py-4">{body}</p>}
        {developer && (
          <article className="flex flex-col py-6 md:flex-row">
            <figure className="max-w-32 md:max-w-44 relative h-32 w-32 md:w-44">
              <Link passHref href={`/developer/${developer.slug}`}>
                <Image
                  src={developer.logo.url}
                  alt={developer.logo.alt}
                  layout="fill"
                  objectFit="contain"
                  className="cursor-pointer"
                />
              </Link>
            </figure>
            <p className="flex-1 md:ml-6">{developer.description}</p>
          </article>
        )}
        {location && (
          <pre className="bg-gray-50 p-4">
            {JSON.stringify(location, null, 2)}
          </pre>
        )}
      </AccordionItemPanel>
    </AccordionItem>
  )
}
