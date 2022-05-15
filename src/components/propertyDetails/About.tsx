import SectionHeading from "components/global/sectionHeading"

interface Props {
  houseStyle: string
  description: string
}

function About({ houseStyle, description }: Props) {
  return (
    <section>
      <SectionHeading heading={`About The ${houseStyle}`} />
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
    </section>
  )
}

export default About
