import SectionHeading from "components/global/sectionHeading";
import React from "react";

interface PropTypes {
  heading: String;
}

function RelatedProperties({ heading }: PropTypes) {
  return (
    <section>
      <SectionHeading heading={heading} />
      ...Related properties....
    </section>
  );
}

export default RelatedProperties;
