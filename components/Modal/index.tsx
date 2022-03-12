import ModalPortal from "./ModalPortal"
import FocusTrap from "focus-trap-react"
import { XIcon } from "@heroicons/react/solid"
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ModalProps {
  overlayClick?: () => void
  children: ReactNode
  isOpen: boolean
  handleClose?: () => void
}

export default function Modal({
  overlayClick,
  children,
  isOpen,
  handleClose,
}: ModalProps) {
  if (!isOpen) return null
  return (
    <ModalPortal>
      <FocusTrap>
        <div className="fixed inset-0 z-max flex items-center justify-center rounded">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, type: "tween" }}
            className="relative z-50 w-full rounded bg-white shadow sm:w-2/3 lg:w-2/5"
            key="modal"
          >
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <XIcon className="h-5 w-5 text-gray-400 hover:text-gray-500" />
            </button>
            {children}
          </motion.div>
          )
          <div
            className="overlay absolute inset-0 bg-brand-blue bg-opacity-40"
            onClick={handleClose}
          ></div>
        </div>
      </FocusTrap>
    </ModalPortal>
  )
}
