import React from "react"
import { ChildrenProps } from "types"

interface Props extends ChildrenProps {
  label: string
  fluid?: boolean
}

/**
 *
 * @param props.label the label text to display
 * @param props.children should be an <input /> element, *must have class 'input-has-float' and a placeholder with any string
 * @returns a form field which allows a floating label
 */

// note that the input should be the child and it shoudl have the "input-has-float" class for this to work and a placeholder property with any string
export default function FloatingLabelField({ children, label, fluid }: Props) {
  const fluidClasses = fluid ? "w-full" : "w-1/2"
  return (
    <div className={`group relative ${fluidClasses} px-2 pt-8`}>
      {children}
      <label className="floating-label">{label}</label>
    </div>
  )
}
