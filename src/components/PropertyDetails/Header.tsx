import Link from "next/link"
import Image from "next/image"
import { LocationMarkerIcon } from "@heroicons/react/outline"
import { ChevronLeftIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { Location } from "types/property"

interface Props {
  name: string
  location: Location
}

function Header({ name, location }: Props) {
  const router = useRouter()

  return (
    <header className="py-6">
      <p
        className="mb-4 flex cursor-pointer items-center text-sm text-brand-blue-dark hover:text-brand-blue"
        onClick={() => router.back()}
      >
        <ChevronLeftIcon className="h-4 w-4" /> Back to search
      </p>
      <div className="flex items-center justify-between">
        <div>
          <h4>{name}</h4>
          <div className="flex items-center gap-1 text-sm text-brand-green ">
            <LocationMarkerIcon className="h-4" />
            <p className="text-brand-green">Golborne, Wigan, WA3 3EG</p>
          </div>
        </div>
        <div
          className="relative hidden h-20 w-20 cursor-pointer lg:block"
          onClick={() => router.push("/developer/taylor-whimpey")}
        >
          <Image
            alt="Taylor Wimpey"
            src="/assets/image/tw.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
