import SectionHeading from "components/global/sectionHeading"
import { Builder } from "types/property"

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
