import { ChildrenProps } from "types";

function FaqBanner({ children }: ChildrenProps) {
  return (
    <section className="h-[550px] bg-brand-blue from-brand-grey-light to-brand-blue-light">
      <div className="container-sm flex h-full flex-col items-center justify-center gap-14 pb-20 text-center">
        {children}
      </div>
    </section>
  );
}

export default FaqBanner;
