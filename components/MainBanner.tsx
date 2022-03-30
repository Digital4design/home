import Image from "next/image"
import { ChildrenProps } from "types"

export default function MainBanner({ children }: ChildrenProps) {
  return (
    <section className="relative z-20 h-[550px] bg-gradient-to-b from-brand-grey-light to-brand-blue-light">
      <div className="container-sm flex h-full flex-col items-center justify-center pb-20 text-center">
        {children}
      </div>
      <div className="absolute inset-0 -z-[1]">
        <figure className="relative h-full w-full">
          <Image
            src="/assets/placeholder/header.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="bottom"
            priority
          />
        </figure>
      </div>
    </section>
  )
}
