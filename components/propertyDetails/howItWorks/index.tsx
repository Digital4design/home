import Button from "components/global/button";

function HowItWorks() {
  return (
    <div className="flex h-48 flex-col items-center justify-center gap-5 rounded bg-brand-blue px-10">
      <h5 className="text-center font-normal text-white">
        Not sure how <br /> part buy - part rent works?
      </h5>
      <Button>Learn more</Button>
    </div>
  );
}

export default HowItWorks;
