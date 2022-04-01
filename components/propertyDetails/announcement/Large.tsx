function Large() {
  return (
    <aside className=" border-radius flex flex-col items-center rounded bg-brand-green-light py-10 px-5 text-center text-brand-blue md:mx-0">
      <h4 className="mb-5">
        Don&apos;t miss out on our special offer, up to 5% cash back!
      </h4>
      <p className="mb-1 font-light text-brand-blue">
        Reserve property before 31October 2020 and receive up to 5% off your
        share value as Cash Back to the value of £5,250.*
      </p>

      <p className="text-brand-blue">
        Offer available:{" "}
        <span className="font-bold">
          14 August 2020 12:00am to 31 October 2020 12:00am{" "}
        </span>
      </p>
    </aside>
  );
}

export default Large;
