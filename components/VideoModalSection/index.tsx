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
      >
        <iframe
          src={videoURL}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-[450px] w-full rounded"
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
            blurDataURL={imageBlurPlaceholderURL}
          />
        </VideoPlaceholder>
      </div>
    </section>
  )
}
