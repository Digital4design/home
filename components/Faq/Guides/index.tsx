import Link from "next/link";
import GuideCards from "../GuideCards";

function Guides() {
  return (
    <section className="container flex flex-col items-center justify-center gap-10 py-10 lg:py-28">
      <h2 className="text-center">
        All you need to know about shared ownership
      </h2>
      <GuideCards />
      <Link href="">
        <p className="w-full cursor-pointer rounded border border-brand-green px-8 py-3 text-center text-brand-green transition-all hover:bg-brand-green hover:text-white lg:w-fit">
          Browse all guides
        </p>
      </Link>
    </section>
  );
}

export default Guides;
