interface Props {
  children: JSX.Element
}

export default function MainImageContainer({ children }: Props) {
  return (
    <figure className="relative aspect-square w-full overflow-hidden rounded md:aspect-auto md:h-[500px]">
      {children}
    </figure>
  )
}
