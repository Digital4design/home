import Link from "next/link";
import Image from "next/image";
import { LocationMarkerIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="py-3">
      <Link href="/">
        <p className="mb-2 cursor-pointer text-sm text-brand-blue-dark hover:text-brand-blue">
          {"<"} Back to search
        </p>
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <h4>Rothwells Farms - Gosford</h4>
          <div className="flex items-center gap-1 text-sm text-brand-green ">
            <LocationMarkerIcon className="h-4" />
            <p className="text-brand-green">Golborne, Wigan, WA3 3EG</p>
          </div>
        </div>
        <div className="relative h-20 w-20 ">
          <Image
            alt="Taylor Wimpey"
            src="/assets/image/tw.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
