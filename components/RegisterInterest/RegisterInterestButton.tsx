import Modal from "components/Modal"
import useModal from "hooks/useModal"
import React from "react"
import RegisterInterest from "components/RegisterInterest"

interface Props {
  full?: boolean
}

export default function RegisterInterestButton({ full = false }: Props) {
  const { modalIsOpen, openModal, closeModal } = useModal()
  return (
    <>
      <button className={`button ${full && "w-full"}`} onClick={openModal}>
        Register Interest
      </button>
      <Modal isOpen={modalIsOpen} handleClose={closeModal}>
        <div className="p-8">
          <RegisterInterest />
        </div>
      </Modal>
    </>
  )
}
