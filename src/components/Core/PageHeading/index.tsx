import { ReactNode } from "react"

interface Props {
  containerSm?: boolean
  size?: "sm" | "md"
  children: ReactNode
  centerText?: boolean
}

export default function PageHeading({
  containerSm,
  size,
  children,
  centerText,
}: Props) {
  return (
    <section
      className={size === "sm" ? "py-8" : size === "md" ? "py-14" : "py-16"}
    >
      <div className={containerSm ? "container-sm" : "container"}>
        <h1 className={`${centerText && "text-center"}`}>{children}</h1>
      </div>
    </section>
  )
}
