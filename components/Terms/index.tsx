import Paragraph from "components/global/Paragraph"
import ParagraphHeading from "components/global/Paragraph/ParagraphHeading"

interface Content {
  title: string
  paragraphs: string[]
}

interface Props {
  content: Content
}

export default function Terms({ content }: Props) {
  const firstParagraph = content.paragraphs[0]
  const paragraphs = content.paragraphs.slice(1)
  return (
    <article className="py-2">
      <div className="container-xs">
        <Paragraph>
          <ParagraphHeading colour="text-brand-green">
            {content.title}:
          </ParagraphHeading>
          {firstParagraph}
        </Paragraph>
        {paragraphs.map((paragraph, index) => (
          <Paragraph key={index}>{paragraph}</Paragraph>
        ))}
      </div>
    </article>
  )
}
