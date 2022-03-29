import { PlayIcon } from "components/Icons"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  openModal: () => void
}

export default function VideoPlaceholder({ children, openModal }: Props) {
  return (
    <figure
      className="relative mx-auto aspect-video w-full translate-y-[50px] cursor-pointer overflow-hidden rounded shadow-xl lg:w-2/3"
      onClick={openModal}
    >
      {children}
      <div className="group absolute inset-0 flex flex-col items-center justify-center bg-brand-blue-dark bg-opacity-20">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm bg-white shadow transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg">
          <PlayIcon classes="h-4 w-4 transition-colors duration-300 ease-in-out text-brand-blue group-hover:text-brand-green" />
        </div>
        <span className="text-white transition-transform duration-300 ease-in-out group-hover:scale-105">
          Watch Video
        </span>
      </div>
    </figure>
  )
}
