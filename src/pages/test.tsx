import Paragraph from "components/global/Paragraph"
import ParagraphHeading from "components/global/Paragraph/ParagraphHeading"
import Modal from "components/Modal"
import useModal from "hooks/useModal"

export default function Test() {
  const { modalIsOpen, closeModal, openModal } = useModal()
  return (
    <section className="flex justify-center py-20">
      <button className="button" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={modalIsOpen} handleClose={closeModal}>
        <div className="p-8">
          <h2 className="text-3xl">Modal Heading!</h2>
          <Paragraph>
            <ParagraphHeading>Paragraph heading baby</ParagraphHeading>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            eos magnam necessitatibus maiores asperiores quasi recusandae quas,
            fugit sed modi illo, corrupti labore cumque numquam dolorum ut magni
            at eveniet.ß
          </Paragraph>
        </div>
      </Modal>
    </section>
  )
}
