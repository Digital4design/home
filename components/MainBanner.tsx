import { ChildrenProps } from "types"

export default function MainBanner({ children }: ChildrenProps) {
  return (
    <section className="h-[550px] bg-gradient-to-b from-brand-grey-light to-brand-blue-light">
      <div className="container-sm flex h-full flex-col items-center justify-center pb-20 text-center">
        {children}
      </div>
    </section>
  )
}
