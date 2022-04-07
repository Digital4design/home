import Terms from "components/Terms"
import React from "react"

export default function TermsAndConditions() {
  return (
    <main role="main">
      <section className="py-16">
        <div className="container">
          <h1 className="text-center text-5xl">Terms & Conditions</h1>
        </div>
      </section>
      <section className="pb-8">
        {terms_content.map((termData) => (
          <Terms content={termData} key={termData.title} />
        ))}
      </section>
    </main>
  )
}

export const terms_content = [
  {
    title: "Bishops Place",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a velit molestie, imperdiet mauris laoreet, congue lacus. Duis ut eros et tellus venenatis fringilla id sed tortor. Sed et dapibus lacus. Nulla nec sem orci. Praesent aliquam vehicula interdum. Maecenas blandit in nibh a commodo. Phasellus vehicula sapien eget mi sagittis, sit amet pellentesque mauris elementum.",
      "Available on plots 1, 3",
    ],
  },
  {
    title: "Beck View",
    paragraphs: [
      "Flooring, turf and blinds is included in the Home Reach plots at Beck View",
      "T&Cs - Flooring, turf and blinds included up to £1,000 included on plot 171 for new reservations only, not to be used in conjunction with any other offer.",
    ],
  },
  {
    title: "Boro Park",
    paragraphs: [
      "£1,000 voucher to spend on our options range, plus grass to rear garden and fencing* or your mortgage paid for 6 months, or, carpets and vinyl throughout the home",
      "* No cash alternative. Options available dependant on build stage.",
      "Mortgage paid for six months up to a maximum value of £2,000",
    ],
  },
  {
    title: "Bruneval Gardens",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum eos quia, tenetur voluptatum at. Est dolores facere totam delectus alias eos impedit odit expedita fugit, laboriosam nihil rerum dolor!",
      "Available on plots 75, 76, 77, 78, 80, 81, 82, 83, 85 and 86",
    ],
  },
  {
    title: "Charlton Chase",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum eos quia.",
      "Available on plots 1, 3",
    ],
  },
  {
    title: "Cricket Field Grove",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum eos quia.",
      "Dolor sit amet consectetur adipisicing elit. Perspiciatis blanditiis vel dolore laboriosam id voluptatem recusandae architecto. Nemo vero quo incidunt laudantium maiores. Ratione, recusandae ipsam? Temporibus quam autem odio.",
      "Available on plots 1, 3",
    ],
  },
]
