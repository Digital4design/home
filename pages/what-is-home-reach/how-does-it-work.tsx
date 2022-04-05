import StepImage from "components/Steps/StepImage"
import React, { ReactEventHandler, SyntheticEvent, useState } from "react"
import ScrollIntoView from "react-scroll-into-view"

export default function HowDoesItWork() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [content, setContent] = useState<string>("Step 1")
  const steps = [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7",
    "Step 8",
  ]

  const handleClick = (e: SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLButtonElement)) return
    setActiveIndex(Number(e.target.dataset.index))
    setContent(e.target.innerText)
  }

  return (
    <>
      <header className="sticky top-[73px] h-16 border-t bg-white shadow-lg">
        <div className="container-fluid flex h-full justify-center lg:container">
          {steps.map((step, index) => {
            const borderClasses = index === 0 ? "border-x" : "border-r"
            return (
              <ScrollIntoView
                selector={`#step-${index + 1}`}
                key={step}
                style={{
                  display: "flex",
                  flex: 1,
                }}
                alignToTop={true}
              >
                <button
                  className={`grow-1 flex h-full flex-1 items-center justify-center font-semibold text-brand-grey ${
                    activeIndex == index && "active-step"
                  } ${borderClasses}`}
                  data-index={index}
                  onClick={handleClick}
                >
                  {step}
                </button>
              </ScrollIntoView>
            )
          })}
        </div>
      </header>
      <main>
        <section className="py-16">
          <div className="container-sm">
            <h1 className="text-center text-5xl">
              Eight easy steps to owning a brand new home!
            </h1>
          </div>
        </section>
        {stepsContent.map((step, index) => (
          <StepImage
            title={step.title}
            id={step.id}
            index={index}
            active={activeIndex}
            key={step.id}
            imageURL={step.image}
            placeholderURL={step.placeholder}
            alt={step.alt}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              laborum itaque ullam voluptates reiciendis consectetur ducimus
              ratione non nobis eveniet, fugiat, suscipit sequi, repellat magnam
              quos distinctio ad est similique!
            </p>
          </StepImage>
        ))}
      </main>
    </>
  )
}

export const stepsContent = [
  {
    title: "Register",
    content: "",
    id: "step-1",
    image: "/assets/hr-first-time-buyer.png",
    placeholder: "/assets/hr-first-time-buyer.png",
    alt: "Some sorta image",
  },
  {
    title: "Assessment",
    content: "",
    id: "step-2",
    image: "/assets/hr-first-time-buyer.png",
    placeholder: "/assets/hr-first-time-buyer.png",
    alt: "Some sorta image",
  },
  {
    title: "What can you afford to buy?",
    content: "",
    id: "step-3",
    image: "/assets/hr-first-time-buyer.png",
    placeholder: "/assets/hr-first-time-buyer.png",
    alt: "Some sorta image",
  },
  {
    title: "Mortgage offer",
    content: "",
    id: "step-4",
    image: "/assets/hr-first-time-buyer.png",
    placeholder: "/assets/hr-first-time-buyer.png",
    alt: "Some sorta image",
  },
  {
    title: "Reserve",
    content: "",
    id: "step-5",
    image: "/assets/hr-first-time-buyer.png",
    placeholder: "/assets/hr-first-time-buyer.png",
    alt: "Some sorta image",
  },
  {
    title: "Appoint solicitors",
    content: "",
    id: "step-6",
    image: "/assets/hr-first-time-buyer.png",
    placeholder: "/assets/hr-first-time-buyer.png",
    alt: "Some sorta image",
  },
  {
    title: "Exchange contacts",
    content: "",
    id: "step-7",
    image: "/assets/hr-first-time-buyer.png",
    placeholder: "/assets/hr-first-time-buyer.png",
    alt: "Some sorta image",
  },
  {
    title: "On completion",
    content: "",
    id: "step-8",
    image: "/assets/hr-first-time-buyer.png",
    placeholder: "/assets/hr-first-time-buyer.png",
    alt: "Some sorta image",
  },
]
