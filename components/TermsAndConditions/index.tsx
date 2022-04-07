import Paragraph from "components/global/Paragraph"
import ParagraphHeading from "components/global/Paragraph/ParagraphHeading"
import React from "react"

interface Content {
  title: string
  paragraphs: string[]
}

interface Props {
  content: Content[]
}

export default function Term({ content }: Props) {
  return (
    <article className="py-2">
      <div className="container-xs">
        {content.map((data, index) => {
          index === 0 ? (
            <Paragraph>
              <ParagraphHeading colour="text-brand-green">
                {data.title}:
              </ParagraphHeading>
              {data.paragraphs[index]}
            </Paragraph>
          ) : (
            <Paragraph>{data.paragraphs[index]}</Paragraph>
          )
        })}
      </div>
    </article>
  )
}
