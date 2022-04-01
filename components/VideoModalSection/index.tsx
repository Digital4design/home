import Modal from "components/Modal"
import useModal from "hooks/useModal"
import Image from "next/image"
import VideoPlaceholder from "components/VideoModalSection/VideoPlaceholder"

interface Props {
  videoURL: string
  title: string
  imagePlaceholderURL: string
  alt: string
  imageBlurPlaceholderURL: string
}

/**
 *
 * @property videoURL will be the URL to the youtube video, assuming it is on YouTube for now
 * @property title is the title you are going to give the video modal section, it will also be used as the iFrame title
 * @property imagePlaceholderURL is the URL of the image you would like to display in place of the video before the modal is opened
 * @property alt is the text you'd like to use for the image alt text
 * @property imageBlurPlaceholderURL is the URL of the lower resolution image you would like to use for lazy loading, it is required
 * @returns an image with a video aspect that, when clicked, will open a modal which holds a video from youtube
 */

export default function VideoModalSection({
  videoURL,
  title,
  imagePlaceholderURL,
  alt,
  imageBlurPlaceholderURL,
}: Props) {
  const { modalIsOpen, closeModal, openModal } = useModal()

  return (
    <section className="mt-36 bg-brand-grey-light md:pt-[25px]">
      <Modal
        isOpen={modalIsOpen}
        handleClose={closeModal}
        overlayClick={closeModal}
        isVideo
      >
        <iframe
          src={videoURL}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full rounded"
        ></iframe>
      </Modal>
      <div className="container-sm h-[350px]">
        <h2 className="mt-[100px] pt-[100px] text-center md:pt-0">{title}</h2>
        <VideoPlaceholder openModal={openModal}>
          <Image
            src={imagePlaceholderURL}
            alt={alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            className="scale-105 transition-transform duration-1000 ease-in-out group-hover:scale-100"
            blurDataURL={imageBlurPlaceholderURL}
          />
        </VideoPlaceholder>
      </div>
    </section>
  )
}
