import ReactDOM from "react-dom"
import { useEffect, useMemo } from "react"
import { ChildrenProps } from "types"

const ModalPortal = ({ children }: ChildrenProps) => {
  const el = useMemo(() => document.createElement("div"), [])

  useEffect(() => {
    const body = document.body

    el.setAttribute("id", "modal-portal")

    body.appendChild(el)
    body.classList.add("overflow-hidden")

    return () => {
      body.removeChild(el)
      body.classList.remove("overflow-hidden")
    }
  }, [el])
  return ReactDOM.createPortal(children, el)
}

export default ModalPortal
