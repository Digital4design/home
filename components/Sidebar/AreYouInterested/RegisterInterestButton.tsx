import Modal from "components/Modal"
import useModal from "hooks/useModal"
import React from "react"

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
          <p>
            Register Interest Form but will need to be taylored for each
            property or development. So we can pass some subject or information
            through to the email trigger
          </p>
        </div>
      </Modal>
    </>
  )
}
