import React from "react";

function Announcement() {
  return (
    <aside className=" bg-brand-green-light md:mx-0 border-radius flex flex-col items-center rounded text-center p-12  ">
      <h2>Don&apos;t miss out on our special offer, up to 5% cashback!</h2>
      <p>
        Reserve property before 31October 2020 and receive up to 5% off your
        share value as Cash Back to the value of £5,250.*
      </p>

      <p>
        Offer available:{" "}
        <span className=" font-bold ">
          14 August 2020 12:00am to 31 October 2020 12:00am{" "}
        </span>
      </p>
    </aside>
  );
}

export default Announcement;
