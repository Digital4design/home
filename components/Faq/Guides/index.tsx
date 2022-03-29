import GuideCards from "../GuideCards";

function Guides() {
  return (
    <section className="container flex flex-col gap-10 py-10 lg:py-28">
      <h2 className="text-center">
        All you need to know about shared ownership
      </h2>
      <GuideCards />
    </section>
  );
}

export default Guides;
