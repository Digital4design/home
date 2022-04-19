import questionsData from "../../../mockQuestions.json"
import Link from "next/link"
import Paragraph from "components/Core/Paragraph"
import { HomeIcon } from "@heroicons/react/outline"
import { Ref, useEffect, useRef } from "react"

interface AnswerContent {
  icon: string
  text: string[]
}

interface QuestionAnswer {
  title: string
  content: AnswerContent[]
}

interface Question {
  slug: string
  name: string
  heading: string
  introduction: string
  image: string
  answers: QuestionAnswer[]
}

export default function FAQ({ data }: Record<"data", Question>) {
  const sidebar: Ref<any> = useRef(null)

  useEffect(() => {
    const checkIsStuck = () => {
      if (!sidebar.current) return

      const sidebarPos = sidebar.current.getBoundingClientRect().top

      if (sidebarPos > 110) {
        sidebar.current.classList.remove("sidebar-stuck")
        return false
      }

      sidebar.current.classList.add("sidebar-stuck")
    }

    document.addEventListener("scroll", checkIsStuck)

    return () => document.removeEventListener("scroll", checkIsStuck)
  }, [sidebar])

  return (
    <>
      <section className="py-16">
        <div className="container">
          <h1 className="text-center text-5xl">
            All you need to know of shared ownership
          </h1>
        </div>
      </section>
      <section>
        <div className="container-sm">
          <div className="relative w-full">
            <aside
              className="sticky top-[100px] float-left w-1/3 rounded-sm px-6 py-4 transition-all duration-150 ease-in-out"
              ref={sidebar}
            >
              {questionsData.map((question) => (
                <Link
                  href={`/guides-and-faqs/${question.slug}`}
                  key={question.slug}
                >
                  <a
                    className={`my-3 block rounded-[5px] py-3 px-6 text-lg ${
                      data.name === question.name
                        ? " bg-brand-green text-white"
                        : "text-brand-green hover:text-brand-green-dark"
                    }`}
                  >
                    {question.name}
                  </a>
                </Link>
              ))}
            </aside>
            <div className="float-right w-2/3 pl-20">
              <h2 className="mb-4 text-2xl">{data.heading}</h2>
              {data.introduction !== "" && (
                <div className="mb-8">
                  <Paragraph>{data.introduction}</Paragraph>
                </div>
              )}
              {data.answers.map((answer) => (
                <div className="p-8" key={answer.title}>
                  {answer.content.map(({ icon, text }) => (
                    <div className="flex" key={icon}>
                      <figure className="mr-4 flex h-16 w-16 items-center justify-center rounded bg-gray-100">
                        <HomeIcon className="h-10 w-10 text-brand-green" />
                      </figure>
                      <div className="flex-1">
                        <h3 className="mb-4 text-lg font-medium">
                          {answer.title}
                        </h3>
                        {text.map((paragraph, index) => (
                          <Paragraph key={index}>{paragraph}</Paragraph>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="clear-both"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export async function getStaticPaths() {
  const response = questionsData

  const paths: any[] = []

  response.forEach((question: Question) => {
    paths.push({ params: { slug: question.slug } })
  })

  return {
    paths,
    fallback: false,
  }
}

interface Params {
  params: Record<"slug", string>
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params

  const response = questionsData

  const data = response.find((question: Question) => question.slug === slug)

  return {
    props: {
      data: data,
    },
  }
}
