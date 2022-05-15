// import FAQAccordion from "components/PropertyDetails/Accordion"

import AccordionItems from "components/PropertyDetails/Accordion"

function Accordion() {
  const accordionData = [
    {
      heading: "General information",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae voluptate tempora voluptatem accusantium eos voluptatibus magni obcaecati officiis sed.",
    },
    {
      heading: "Costs",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae voluptate tempora voluptatem accusantium eos voluptatibus magni obcaecati officiis sed.",
    },
    {
      heading: "Insurance",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae voluptate tempora voluptatem accusantium eos voluptatibus magni obcaecati officiis sed.",
    },
    {
      heading: "Once purchased",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae voluptate tempora voluptatem accusantium eos voluptatibus magni obcaecati officiis sed.",
    },
    {
      heading: "Rent",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quae voluptate tempora voluptatem accusantium eos voluptatibus magni obcaecati officiis sed.",
    },
  ]

  return (
    <section className="container lg:px-80">
      <AccordionItems data={accordionData} />
    </section>
  )
}

export default Accordion
