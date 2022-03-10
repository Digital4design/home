import React from "react";

interface PropTypes {
  heading: String;
}

function SectionHeading({ heading }: PropTypes) {
  return <h5 className="my-5">{heading}</h5>;
}

export default SectionHeading;
