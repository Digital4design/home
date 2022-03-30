import { PlayIcon } from "components/Icons"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  openModal: () => void
}

/**
 *
 * @property openModal is from the useModal hook and should be passed down from the VideoModalSection
 * @returns a placeholder image with a trigger to open a video modal
 */

export default function VideoPlaceholder({ children, openModal }: Props) {
  return (
    <figure
      className="group relative mx-auto aspect-video w-full max-w-[600px] translate-y-[50px] cursor-pointer overflow-hidden rounded shadow-xl lg:w-2/3 lg:max-w-[850px]"
      onClick={openModal}
    >
      {children}
      <div className="group absolute inset-0 flex flex-col items-center justify-center bg-brand-blue-dark bg-opacity-40 transition-all duration-700 ease-in-out hover:bg-opacity-30 hover:backdrop-blur-sm">
        <div className="mb-4 mt-8 flex h-12 w-12 items-center justify-center rounded-sm bg-white shadow transition-all duration-500 ease-in-out hover:bg-brand-blue-dark group-hover:scale-105 group-hover:shadow-lg">
          <PlayIcon classes="h-4 w-4 transition-colors duration-700 ease-in-out text-brand-blue group-hover:text-brand-green" />
        </div>
        <span className="text-white transition-transform duration-700 ease-in-out group-hover:scale-105">
          Watch Video
        </span>
      </div>
    </figure>
  )
}
