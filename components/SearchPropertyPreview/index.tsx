import PropertyPreviewImage from "components/PropertyPreview/PropertyPreviewImage"
import SearchPropertyPreviewHeader from "components/SearchPropertyPreview/SearchPropertyPreviewHeader"
import SearchPreviewColumn from "components/SearchPropertyPreview/SearchPreviewColumn"
import { ReplyIcon } from "@heroicons/react/solid"
import { HeartIcon } from "@heroicons/react/outline"
import { PropertyPreviewProps } from "types/property"

// this is all likely to change once we have the actual data from Dato

interface SearchPreview extends PropertyPreviewProps {
  image: string
  alt: string
  placeholder: string
  companyLogo: string
  placeholderLogo: string
  logoAltText: string
}

interface Props {
  property: SearchPreview
}

export default function SearchPropertyPreview({ property }: Props) {
  return (
    <article className="mb-6 flex h-[268px] overflow-hidden rounded-[15px] border border-gray-50 shadow-lg">
      <PropertyPreviewImage
        image={property.image}
        alt={property.alt}
        placeholder={property.placeholder}
        isSearchResult={true}
      />
      <div className="flex w-8/12 flex-col justify-between bg-white p-6">
        <SearchPropertyPreviewHeader
          title={property.title}
          address={property.address}
          companyLogo={property.companyLogo}
          placeholderURL={property.placeholderLogo}
          alt={property.logoAltText}
        />

        <strong>{property.beds}</strong>

        <aside className="flex">
          <SearchPreviewColumn
            label={`${property.shares}% shares from`}
            price={property.price}
          />
          <SearchPreviewColumn label="5% deposit from" price={4000} />
          <SearchPreviewColumn label="Est monthly cost" price={2030} />
        </aside>
        <footer className="mt-6 flex items-center">
          <button className="button">Register Interest</button>
          <button className="ml-4 flex h-12 w-12 items-center justify-center rounded-sm border border-brand-green bg-white">
            <ReplyIcon className="h-5 w-5 text-brand-green" />
          </button>
          <button className="ml-4 flex h-12 w-12 items-center justify-center rounded-sm border border-brand-green bg-white">
            <HeartIcon className="h-5 w-5 text-brand-green" />
          </button>
        </footer>
      </div>
    </article>
  )
}
